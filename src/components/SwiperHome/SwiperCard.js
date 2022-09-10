import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', 
        width: 'fit-content', 
        marginBottom: 20, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
}));

const SwiperCard = ({ title, desc, activeSlot, sumSlot, estMargin, periode, imageUrl}) => {
    const classes = useStyles();
    return(
            <Link to={{ pathname: '/Project-Detail', data: { title, desc, activeSlot, sumSlot, estMargin, periode, imageUrl}}} style={{textDecoration: 'none'}}>
                <div className={classes.card}>
                    <img src={imageUrl} style={{ width: '100%'}}/>
                    <div style={{ marginLeft: 13, width: '90%'}} className={'d-flex justify-content-between flex-column'}>
                        <div>
                            <span className='text-decoration-none' style={{fontFamily: 'Poppins', fontSize: 12, fontWeight: 500, marginTop: 9, color: 'black'}}>{title}</span>
                            <br/>
                            <span className='text-decoration-none' style={{fontFamily: 'Poppins', fontSize: 15, fontWeight: 700, color: 'black'}}>{desc}</span>
                        </div>
                        <br/>
                        <div>
                            <span style={{fontFamily: 'Poppins', fontSize: 12, fontWeight: 700, color: 'black'}}>{`${activeSlot} Slot `}<span style={{fontFamily: 'Poppins', fontSize: 12, fontWeight: 500}}>telah didanai, sisa</span>{` ${sumSlot} Slot `}<span style={{fontFamily: 'Poppins', fontSize: 12, fontWeight: 500}}>lagi</span></span>
                            <br/>
                            <ProgressBar now={20} variant={'success'} style={{marginTop: 13, marginBottom: 13}}/>
                            <div className="row" style={{marginBottom: 13}}>
                                <div className="col" style={{ borderRightWidth: 1, borderRightStyle: 'solid', borderRightColor: '#C5C5C5'}}>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 12, color: '#AEAEAE'}}>Estimasi Margin</span>
                                    <br/>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 12, color: 'black'}}>{estMargin}</span>
                                </div>
                                <div className="col" style={{ textAlignLast:'right'}}>
                                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 12, color: '#AEAEAE'}}>Periode<br/><span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 12, color: '#000000'}}>{periode}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    )
};

export default SwiperCard;