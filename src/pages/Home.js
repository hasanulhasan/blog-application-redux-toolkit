import React from 'react';
import Posts from '../components/Posts/Posts';
import SideBar from '../components/SideBar/SideBar';

const Home = () => {
  return (
    <section className="wrapper">
      <SideBar />
      <Posts />
    </section>
  );
};

export default Home;