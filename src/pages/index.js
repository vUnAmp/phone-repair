import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"

import Image from "gatsby-image"

import { Carousel, Button, Container, Row, Col, Card } from "react-bootstrap"
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTools,
  faMobileAlt,
  faKissWinkHeart,
  faHandshake,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"
import serivce1 from "../images/service1.png"

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
  `)

  console.log(data)
  return (
    <Layout>
      <SEO title="SuachuaOnline24" />
      <Carousel>
        <Carousel.Item className="wrap-bg1">
          <Image
            fluid={data.allImageSharp.edges[0].node.fluid}
            alt="this is first 1"
            className="d-block w-100 background1"
          />
          <Carousel.Caption>
            <h2 className="titleProduct">Sửa chữa Online Deutschland</h2>
            <span>✅ Thay màn hình chất lượng gốc</span>
            <span>✅ Thay PIN trong vòng 1h đồng hồ </span>
            <span>✅ Chất lượng và dịch vụ chuyên nghiệp</span>
          </Carousel.Caption>
          <Link className="contact" to="/contact">
            <Button variant="primary">Liên hệ</Button>
          </Link>
          <Link className="send" to="/">
            <Button variant="primary">Gửi thiết bị</Button>
          </Link>
        </Carousel.Item>
        <Carousel.Item className="wrap-bg2">
          <Image
            fluid={data.allImageSharp.edges[1].node.fluid}
            alt="this is first 1"
            className="d-block w-100 background2"
          />

          <Carousel.Caption>
            <h2 className="titleProduct">Sửa chữa Online Deutschland</h2>
            <span>✅ Thay màn hình chất lượng gốc</span>
            <span>✅ Thay PIN trong vòng 1h đồng hồ </span>
            <span>✅ Chất lượng và dịch vụ chuyên nghiệp</span>
          </Carousel.Caption>
          <Link className="contact" to="/contact">
            <Button variant="primary">Liên hệ</Button>
          </Link>
          <Link className="send" to="/">
            <Button variant="primary">Gửi thiết bị</Button>
          </Link>
        </Carousel.Item>
        <Carousel.Item className="wrap-bg1">
          <Image
            fluid={data.allImageSharp.edges[2].node.fluid}
            alt="this is first 1"
            className="d-block w-100 background3"
          />

          <Carousel.Caption>
            <h2 className="titleProduct">Sửa chữa Online Deutschland</h2>
            <span>✅ Thay màn hình chất lượng gốc</span>
            <span>✅ Thay PIN trong vòng 1h đồng hồ </span>
            <span>✅ Chất lượng và dịch vụ chuyên nghiệp</span>
          </Carousel.Caption>
          <Link className="contact" to="/contact">
            <Button variant="primary">Liên hệ</Button>
          </Link>
          <Link className="send" to="/">
            <Button variant="primary">Gửi thiết bị</Button>
          </Link>
        </Carousel.Item>
      </Carousel>
      <h3 className="whyus"> CHÚNG TÔI CÓ THỂ GIÚP GÌ ĐƯỢC CHO BẠN? </h3>
      <Container>
        <Row>
          <Col xs="12" md="6" className="whyus_card whyus_card1">
            <Card>
              <div className="whyus_title">
                <FontAwesomeIcon icon={faTools} size="2x" color="#17a2b8" />{" "}
                <h3>Sửa chữa điện thoại </h3>
              </div>

              <Card.Body>
                <Card.Text>
                  Cung cấp dịch vụ sửa chữa điện thoại tốt nhất, với nhiều kỹ
                  thuật giỏi, nhiều năm kinh nghiệm, áp dụng công nghệ tiên tiến
                  nhất.
                  <br />
                  <div className="space"> </div>
                  Chúng tôi nhận sửa chữa phần cứng, nâng cấp phần mềm,thay màn
                  hình, thay PIN và những hỏng hóc liên quan đến máy tính bảng
                  và điện thoại của các bạn
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="6" className="whyus_card whyus_card2">
            <Card>
              <div className="whyus_title">
                <FontAwesomeIcon icon={faMobileAlt} size="2x" color="#17a2b8" />{" "}
                <h3>Tư vấn miễn phí </h3>
              </div>

              <Card.Body>
                <Card.Text>
                  Bạn băn khoăn về việc lựa chọn thiết bị mới phù hợp với nhu
                  cầu và công việ việc của mình, chúng tôi có thể tư vấn miễn
                  phí giúp các bạn có những lựa chọn phù hợp nhất
                  <br />
                  <div className="space"> </div>
                  Bạn có nhu cầu sử dụng các loại SIM CARD INTERNET hoặc các vấn
                  đề khác liên quan đến thiết bị của các bạn.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="6" className="whyus_card whyus_card3">
            <Card>
              <div className="whyus_title">
                <FontAwesomeIcon
                  icon={faKissWinkHeart}
                  size="2x"
                  color="#17a2b8"
                />{" "}
                <h3>Lợi ích của bạn</h3>
              </div>

              <Card.Body>
                <Card.Text>
                  Gửi và nhận lại thiết bị trong thời gian ngắn nhất. Với DHL
                  HERMES là đối tác lâu năm, chúng tôi cam kết tối đađa 5 ngày
                  làm việc bạn sẽ nhận lại được thiết bị của mình
                  <br />
                  <div className="space"> </div>
                  Chúng tôi luôn cung cấp các loại linh kiện đi kèm vỏ viền,
                  kính lưng cho tất cả các dòng điện thoại mới nhất. Đảm bảo
                  điện thoại của bạn luôn luôn như mới và hợp thời trang
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="6" className="whyus_card whyus_card4">
            <Card>
              <div className="whyus_title">
                <FontAwesomeIcon icon={faHandshake} size="2x" color="#17a2b8" />{" "}
                <h3>Đảm bảo dữ liệu</h3>
              </div>

              <Card.Body>
                <Card.Text>
                  Chúng tôi luôn đảm bảo quyền riêng tư của các bạn về những
                  hình ảnh, nội dung trong các thiết bị của các bạn. Cũng như
                  không làm mất dữ liệu của các thiết bị
                  <br />
                  <div className="space"> </div>
                  Với phương châm luôn đặt mình vào địa vị khách hàng, chúng tôi
                  mang lại cho khách hàng sự thoải mái và tiện dụng khi sử dụng
                  các dịch vụ của chúng tôi.
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
      <div className="reachus">
        <Row>
          <Col xs="12" md="4" className="reachus-border">
            <div className="reachus-method">
              <FontAwesomeIcon icon={faPhone} size="2x" color="#17a2b8" />{" "}
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
              <FontAwesomeIcon icon={faMailBulk} size="2x" color="#17a2b8" />{" "}
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
              navigate("https://www.facebook.com/suachuaonline24/")
            }}
          >
            <div
              className="reachus-method reachus-facebook"
              onClick={() => {
                navigate("https://www.facebook.com/suachuaonline24/")
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#17a2b8" />{" "}
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
  )
}

export default IndexPage
