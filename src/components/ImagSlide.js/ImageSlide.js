import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@material-ui/core';
import './imageSlide.css';

const useStyles = makeStyles((theme) => ({
    caption: {
        fontFamily: 'Inter sans-serif',
        fontSize: '40px',
        textAlign: 'left',
        [theme.breakpoints.down(1324)]: {
            fontSize: '30px'
        }
    },
}));

const data = [
    {
        id: 1,
        url: '../assets/images/bg-1.png',
        title: 'Pendanaan Bisnis Koperasi Aman & Transparan',
        type: 'link',
        subtitle: 'Mulai pendanaan pertanian yang aman, sekaligus berdampak kepada masyarakat dan lingkungan.',
        ListItem: ['Memberdayakan Petani', 'Berdampak Lingkungan', 'Mendukung Ketahanan Pangan']

    },
    {
        id: 2,
        url: '../assets/images/bg-2.png',
        title: null,
        type: null
    },
    {
        id: 3,
        url: '../assets/images/bg-3.png',
        title: null,
        type: null
    }
]

// console.log(data)


const currentURL = window.location.href + 'backend/public/images/';
// console.log(currentURL)

const ImageSlide = (props) => {
    const classes = useStyles();
    return (
        <Carousel fade>
            {data?.map((item, i) => {
                return (
                    <Carousel.Item key={i}>
                        <img src={item.url} className="d-block w-100" alt="..." style={{ height: "575px" }} />
                        <Carousel.Caption className={item.type === 'link' ? 'carouselCaptionHomeWithLink' : 'carouselCaptionHome'}>
                            <p className={classes.caption}>{item.title}</p>
                            {item.type === 'link' ?
                                <div className='text-left'>
                                    <p style={{ textAlign: 'left', fontFamily: 'Inter sans-serif',fontSize: '18px' }}>{item.subtitle}</p>
                                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <a href={props.token ? '/investorPage' : '/signup'} className='btn btn-primary' style={{  backgroundColor: '#459DDF', borderRadius: 13,  padding: '5px 50px', marginTop: '20px' }}>Daftar</a>
                                    </div>
                                    {item.ListItem && item.ListItem.map((value, key) => {
                                        return (
                                            <div key={key} className='d-flex' style={{  marginBotom: 10, marginTop: key == 0 ? 20 : 0 }}>
                                                <img src='../assets/icons/CentangIcon.png' style={{ alignSelf: 'start' }} />
                                                <p style={{  fontFamily: 'Inter sans-serif', fontSize: '16px' }}>{value}</p>
                                            </div>
                                        )
                                    })}
                                </div> : null}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
            {/* <Carousel.Item>
                <img
                className="d-block w-100"
                src="../assets/images/bg-1.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../assets/images/bg-2.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../assets/images/bg-3.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
        // <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className="carousel-inner">
        //         {renderImage()}
        //         <div className="carousel-item active">
        //         <img src={require('../assets/images/bg-1.png')} className="d-block w-100" alt="..." />
        //         <div className="carousel-caption d-none d-md-block">
        //             <h5>First slide label</h5>
        //             <p>Some representative placeholder content for the first slide.</p>
        //         </div>
        //         </div>
        //         <div className="carousel-item">
        //         <img src={require('../assets/images/bg-2.png')} className="d-block w-100" alt="..." />
        //         <div className="carousel-caption d-none d-md-block">
        //             <h5>Second slide label</h5>
        //             <p>Some representative placeholder content for the second slide.</p>
        //         </div>
        //         </div>
        //         <div className="carousel-item">
        //         <img src={require('../assets/images/bg-3.png')} className="d-block w-100" alt="..." />
        //         <div className="carousel-caption d-none d-md-block">
        //             <h5>Third slide label</h5>
        //             <p>Some representative placeholder content for the third slide.</p>
        //         </div>
        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
    )
}

export default ImageSlide;