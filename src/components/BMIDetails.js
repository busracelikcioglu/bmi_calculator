import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const BMIDetails = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (location.state) {
      setUserData(location.state);
    }
  }, [location.state]);

  let bmiCategory = '';
  let bmiValue = '';

  if (userData) {
    const { bmi } = userData;
    bmiValue = bmi.toFixed(2);
    if (bmi < 18.5) {
      bmiCategory = 'Zayıf';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = 'Normal kilolu';
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = 'Fazla kilolu';
    } else {
      bmiCategory = 'Obez';
    }
  }

  return (
    <div className='container'>
      

    </div>
  );
};

export default BMIDetails;
