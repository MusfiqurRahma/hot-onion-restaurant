import React from 'react';
import services1 from '../../../Img/Image/adult-blur-blurred-background-687824.png';
import services2 from '../../../Img/Image/chef-cook-food-33614.png';
import services3 from '../../../Img/Image/architecture-building-city-2047397.png';

const Services = () => {
    return (
       <> <div style={{textAlign:'left',marginLeft:'100px',fontWeight:'500',marginTop:'10px'}}>
            <h2>Why You Choose Us</h2>
            <p>Barton waited twenty always repair in within we do.An delighted offending <br /> curiosity my is dashwoods at.Boy prosperous increasing surrounded.</p>
        </div>
        <div style={{display:'flex',marginLeft:'100px',marginTop:'30px'}}>
                <div>
                <img style={{ width: '100%', height: '70%', marginRight: '15px',borderRadius:'50%' }} src={services1} alt="" />              
                    <h5><i style={{backgroundColor:'#f91d47',color:'white',padding:'6px',marginTop:'5px',borderRadius:'50%'}} class="fas fa-car"></i> Fast Delivery</h5>
                    <p>Keep Your System in sync with automated hook based notifications each time link is paid and how we dream about our future.</p>
                    <a style={{ textDecoration: 'none' }} href="/seemore">see more<i class="far fa-hand-point-right"></i></a>
                </div>
                <div>
                    <div>
                        <img style={{ width: '100%', height: '70%', margin: '10px' }} src={services2} alt="" />
                        <h5><i style={{backgroundColor:'#f91d47',color:'white',padding:'6px',marginTop:'5px',borderRadius:'50%'}} class="far fa-bell"></i> A Good Auto Responder</h5>
                        <p>Keep Your System in sync with automated hook based notifications each time link is paid and how we dream about our future.</p>
                        <a style={{textDecoration:'none'}} href="/seemore">see more <i class="far fa-hand-point-right"></i></a>
               </div>
                </div>
                <div>
                    <div>
                        <img style={{ width: '100%', height: '80%', margin: '20px' }} src={services3} alt="" />
                        <h5><i style={{backgroundColor:'#f91d47',color:'white',padding:'6px',marginTop:'5px',borderRadius:'50%'}}  class="fas fa-car-side"></i> Home Delivery</h5>
                        <p>Keep Your System in sync with automated hook based notifications each time link is paid and how we dream about our future.</p>
                        <a style={{textDecoration:'none'}} href="/seemore">see more <i class="far fa-hand-point-right"></i></a>
                </div>
            </div>
            </div></>
    );
};

export default Services;