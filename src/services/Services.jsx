import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./services.scss";
import { motion } from "framer-motion";
import ServiceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {ServiceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="content__services">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
