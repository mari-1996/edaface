import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './TopCreaters.css'
import { CREATERS } from '../../assets/images'


const TopCreaters = () => {
    const creaters = [
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        },
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        },
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        },
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        },
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        },
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        },
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        },
        {
            image: CREATERS,
            name: "lenin quies",
            items: "178 items"
        }
    ]
    return (
        <div className='bgClr'>
            <Container>
                <div>
                    <h1 className='section_title mbAdd'>Top Creaters</h1>
                </div>
                <Row>
                    {
                        creaters.map((creaters, index) => {
                            return (
                                <Col xxl={3} xl={3} lg={4} md={6}>
                                    <div className='d-flex align-items-center creaters_details'>
                                        <div className='me-3'>
                                            <img src={creaters.image} alt="creaters profile img png" />
                                        </div>
                                        <div>
                                            <h2>{creaters.name}</h2>
                                            <h3>{creaters.items}</h3>
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

export default TopCreaters