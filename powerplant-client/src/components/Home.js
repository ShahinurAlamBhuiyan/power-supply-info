import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import CardContainer from './CardContainer';
import SingleCard from './SingleCard';

const Home = () => {

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    console.log(localStorage.email)

    return (
        <div className='container mt-4'>
           <div style={{display: 'flex', alignItems: 'left', justifyContent: 'flex-end'}}>
           <Button className='' variant="danger" onClick={handleLogout}>Logout</Button>
           </div>
            <CardContainer />
        </div>
    )
};

export default Home;
