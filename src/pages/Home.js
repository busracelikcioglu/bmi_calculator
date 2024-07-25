import React from 'react';
import BMICalculator from '../components/BMICalculator';
import BMIDescription from '../components/BMIDetails';
import bmiImage from '../assets/bmi.jpg'; // Resim dosyasının yolu

const Home = () => {
  return (
    <div className="container">
      <img src={bmiImage} alt="BMI" className="bmi-image" />
      <BMICalculator />
      <BMIDescription />
    </div>
  );
};

export default Home;
