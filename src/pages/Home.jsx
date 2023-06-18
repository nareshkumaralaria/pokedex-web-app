// ** React Imports
import React from 'react';

// ** Custom Components Imports
import { Header, Listing, Navigation, Search } from '../components'

const Home = () => {

    return (
        <>
            <Header />
            <Search />
            <Navigation />
            <Listing />
        </>
    )
}

export default Home