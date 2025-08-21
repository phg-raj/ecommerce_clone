import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <section className="header">
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} xm={12} xs={12}>
                    <h1>Hello Footer</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header