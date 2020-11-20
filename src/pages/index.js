import React from 'react';
import { Link, graphql, useStaticQuery, navigate } from 'gatsby';

import Image from 'gatsby-image';

import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTools,
  faMobileAlt,
  faKissWinkHeart,
  faHandshake,
  faPhone,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';

import './index.scss';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp(
        filter: { fluid: { originalName: { regex: "/backgroundcarousel/" } } }
      ) {
        edges {
          node {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  // console.log(data);
  return (
    <Layout>
      <SEO title="Repairphone24.de" />
      <Carousel>
        <Carousel.Item className="wrap-bg1">
          <Image
            fluid={data.allImageSharp.edges[0].node.fluid}
            alt="this is first 1"
            className="d-block w-100 background1"
          />
          <div className="overlay-pic"></div>
          <Carousel.Caption>
            <h2 className="titleProduct">Handy Reparatur in Berlin!</h2>
            <span>✅ Displays Original Qualität. </span>
            <span>✅ Handy Display, Akku Reparatur inh. 1 Std. </span>
            <span>✅ Displays Original Qualität. </span>
          </Carousel.Caption>
          <Link className="btn-termin" to="/termin">
            <Button variant="primary">Termin Buchen</Button>
          </Link>
        </Carousel.Item>
        <Carousel.Item className="wrap-bg2">
          <Image
            fluid={data.allImageSharp.edges[1].node.fluid}
            alt="this is first 1"
            className="d-block w-100 background2"
          />
          <div className="overlay-pic"></div>
          <Carousel.Caption>
            <h2 className="titleProduct">Handy Reparatur in Berlin!</h2>
            <span>✅ Displays Original Qualität. </span>
            <span>✅ Handy Display, Akku Reparatur inh. 1 Std. </span>
            <span>✅ Displays Original Qualität. </span>
          </Carousel.Caption>
          <Link className="btn-termin" to="/termin">
            <Button variant="primary">Termin Buchen</Button>
          </Link>
        </Carousel.Item>
        <Carousel.Item className="wrap-bg1">
          <Image
            fluid={data.allImageSharp.edges[2].node.fluid}
            alt="this is first 1"
            className="d-block w-100 background3"
          />
          <div className="overlay-pic"></div>
          <Carousel.Caption>
            <h2 className="titleProduct">Handy Reparatur in Berlin!</h2>
            <span>✅ Displays Original Qualität. </span>
            <span>✅ Handy Display, Akku Reparatur inh. 1 Std. </span>
            <span>✅ Displays Original Qualität. </span>
          </Carousel.Caption>
          <Link className="btn-termin" to="/termin">
            <Button variant="primary">Termin Buchen</Button>
          </Link>
        </Carousel.Item>
      </Carousel>
      {/* <h3 className="whyus"> UNSER SERVICE FÜR SIE </h3> */}
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <Col xs="12" md="6" className="whyus_card whyus_card1">
            <Card>
              <div className="whyus_title">
                <FontAwesomeIcon icon={faTools} size="4x" color="#ffaa19" />{' '}
                <h3>Handy Reparatur</h3>
              </div>

              <Card.Body>
                <Card.Text>
                  Diagnose und Kostenvoranschlag für Ihr Versicherung Diagnose
                  und Kostenvoranschlag für Ihr Versicherung Diagnose und
                  Kostenvoranschlag für Ihr Versicherung
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="6" className="whyus_card whyus_card2">
            <Card>
              <div className="whyus_title whyus_right">
                <FontAwesomeIcon icon={faMobileAlt} size="4x" color="#ffaa19" />{' '}
                <h3>Kostenvoranschlag </h3>
              </div>

              <Card.Body>
                <Card.Text>
                  Diagnose und Kostenvoranschlag für Ihr Versicherung. Diagnose
                  und Kostenvoranschlag für Ihr Versicherung
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="6" className="whyus_card whyus_card3">
            <Card>
              <div className="whyus_title">
                <FontAwesomeIcon
                  icon={faKissWinkHeart}
                  size="4x"
                  color="#ffaa19"
                />{' '}
                <h3>Kostenvoranschlag </h3>
              </div>

              <Card.Body>
                <Card.Text>
                  {' '}
                  Diagnose und Kostenvoranschlag für Ihr Versicherung. Diagnose
                  und Kostenvoranschlag für Ihr Versicherung
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="6" className="whyus_card whyus_card4">
            <Card>
              <div className="whyus_title whyus_right">
                <FontAwesomeIcon icon={faHandshake} size="4x" color="#ffaa19" />{' '}
                <h3>Kein Datenvelust</h3>
              </div>

              <Card.Body>
                <Card.Text>
                  Diagnose und Kostenvoranschlag für Ihr Versicherung. Diagnose
                  und Kostenvoranschlag für Ihr Versicherung
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="marquee">
        <div className="marquee-child">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="funktioniert">
        <div className="title">
          <h1>So funktioniert’s</h1>
        </div>
        <div className="content">
          Wir geben Ihren Auftrag an den am besten passenden Experten weiter.
          Bringen Sie Ihr Gerät am gewählten Tag in die Werkstatt oder senden
          Sie es ein. Der Experte wird bereits alle Details kennen und auf Sie
          warten.
        </div>
        <div className="typeofservice">
          <div className="typeofservice_selector">
            <input
              type="radio"
              // checked="checked"
              defaultChecked
              name="radio"
              id="funktion1"
              value="funktion1"
            />
            <label className="funktion1" htmlFor="funktion1">
              VOR ORT ABGEBEN
            </label>
            <input
              type="radio"
              // checked="checked"

              name="radio"
              id="funktion"
              value="funktion"
            />

            <label className="funktion" htmlFor="funktion">
              VERSANDREPARATUR
            </label>
            <div className="service_img"></div>
          </div>
        </div>
      </div>
      <div className="reachus">
        <Row>
          <Col xs="12" md="4" className="reachus-border">
            <div className="reachus-method">
              <FontAwesomeIcon icon={faPhone} size="2x" color="#17a2b8" />{' '}
              <h3>Hotline </h3>
            </div>
            <span>
              0177 7467357
              <br />
              Mi-Mo 9:00 - 18:00 Uhr
            </span>
          </Col>
          <Col xs="12" md="4" className="reachus-border">
            <div className="reachus-method ">
              <FontAwesomeIcon icon={faMailBulk} size="2x" color="#17a2b8" />{' '}
              <h3>Kontakt</h3>
            </div>
            <span>
              phoneabcdo@gmail.com
              <br />
            </span>
          </Col>

          <Col
            xs="12"
            md="4"
            className="reachus-border"
            onClick={() => {
              navigate('https://www.facebook.com/suachuaonline24/');
            }}
          >
            <div
              className="reachus-method reachus-facebook"
              onClick={() => {
                navigate('https://www.facebook.com/suachuaonline24/');
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#17a2b8" />{' '}
              <h3>Facebook </h3>
            </div>
            <span>
              Mạng xã hội
              <br />
              Like để nhận thông tin mới
            </span>
          </Col>
        </Row>
      </div>
      {/* <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  );
};

export default IndexPage;
