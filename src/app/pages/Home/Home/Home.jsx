import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Header from '../../../components/Home/Header/Header';
import LivingRoom from '../../../components/Home/livingRoom/LivingRoom';
import MostPopuler from '../../../components/Home/mostPopuler/MostPopuler/MostPopuler';
import Review from '../../../components/Home/review/Review';

const Home = () => {
  return (
    <div>
      <Header />
      <MostPopuler />

      <LivingRoom />
      <Review />
    </div>
  );
};

export default Home;
