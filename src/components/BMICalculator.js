import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../context/MainContextProvider';

const BMICalculator = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const { addData } = useContext(MainContext);
  const navigate = useNavigate();

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const userData = { name, bmi };
    addData(userData);
    navigate('/result', { state: userData });
  };

  return (
    <div>
      <h2>Vücut Kitle İndeksi Hesaplayıcı</h2>
      <input
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
         <input
        type="number"
        placeholder="Boy (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Kilo (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
   
      <button onClick={calculateBMI}>Hesapla</button>
    </div>
  );
};

export default BMICalculator;
