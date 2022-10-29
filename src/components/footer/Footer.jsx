import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import Logo from "../../assets/images/eco-logo.png";
import "./footer.scss";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1>Online Market</h1>
              </div>
            </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                delectus error quas nesciunt aliquam repudiandae assumenda
                laboriosam ex, quam sit fugit vel voluptatem nisi maiores rerum
                culpa officiis aut voluptate?
              </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">
                Top Categories
              </h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>
                    Mobile Phones
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>
                    Modern Sofa
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>
                    Arm Chair
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>
                    Smart Watch
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">
                Usefull Links
              </h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/shop'>
                    Shop
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='/cart'>
                    Cart
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='/login'>
                    Login
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>
                    Privacy Policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">
                Contacts
              </h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 ">
                  <span>
                  <i class="ri-map-pin-line"></i>
                  <p>Gunung Anyar, Surabaya, Indonesia</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                <span>
                <i class="ri-phone-line"></i>
                  <p>+6287758400748</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                <span>
                <i class="ri-mail-line"></i>
                  <p>wildprojectco@gmail.com</p>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='14'>
            <p className="footer__copyright">
              Copyright {year} developed by Dinova Widytianto. All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
