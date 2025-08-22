import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Image from 'react-bootstrap';
import webLogo from "../../../../public/Images/meeshoLogo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <section className="header">
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} xm={12} xs={12}>
                <div className="inner_div_header">
                  <div className="left_header">
                    <div className="logo_img">
                      <Image src={webLogo} alt=".." title=".." fetchPriority='high'/>
                    </div>
                  </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header