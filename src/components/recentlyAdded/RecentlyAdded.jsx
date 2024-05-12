import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { FaHeart } from "react-icons/fa";
import ReactStars from 'react-stars'
import { AUCTION_IMG, CREATERS } from '../../assets/images';
import './RecentlyAdded.css'


const RecentlyAdded = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const addnft = [
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
    <div className='bgClr auctions_section py-5'>
      <Container>
        <div className=''>
          <h1 className='section_title mb_5'>Recently Added NFTs</h1>
        </div>
        <Row>
          {
            addnft.map((addnft, index) => {
              return (
                <Col xxl={3} xl={3} lg={6} md={6} key={index}>
                  <div className='auction_card addedCart'>
                    <div className='auction_img'>
                      <img src={addnft.image} className='img-fluid' alt="live auction image png" />
                    </div>
                    <div>
                    </div>
                    <div className='p-3'>
                      <div className='d-flex align-items-center justify-content-between mb-2'>
                        <h2 className='mb-0'>{addnft.title}</h2>
                        <ReactStars className='starStyle'
                          count={5}
                          value={3}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffd700'} />
                      </div>
                      <div className='d-flex align-items-center justify-content-between'>
                        <h3>{addnft.bid}</h3>
                        <h4>{addnft.dolars}</h4>
                      </div>

                      <div className='d-flex align-items-center justify-content-between mt-3'>

                        <div className='d-flex align-items-center userAuction'>
                          <div className='me-4 d-flex align-items-center position-relative'>
                            <img src={addnft.user_a} className='img-fluid user_a' alt="user image" />
                            <img src={addnft.user_b} className='img-fluid user_b' alt="user image" />

                          </div>

                          <div>
                            <h5>{addnft.userName}</h5>
                            <h6>{addnft.userContent}</h6>
                          </div>
                        </div>

                        <div className='d-flex align-items-center'>
                          <span className='d-flex align-items-center countAdd'><FaHeart className='me-1' />{addnft.count}</span>

                        </div>

                      </div>

                    </div>
                  </div>


                </Col>

              )
            })
          }
          <div className='loadMore_btn'>
            <Button type='button'>Load More</Button>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default RecentlyAdded;