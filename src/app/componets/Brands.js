"use client"
import brandImg1 from "../../../public/Images/brand1.webp";
import brandImg2 from "../../../public/Images/brand2.webp";
import brandImg3 from "../../../public/Images/brand3.webp";
import brandImg4 from "../../../public/Images/brand4.webp";
import brandImg5 from "../../../public/Images/brand5.webp";
import brandImg6 from "../../../public/Images/brand6.webp";
import brandImg7 from "../../../public/Images/brand7.webp";
import brandImg8 from "../../../public/Images/brand8.webp";
import React from 'react';
import Image from 'next/image';
import "../../../public/sass/pages/brand.scss";
import { useRef } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Brand = () => {
  const swiperRef = useRef(null);
  return (
    <section className="orginal_brand">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="h3_brand">
              <h3>Original Brands</h3>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={7}
              className="brand_Swiper"
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
              allowTouchMove={false}
            >

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg1} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg2} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg3} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg4} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg5} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg6} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg7} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={brandImg8} alt=".." title='..' fetchPriority='low' />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={7}
        className="brand_Swiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      > */}
      {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={7}
        className="brand_Swiper"
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      > */}
    </section>
  )
}

export default Brand;