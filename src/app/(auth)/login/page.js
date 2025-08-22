import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Image from 'react-bootstrap';
import webLogo from "../../../../public/Images/meeshoLogo.svg";
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

                <div className="vertical-divider"></div>
                <Link href="#" className="icon">
                  <span className="profile_icon">&#128100;</span>
                  Profile
                </Link>
                <Link href="#" className="icon">
                  <span className="cart_icon">&#128722;</span>
                  Cart
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} xm={12} xs={12}>
            <div className="inner_div_bottom">
              <nav >

                <div className="img_bottom">

                <div className="logo_area" >
                  <Image src={Mobiles} alt=".." title=".." fetchPriority='high' width={48} height={48} />
                </div>
                <div className="text_area">
                  <ul><li><Link href="#" className="icon">Mobiles & Tablets </Link> </li>
                  </ul>
                </div>


                <div className="logo_area" >
                  <Image src={Fashion} alt=".." title=".." fetchPriority='high' width={48} height={48} />
                </div>
                <div className="text_area"><ul><li><Link href="#" className="icon">Fashion </Link> </li>
                </ul>
                </div>


                <div className="logo_area" >
                  <Image src={Electronics} alt=".." title=".." fetchPriority='high' width={48} height={48} />
                </div>
                <div className="text_area">
                  <ul><li><Link href="#" className="icon">Electronics</Link> </li>
                  </ul>

                </div>

                <div className="logo_area" >
                  <Image src={TVs} alt=".." title=".." fetchPriority='high' width={48} height={48} />
                </div>
                <div className="text_area">
                  <ul><li><Link href="#" className="icon">TVs & Appliances</Link> </li>
                  </ul>
                </div>


                <div className="logo_area" >
                  <Image src={Home} alt=".." title=".." fetchPriority='high' width={48} height={48} />
                </div>
                <div className="text_area">
                  <ul><li><Link href="#" className="icon">Beauty, Food</Link> </li>
                  </ul>
                </div>


                <div className="logo_area" >
                  <Image src={Beauty} alt=".." title=".." fetchPriority='high' width={48} height={48} />
                </div>
                <div className="text_area">
                  <ul><li><Link href="#" className="icon">Home & Furniture</Link> </li>
                  </ul>
                </div>

                </div>

              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </section>



  )
}

export default Header



