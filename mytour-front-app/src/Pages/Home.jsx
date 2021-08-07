import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import '../assets/css/home/home.css'

import MainSearch from '../components/main/MainSearch';

const Home = () => {
    return (
        <Fragment>
           <MainSearch />
        </Fragment>
    )
}

export default Home;