import React from 'react';

const AboutBMI = () => {
  return (
    <div>
      <h1>BMI Nedir?</h1>
      <p>
        Vücut kitle indeksi (BMI), bir kişinin kilosunun boyuna göre sağlıklı olup olmadığını belirlemeye yardımcı olan bir ölçüttür. 
        BMI, kilogram cinsinden kilonun, metre cinsinden boyun karesine bölünmesiyle hesaplanır.
      </p>
      <p>
        <strong>BMI Kategorileri:</strong>
        <ul>
          <li>18.5'in altı: Zayıf</li>
          <li>18.5 - 24.9: Normal kilolu</li>
          <li>25 - 29.9: Fazla kilolu</li>
          <li>30 ve üstü: Obez</li>
        </ul>
      </p>
    </div>
  );
};

export default AboutBMI;
