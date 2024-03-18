import React from 'react';
import Banner from '../../components/Banner';
import './Home.css'; 
import Routine from './Routine';

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <Routine/>
    </div>
  );
};

export default Home;
