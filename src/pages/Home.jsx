import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/helmet/Helmet";
import HeroImg from "../assets/images/hero-img.png";
import "../styles/home.scss";
import Services from "../services/Services";
import ProductsList from "../components/ui/ProductsList";
import Products from "../assets/data/products";
import CounterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/ui/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setbestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = Products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = Products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = Products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = Products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = Products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setbestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"} className="head__home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Produk In {year}</p>
                <h2> Make Your Home More Modern & Minimalist</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore quibusdam fuga, asperiores fugiat alias illum commodi
                  eos, ullam atque sequi voluptate, aspernatur consectetur
                  placeat distinctio corporis dignissimos sit et architecto?
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={HeroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className="trending__product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Product</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales mb-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timmer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                <Clock className="clock__data" />
              </div>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={CounterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals mb-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category mb-5">
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">
                Popular In Category
              </h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
