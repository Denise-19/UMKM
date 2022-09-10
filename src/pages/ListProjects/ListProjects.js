import React from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { 
    makeStyles,
} from '@material-ui/core';
import SwiperCard from '../../components/SwiperHome/SwiperCard';

const url = '../assets/images/bg-3.png';

const data= [
    {
        title: 'Peternakan', 
        desc: 'Breeding Domba Garut', 
        activeSlot: 40, 
        sumSlot: 100, 
        estMargin: '15%-20%', 
        periode: '1 tahun',
        imageUrl:'../assets/images/ContentHome1.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Pisang Cavendish', 
        activeSlot: 1000, 
        sumSlot: 500, 
        estMargin: '12%-15%', 
        periode: '9 bulan',
        imageUrl:'../assets/images/ContentHome2.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Jagung Hybrida', 
        activeSlot: 700, 
        sumSlot: 300, 
        estMargin: '10%-15%', 
        periode: '6 bulan',
        imageUrl:'../assets/images/ContentHome3.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Breeding Domba Garut', 
        activeSlot: 40, 
        sumSlot: 100, 
        estMargin: '15%-20%', 
        periode: '1 tahun',
        imageUrl:'../assets/images/ContentHome1.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Breeding Domba Garut', 
        activeSlot: 40, 
        sumSlot: 100, 
        estMargin: '15%-20%', 
        periode: '1 tahun',
        imageUrl:'../assets/images/ContentHome2.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Breeding Domba Garut', 
        activeSlot: 40, 
        sumSlot: 100, 
        estMargin: '15%-20%', 
        periode: '1 tahun',
        imageUrl:'../assets/images/ContentHome3.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Breeding Domba Garut', 
        activeSlot: 40, 
        sumSlot: 100, 
        estMargin: '15%-20%', 
        periode: '1 tahun',
        imageUrl:'../assets/images/ContentHome1.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Breeding Domba Garut', 
        activeSlot: 40, 
        sumSlot: 100, 
        estMargin: '15%-20%', 
        periode: '1 tahun',
        imageUrl:'../assets/images/ContentHome2.png'
    },
    {
        title: 'Peternakan', 
        desc: 'Breeding Domba Garut', 
        activeSlot: 40, 
        sumSlot: 100, 
        estMargin: '15%-20%', 
        periode: '1 tahun',
        imageUrl:'../assets/images/ContentHome3.png'
    },

]

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: '30px'
    }, 

    ul: {
        listStyle: 'none',
        cursor: 'pointer',
    },

    li: {
        display: 'inline-block',
        margin: '3px 10px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '1px solid rgba(119, 119, 119, 1)',
        borderRadius: '5px',
        padding: '3px 10px'
    },

    form: {
        position: 'relative',
        width: '50%',
        float: 'right',
        display: 'flex',
        flexDirection: 'row',
       
    },

    input: {
        background: 'transparent',
        margin: '0',
        width: '100%',
        padding: '5px 10px',
        fontSize: '14px',
        color: 'inherit',
        border: '1px solid rgba(119, 119, 119, 1)',
        borderRadius: '5px',
    },

    icon: {
        border: 'none',
        position: 'absolute',
        width: '40px',
        height: '100%',
        right: '0',
        padding: '0',
        margin: '0',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
    }
}));

const ListProjects = () => {
    const classes = useStyles();

    return (
        <>
            <Jumbotron url={url} />
            <div className={`container ${classes.container}`}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <span href='#'>Semua Project</span>
                            </li>
                            <li className={classes.li}>
                                <span href='#'>Project Terbaru</span>
                            </li>
                            <li className={classes.li}>
                                <span href='#'>Sedang Berjalan</span>
                            </li>
                            <li className={classes.li}>
                                <span href='#'>Selesai</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <form className={classes.form}>
                            <input className={classes.input} type='text' placeholder='Cari Project'/>
                            <button className={classes.icon} type="submit"><img src='../assets/icons/search.png' /></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-between align-content-around flex-wrap'>
                {data && data.map((value, key) => {
                    return(
                        <div style={{ marginBottom: 44}}>
                            <SwiperCard title={value.title} desc={value.desc} activeSlot={value.activeSlot} sumSlot={value.sumSlot} estMargin={value.estMargin} periode={value.periode} imageUrl={value.imageUrl} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ListProjects;
