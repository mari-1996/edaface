import React from 'react'
import NavbarHeader from '../components/NavbarHeader'
import Header from '../components/header/Header'
import HotCollection from '../components/collection/HotCollection'
import TopCreaters from '../components/creaters/TopCreaters'
import Auction from '../components/auction/Auction'
import RecentlyAdded from '../components/recentlyAdded/RecentlyAdded'
import Footer from '../components/footer/Footer'

const HomePage = () => {
    return (
        <div>
            <div className='bgImg'>
                <NavbarHeader />
                <Header />
            </div>
            <HotCollection />
            <TopCreaters />
            <Auction />
            <RecentlyAdded />
            <Footer />
        </div>

    )
}

export default HomePage