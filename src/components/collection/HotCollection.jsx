import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick';
import './HotCollection.css'
import { COLLECTION_IMG, LEFT_ARROW, RIGHT_ARROW } from '../../assets/images';

const HotCollection = () => {
    const collection = {
        loop: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: <img src={LEFT_ARROW} alt='previous' />,
        nextArrow: <img src={RIGHT_ARROW} alt='next' />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const collectionData = [
        {
            image: COLLECTION_IMG,
            imgName: "Cat NFT"
        },
        {
            image: COLLECTION_IMG,
            imgName: "Lorum Ipsum"
        },
        {
            image: COLLECTION_IMG,
            imgName: "Lorum Ipsum"
        },
        {
            image: COLLECTION_IMG,
            imgName: "Lorum Ipsum"
        },
        {
            image: COLLECTION_IMG,
            imgName: "Lorum Ipsum"
        }, {
            image: COLLECTION_IMG,
            imgName: "Lorum Ipsum"
        }
    ];
    return (
        <div className='py_60'>

            <Container>
                <div className=''>
                    <h1 className='section_title'>Hot Collection</h1>
                </div>
                <Slider {...collection}>
                    {
                        collectionData.map((collectionData, index) => {
                            return (
                                <div key={index}>
                                    <div className='collection_card'>
                                        <div>
                                            <img className='m-auto' src={collectionData.image} alt="collection card image png" />

                                        </div>
                                        <h2 className='text-center'>{collectionData.imgName}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>

            </Container>


        </div>
    )
}

export default HotCollection