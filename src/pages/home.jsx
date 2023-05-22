// import Container from '../components/Container'
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CountUp from 'react-countup'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import  data  from '../data.json';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper.min.css'
import { blueGrey } from '@mui/material/colors';
import { sliderSettings } from '../Helper/common';
// import CountUp from 'countup';


const Home = () => {
    return<section >
        <header id="banner1">
            <Container className='container-1'>
                <Row>
                    <Col lg={6} md={6} sm={12} className='innerWidth section1-col1'>
                   
                        <div className='orange-ball'/>
                        <h2>Discover <br /> Most Suitable <br /> Property</h2>

                        <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem <br /> cum facere fugiat voluptatibus expedita tempora debitis rem. Culpa, ipsum.</p>
                        <div className='search-bar'>
                            <LocationOnIcon className='location-icon' style={{color:'blue', fontSize:'25px'}}/>
                            <input type="text" />
                            <button>search</button>
                        </div>
                        <div className="count-up">
                            <div className="stat" style={{color:'white'}}>
                            <span>
                            <CountUp start ={8800} end = {9000} duration = {4}/></span><span>+</span> <br />
                            <span> Premium Products</span>
                            </div>
                            <div className="stat" style={{color:'white'}}>
                            <span>
                            <CountUp start ={1950} end = {2000} duration = {4}/></span><span>+</span> <br />
                            <span> Happy Customers</span>
                            </div>
                            <div className="stat" style={{color:'white'}}>
                            <span>
                            <CountUp  end = {28}/></span><span>+</span> <br />
                            <span> Award Winnings</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} >
                   
                    <div className='img-container'>
                            <img src="./photo-1591474200742-8e512e6f98f8.jpeg" alt="" />
                        </div>
                     </Col>
                    
                </Row>
                </Container >
                </header>\

                {/* second container */}

                <div className="best-review">
                <Container className='container-2'>
                    <Row>
                        <Col lg ={12} md = {12} className='review-header'>
                        <div className="r-head">
                            <h4>Best Choices</h4>
                            <h3>Popular Dependencies</h3>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Swiper {...sliderSettings}>
                           
                            {
                                data.map((card, i)=>(
                                    <SwiperSlide key={i} className='swiper-part' >
                                        <div className="flexColCenter r-card">
                                            <img src={card.image} alt="" style={{borderRadius:'20px'}}/>
                                            <span className="r-price" style={{marginLeft:'-7.5rem', fontSize:'1.2rem', fontWeight:'600'}}>
                                                <span style={{color:'orange'}}>$</span><span>{card.price}</span>
                                            </span>
                                            <span style={{color: 'blue', marginLeft:'-1.8rem', fontSize:'1.5rem', fontWeight:'bold'}}>{card.name}</span>
                                            <span style={{marginLeft:'3.5rem', fontSize:'0.7rem', width:'15rem'}}>{card.detail}</span>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        </Col>
                    </Row>
                </Container>
                </div>
               
        </section>
        
        {/* <Container color = "red" color2= "white" size = "20px"/>
        <Container color = "blue" color2= "white" size = "20px"/>
        <Container color = "green" color2= "white" size = "20px"/>
        <Container color = "orange" color2= "white" size = "20px"/>
        <Container color2= "white" size = "20px"/> */}
    
}

export default Home