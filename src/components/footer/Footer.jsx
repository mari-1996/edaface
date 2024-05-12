import React from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap'
import { LOGO } from '../../assets/images'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_section'>
            <Container>
                <div className='borderApply'>
                    <Row>
                        <Col xxl={2} xl={2} lg={6} md={6} sm={6} xs={6}>
                            <div className='footer_content'>
                                <h1>Company</h1>
                                <ul>
                                    <li>Vision</li>
                                    <li>Mission</li>
                                    <li>Core Values</li>
                                    <li>Contact us</li>
                                    <li>Branding</li>
                                    <li>Team</li>
                                    <li>Careers</li>
                                    <li>FAQ</li>

                                </ul>
                            </div>
                        </Col>
                        <Col xxl={2} xl={2} lg={6} md={6} sm={6} xs={6}>
                            <div className='footer_content'>
                                <h1>Products</h1>
                                <ul>
                                    <li>Eda Token</li>
                                    <li>Digital Clinic</li>
                                    <li>School of Cryptos</li>
                                    <li>Litepaper</li>
                                    <li>Whitepaper</li>
                                    <li>Welfare Donations</li>
                                    <li>How to Use EdaFace</li>


                                </ul>
                            </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={6}>
                            <div className='responsiveStyle'>
                                <div>
                                    <img src={LOGO} alt="project logo png" />
                                </div>
                                <h2>Subscribe Our Newsletter</h2>
                                <div className='d-flex align-items-center'>
                                    <Input
                                        id="search"
                                        name="search"
                                        placeholder="Enter email id"
                                        type="email"
                                    />
                                    <Button type='button'>Subscribe</Button>
                                </div>


                            </div>
                        </Col>
                        <Col xxl={2} xl={2} lg={3} md={3} sm={6} xs={6}>
                            <div className='footer_content'>
                                <h1>Legal</h1>
                                <ul>
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                    <li>Disclaimers</li>
                                    <li>Listing T & C</li>

                                </ul>
                            </div>
                        </Col>
                        <Col xxl={2} xl={2} lg={3} md={3} sm={6} xs={6}>
                            <div className='footer_content'>
                                <h1>Communities</h1>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Telegram</li>
                                    <li>Twitter</li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='copyRight_section'>
                    <h3>Copyright @ 2022.EdaFace is a product of EDA Holidays.All Rights Reserved</h3>
                </div>
            </Container>
        </div>
    )
}

export default Footer