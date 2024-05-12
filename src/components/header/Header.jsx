import React from 'react'
import './Header.css'
import { Col, Container, Row } from 'reactstrap'
import { BANNER_HEADER } from '../../assets/images'

const Header = () => {
    return (
        <div className='header_section my_60 '>
            <Container>
                { /* For Desktop  */}
                <div className='dnone'>
                    <Row >
                        <Col xxl={6} lg={6} md={6} col={12}>
                            <div className='header_content px-2'>
                                <h1><span>Discover</span> Digital art & Collect NFTs</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            </div>
                        </Col>
                        <Col xxl={6} lg={6} md={6} col={12}>
                            <div className='banner_imgCart mx-2'>
                                <div className='full-width'>
                                    <img src={BANNER_HEADER} className='img-fluid bannerImg' alt="To show the banner image for blue studios" />
                                </div>
                                <div className='d-flex align-items-start bannerUser_details'>
                                    <div className=''>
                                        <img className='' src={BANNER_HEADER} alt="Blue studios user rounded png" />

                                    </div>
                                    <div className='ms-3'>
                                        <h2>Blue Studios NFT</h2>
                                        <h3>by Lorum ipsum</h3>

                                    </div>
                                </div>
                            </div>

                        </Col>

                    </Row>
                </div>
                { /* For Mobile View  */}
                <div className='dblock'>
                    <Row>
                        <Col xxl={6} lg={6} md={6} col={12}>
                            <div className='header_content'>
                                <h1><span>Discover</span> Digital art & Collect NFTs</h1>
                            </div>

                            <div className='banner_imgCart mx-2'>

                                <div className='full-width'>
                                    <img src={BANNER_HEADER} className='img-fluid bannerImg' alt="To show the banner image for blue studios" />
                                </div>
                                <div className='d-flex align-items-start bannerUser_details'>
                                    <div className=''>
                                        <img className='' src={BANNER_HEADER} alt="Blue studios user rounded png" />

                                    </div>
                                    <div className='ms-3'>
                                        <h2>Blue Studios NFT</h2>
                                        <h3>by Lorum ipsum</h3>

                                    </div>
                                </div>
                            </div>



                        </Col>
                        <Col xxl={6} lg={6} md={6} col={12}>
                            <div className='header_content px-2'>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            </div>

                        </Col>

                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default Header