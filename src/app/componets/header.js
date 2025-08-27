"use client"
import React, { use } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Image from 'react-bootstrap';

// import webLogo from "../../../../public/Images/meeshoLogo.svg";
import Image from "next/image";
import Link from 'next/link';


import "../../../../public/sass/pages/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Mobiles from "../../../../public/images/moblie.png";
import Fashion from "../../../../public/images/man.png";
import TVs from "../../../../public/images/tv.jpg"
import Electronics from "../../../../public/images/Electronics.png"
import Home from "../../../../public/images/Home .png"
import Beauty from "../../../../public/images/Beauty.png"



const Header = () => {

  library.add(fab, fas);
  return (

    <section className="header">
      


      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} xm={12} xs={12}>
            <div className="inner_div_header">

        
              <div className="logo_text">meesho</div>

              <div className="search_bar">
                <span className="search_icon">&#128269;</span>
                <input
                  type="text"
                  placeholder="Try Saree, Kurti or Search by"
                />
              </div>
              

              <div className="utility_links">
                <div className="links_wrapper">
                  <Link href="#" className="icon">
                    <span className="profile_icon">&#128100;</span>
                    Profile
                  </Link>
                  <Link href="#" className="icon">
                    <span className="cart_icon">&#128722;</span>
                    Cart
                  </Link>
                </div>

                <div className="bar_logo">
                  <FontAwesomeIcon icon={["fas", "bars"]} className="bar_icon" />

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>                                                                                                                                                                            

      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} xm={12} xs={12}>
            <div className="inner_div_bottom">
              <nav>
                <div className="img_bottom">

                  {/* <div className="logo_area">
              <Image src={Minutes} alt="Minutes" width={48} height={48} />
              <div className="text_area"><ul><li><Link href="#">Minutes</Link></li></ul></div>
            </div> */}

                  <div className="logo_area">
                    <Image src={Mobiles} alt="Mobiles" width={48} height={48} />
                    <div className="text_area"><ul><li><Link href="#">Mobiles & Tablets</Link></li></ul></div>
                  </div>

                  <div className="logo_area">
                    <Image src={Fashion} alt="Fashion" width={48} height={48} />
                    <div className="text_area"><ul><li><Link href="#">Fashion</Link></li></ul></div>
                  </div>

                  <div className="logo_area">
                    <Image src={Electronics} alt="Electronics" width={48} height={48} />
                    <div className="text_area"><ul><li><Link href="#">Electronics</Link></li></ul></div>
                  </div>

                  <div className="logo_area">
                    <Image src={Home} alt="Home & Furniture" width={48} height={48} />
                    <div className="text_area"><ul><li><Link href="#">Home & Furniture</Link></li></ul></div>
                  </div>

                  <div className="logo_area">
                    <Image src={TVs} alt="TVs & Appliances" width={48} height={48} />
                    <div className="text_area"><ul><li><Link href="#">TVs & Appliances</Link></li></ul></div>
                  </div>
                  {/* 
            <div className="logo_area">
              <Image src={Flights} alt="Flight Bookings" width={48} height={48} />
              <div className="text_area"><ul><li><Link href="#">Flight Bookings</Link></li></ul></div>
            </div> */}

                  <div className="logo_area">
                    <Image src={Beauty} alt="Beauty & Food" width={48} height={48} />
                    <div className="text_area"><ul><li><Link href="#">Beauty, Food...</Link></li></ul></div>
                  </div>
                  {/* 
            <div className="logo_area">
              <Image src={Grocery} alt="Grocery" width={48} height={48} />
              <div className="text_area"><ul><li><Link href="#">Grocery</Link></li></ul></div>
            </div> */}

                </div>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>

    </section>



  )
}

export default Header;
