import React from 'react'
import Header from '../Components/Header';
import LeftNav from '../Components/LeftNav';
import '../Styles/home.css'

function Home() {
  return (
    <div className='body'>
        <Header/>
        <div className='main'>
            <LeftNav />
            
        </div>
    </div>
  )
};

export default Home