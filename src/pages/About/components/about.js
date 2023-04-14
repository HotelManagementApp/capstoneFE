import React from 'react';
import Button from "../../../components/button";
import img from '../../../asset/executive_room.jpg';
import img1 from '../../../asset/spat2.jpg';
import img2 from '../../../asset/hotel__view.jpg';
import img3 from '../../../asset/business_center.jpg';
import '../../About/style/about.css';


const About = () =>{
    return(
        <>
            <div className="container-fluid">
                <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block top">
                          <h1 className="title">CAPSTONE HOTEL</h1>
                          <p className="fs-2">We Give More Than What You Ask ; A Home.</p>
                          <Button />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block top">
                          <h1 className="title">CAPSTONE HOTEL</h1>
                          <p className="fs-2">We Give Comfort That You Cannot Resist.</p>
                          <Button />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block top">
                          <h1 className="title">CAPSTONE HOTEL</h1>
                          <p className="fs-2">Feed Your Sight ; Feed Your Mind.</p>
                          <Button />
                            </div>
                        </div>
                      </div>
                            <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                    >
                    <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
              <div className='Main_container'>  
                    <div className='text_div'>
                        <h2>VERY WELL SITUATED IN ONE OF THE PLUSHEST SUBURBAN AREAS IN THE CITY</h2>
                        <p>
                        The African Regent has gained recognition as the hotel of choice for both international travelers and savvy locals.
                        Our tagline – Simply ‘Afropolitan’- African and cosmopolitan, gives you a sense of what we represent.
                        </p>
                        <p>
                        Understanding the strong link between business and tourism, the African Regent provides an atmosphere to experience 
                        Africa and its rich culture right here at the hotel, making it a tourism destination in itself. Our luxurious rooms 
                        and suites are not only world class standard, they are also tastefully designed with fabric, colors and etchings of 
                        ‘Adinkra’ symbols that symbolize everything good there is about Africa. The hotel’s restaurant – ‘Mukyia’, hosts the 
                        best African themed Sunday brunch in the capital, prepared by our team of recognized chefs. Located less than 5 minutes 
                        from the main airport, Accra polo club, the Accra Mall and the Tetteh Quarshie Art Market, the hotel provides every traveler
                        into the city, be it for business or leisure, the opportunity to explore and experience Accra in the most convenient way possible.
                        </p>
                        <div className='img_div'>
                        <img src={img1} className="d-block w-100" alt="..." />  
                    </div>
            
                  </div>
                  <div>
                    <h1 id='bus'>BUSINESS CENTER</h1>
                   <div className='business'>
                    <img src={img3} className='buisness_img' alt='...'/>
                    <p id='text'>At The African Regent, we have created a comfortable and spacious business center with our E-lounge which is situated 
                        between the reception and the Ipop Up shop.</p>
                    </div> 
                                        <h2>AFROPOLITAN KIDS</h2>
                       <p> The African Regent takes delight in welcoming children and families. Our child-friendly team is here to ensure that your entire family makes 
                        the most out of their visit to Accra.
                        </p>
                        <h2>iPOP-UP DESIGN SHOP</h2>
                        <p>The IPop-up Shop marks the start of the new partnership between the African Regent and talented Ghanaian Fashion Designers and takes place at the hotel’s boutique.</p>
                    <img src={img} className='second_phase' alt='...'/>
                  </div>

               </div>
            
            </div>
        </>
    );
}
export default About;
