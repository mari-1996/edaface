import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FaHeart } from "react-icons/fa";
import { AUCTION_IMG, CREATERS } from '../../assets/images';
import './Auction.css'
import Timer from '../timer/Timer';

const Auction = () => {
    const auction = [
        {
            image: AUCTION_IMG,
            title: "Women NFT #325",
            bid: "Highest Bid",
            dolars: "15,000 BUSD",
            user_a: AUCTION_IMG,
            user_b: CREATERS,
            userName: "@ robert03",
            userContent: "by lorum ipsum",
            count: "246"


        },
        {
            image: AUCTION_IMG,
            title: "Women NFT #325",
            bid: "Highest Bid",
            dolars: "15,000 BUSD",
            user_a: AUCTION_IMG,
            user_b: CREATERS,
            userName: "@ robert03",
            userContent: "by lorum ipsum",
            count: "246"


        },
        {
            image: AUCTION_IMG,
            title: "Women NFT #325",
            bid: "Highest Bid",
            dolars: "15,000 BUSD",
            user_a: AUCTION_IMG,
            user_b: CREATERS,
            userName: "@ robert03",
            userContent: "by lorum ipsum",
            count: "246"


        },
        {
            image: AUCTION_IMG,
            title: "Women NFT #325",
            bid: "Highest Bid",
            dolars: "15,000 BUSD",
            user_a: AUCTION_IMG,
            user_b: CREATERS,
            userName: "@ robert03",
            userContent: "by lorum ipsum",
            count: "246"


        }

    ]
    return (
        <div className='bgClr auctions_section py-4'>
            <Container>
                <div className=''>
                    <h1 className='section_title mb_5'>Live Auctions</h1>
                </div>
                <Row>
                    {
                        auction.map((auction, index) => {
                            return (
                                <Col xxl={3} xl={3} lg={6} md={6} key={index}>
                                    <div className='auction_card'>
                                        <div className='auction_img'>
                                            <img src={auction.image} className='img-fluid' alt="live auction image png" />
                                        </div>
                                        <div>
                                            <Timer />
                                        </div>
                                        <div className='p-3'>
                                            <h2>{auction.title}</h2>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h3>{auction.bid}</h3>
                                                <h4>{auction.dolars}</h4>
                                            </div>

                                            <div className='d-flex align-items-center justify-content-between mt-3'>

                                                <div className='d-flex align-items-center userAuction'>
                                                    <div className='me-4 d-flex align-items-center position-relative'>
                                                        <img src={auction.user_a} className='img-fluid user_a' alt="user image" />
                                                        <img src={auction.user_b} className='img-fluid user_b' alt="user image" />

                                                    </div>

                                                    <div>
                                                        <h5>{auction.userName}</h5>
                                                        <h6>{auction.userContent}</h6>
                                                    </div>
                                                </div>

                                                <div className='d-flex align-items-center'>
                                                    <span className='d-flex align-items-center countAdd'><FaHeart className='me-1' />{auction.count}</span>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </Col>

                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Auction