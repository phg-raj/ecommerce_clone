import Image from "next/image";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../public/sass/pages/homepage.scss";
import Homepage from "./homepage/page";
export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <Homepage />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
