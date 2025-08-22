"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../.../../../../public/sass/pages/swiper_slider.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import slide1 from "../../../public/Images/slidee1.webp";
import Link from "next/link";
import slide2 from "../../../public/Images/slide2.webp";
import slide3 from "../../../public/Images/slidee.webp";
import slide4 from "../../../public/Images/slide4.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
function SwiperSlider() {
    library.add(fas, fab)

    return (

        <section className="swiper_section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                // modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                className="swiper_hello"
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
            >
                <SwiperSlide>
                    <div className="img_Position">
                        <Link href="#" className="imgLink">
                            <Image src={slide1} alt=".." title=".." fetchPriority="low" />
                        </Link>
                    </div>
                    {/* <div className="slide">
                        <Container >
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <div className="slider_img">
                                        <div className="contant">
                                            <div className="heading_hai">
                                                Smart Shopping
                                            </div>
                                            <div className="heading_hai">
                                                Trusted by Millions
                                            </div>
                                            <div className="shop_now_btn">
                                                <Link href="#" className="shop_btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className="imgLink">
                        <Image src={slide2} alt=".." title=".." fetchPriority="low" />
                    </Link>
                    {/* <div className="slide">
                        <Container >
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <div className="slider_img">
                                        <div className="contant">
                                            <div className="heading_hai">
                                                Smart Shopping
                                            </div>
                                            <div className="heading_hai">
                                                Trusted by Millions
                                            </div>
                                            <div className="shop_now_btn">
                                                <Link href="#" className="shop_btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className="imgLink">
                        <Image src={slide3} alt=".." title=".." fetchPriority="low" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className="imgLink">
                        <Image src={slide4} alt=".." title=".." fetchPriority="low" />
                    </Link>
                </SwiperSlide>
            </Swiper>
            <div className="three_div">
                <div className="inner_three">
                    <ul type="none">
                        <li>
                            7 Days Easy Return</li>
                        <li>Cash On Delivery</li>
                        <li>Low Price</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SwiperSlider;