import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (location.state) {
      setUserData(location.state);
    }
  }, [location.state]);

  let bmiCategory = '';
  let bmiValue = '';
 let dietRecommendation;


  if (userData) {
    const { bmi } = userData;
    bmiValue = bmi.toFixed(2);
    if (bmi < 18.5) {
      bmiCategory = 'Zayıf';
      dietRecommendation = `
      
      - Yüksek kalorili yiyecekler: Avokado, fındık, tam yağlı süt ürünleri.
      - Protein: Tavuk, balık, yumurta, baklagiller.
      - Sağlıklı yağlar: Zeytinyağı, hindistancevizi yağı.
      - Karbonhidratlar: Tam tahıllar, patates, yulaf.
      - Ara öğünler: Protein barları, smoothie'ler.
    `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = 'Normal kilolu';
      dietRecommendation = `
    
      - Dengeli beslenme: Her öğünde protein, karbonhidrat ve yağ dengesi.
      - Meyve ve sebzeler: Günde en az 5 porsiyon.
      - Tam tahıllar: Esmer pirinç, tam buğday ekmeği.
      - Protein kaynakları: Yağsız et, balık, tofu, baklagiller.
      - Sağlıklı yağlar: Avokado, zeytinyağı, balık yağı.
    `;
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = 'Fazla kilolu';
      dietRecommendation = `
      
      - Kalori kontrolü: Kalori alımını takip etmek.
      - Protein: Her öğünde yeterli miktarda protein (tavuk, balık, baklagiller).
      - Lifli yiyecekler: Sebzeler, meyveler, tam tahıllar.
      - Sağlıklı yağlar: Avokado, zeytinyağı, kuruyemişler.
      - Şeker ve rafine karbonhidratlardan kaçınma: Şekerli içecekler, beyaz ekmek, hamur işleri.
    `;
    } else {
      bmiCategory = 'Obez';
      dietRecommendation = `
      - Düşük kalorili diyet: Günlük kalori alımını azaltmak.
      - Yüksek protein: Kas kütlesini korumak için her öğünde yeterli protein.
      - Lifli yiyecekler: Sebzeler, meyveler, tam tahıllar.
      - Sağlıklı yağlar: Zeytinyağı, avokado, balık yağı.
      - Şeker ve işlenmiş gıdalardan kaçınma: Tatlılar, fast food, işlenmiş atıştırmalıklar.
      - Düzenli egzersiz: Günde en az 30 dakika yürüyüş veya hafif egzersiz.
    `;
    }
  }

  return (
    <div>
      <h2>{userData ? `${userData.name} için BMI Detayları` : 'BMI Detayları'}</h2>
      {userData ? (
        <div>
          <p>BMI: {bmiValue}</p>
          <p>Kategori: {bmiCategory}</p>
          <p>Önerilen Diyet: {dietRecommendation}</p>
        </div>
      ) : (
        <p>Kullanıcı verisi bulunamadı.</p>
      )}
      <button onClick={() => window.history.back()}>Yeniden Hesapla</button>
    </div>
  );
};

export default Result;
