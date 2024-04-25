import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../LanguageContext';
import './style.css'

const Card = () => {
  const { language} = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSlide2, setCurrentSlide2] = useState(1);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
    }, 5000000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : 3));
  };
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentSlide2((prevSlide2) => (prevSlide2 < 7 ? prevSlide2 + 1 : 1));
    }, 500000);

    return () => clearInterval(interval2);
  }, []);

  const nextSlide2 = () => {
    setCurrentSlide2((prevSlide2) => (prevSlide2 < 7 ? prevSlide2 + 1 : 1));
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prevSlide2) => (prevSlide2 > 1 ? prevSlide2 - 1 : 7));
  };


  return (
    <div className='card_container2'>
    <div>
      {isModalVisible && (
        <div className='modal2'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button className='btn-close' onClick={closeModal}>
                X            </button>
            <section className='modal-section card2mb'>
                <h4 className='modal_title2'>{language === 'es' ?  '¿Cómo funciona?' : ' How it works?' }</h4>
                <div className="slider-container">
              <div className={`slider-slide ${currentSlide === 1 ? 'active' : ''}`}>
              <div className=' text-slide2'>
                <p> {language === 'es' ?  'Proporcionamos un sencillo protocolo de muestreo basado en una aplicación móvil que utiliza inteligencia artificial (IA) para realizar recuentos de cerezas de café y estimar el rendimiento en las parcelas de las fincas cafeteras.' : 'We provide a simple mobile app-based sampling protocol which leverages artificial intelligence (AI) to count coffee cherries and estimate yield on coffee farm plots.' }</p>
              </div>
              <div  className='img-slide1'>
              {language === 'es' ?  
                <img  src="/steps/step1.svg" alt="step1-img" />
                  :
                <img src="/steps/step1EN.svg" alt="step1-img" /> }
              </div>      
              
              </div>
              <div className={`slider-slide ${currentSlide === 2 ? 'active' : ''}`}>
              {language === 'es' ?   <img  className='img-slide2' src="/steps/step234ES.svg" alt="step234-img" />
              :<img  className='img-slide2' src="/steps/step234EN.svg" alt="step234-img" /> }
            

              </div>
              <div className={`slider-slide ${currentSlide === 3 ? 'active' : ''}`}>
              {language === 'es' ?<img  className='img-slide3'  src="/steps/calculation.svg" alt="step5-img" />
              : <img  className='img-slide3 '  src="/steps/step5Yield.svg" alt="step5-img" />}
              </div>
              <button className="slider-button-left" onClick={prevSlide}>
              <img src="/icons/prev.svg" alt="" />
              </button>
              <button className="slider-button-right" onClick={nextSlide}>
              <img src="/icons/next (1).svg" alt="" />
              </button>
            </div>
              
              
            </section>
            <section className='modal-section1MB card2dt'>
              <h4 className='modal_title'>{language === 'es' ?  '¿Cómo funciona?' : ' How it works?'}</h4>
                <div className="slider-container">
                  <div className={`slider-slide ${currentSlide2 === 1 ? 'active' : ''}`}>
                      <div className='text-slide1'>
                        <p>{language === 'es' ?  'Proporcionamos un sencillo protocolo de muestreo basado en una aplicación móvil que utiliza inteligencia artificial (IA) para realizar recuentos de cerezas de café y estimar el rendimiento en las parcelas de las fincas cafeteras.' : 'We provide a simple mobile app-based sampling protocol which leverages artificial intelligence (AI) to count coffee cherries and estimate yield on coffee farm plots.' }</p>
                      </div>
                  </div>
                  <div className={`slider-slide ${currentSlide2 === 2 ? 'active' : ''}`}>
                      {language === 'es' ?  <img  className='img-slide2'  src="/steps/step1.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/steps/step1EN.svg" alt="dashboard-img" /> }
                  </div>

                  <div className={`slider-slide ${currentSlide2 === 3 ? 'active' : ''}`}>
                      {language === 'es' ?  <img  className='img-slide2'  src="/steps/step2.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/steps/step2EN.svg" alt="dashboard-img" /> }
                
                  </div>
                  <div className={`slider-slide ${currentSlide2 === 4 ? 'active' : ''}`}>
                      {language === 'es' ?  <img  className='img-slide2'  src="/steps/step3.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/steps/step3EN.svg" alt="dashboard-img" /> }
                
                  </div>
                  <div className={`slider-slide ${currentSlide2 === 5 ? 'active' : ''}`}>
                      {language === 'es' ?  <img  className='img-slide2'  src="/steps/step4.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/steps/step4EN.svg" alt="dashboard-img" /> }
                
                  </div>
                  <div className={`slider-slide ${currentSlide2 === 6 ? 'active' : ''}`}>
                      {language === 'es' ?  <img  className='img-slide2'  src="/steps/step5MobileES1.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/steps/step5MobileEN1.svg" alt="dashboard-img" /> }
                
                  </div>
                  <div className={`slider-slide ${currentSlide2 === 7 ? 'active' : ''}`}>
                      {language === 'es' ?  <img  className='img-slide2'  src="/steps/step5MobileES2.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/steps/step5MobileEN2.svg" alt="dashboard-img" /> }
                
                  </div>
                  <button className="slider-button-left" onClick={prevSlide2}>
                    <img src="/icons/prev.svg" alt="" />
                  </button>
                  <button className="slider-button-right" onClick={nextSlide2}>
                    <img src="/icons/next (1).svg" alt="" />
                  </button>
                </div>                
            </section>
        </div>
      )}
    </div>
    <p className='card_title2'>
    {language === 'es' ?  '¿Cómo funciona?' : ' How it works?' }
   
    </p>

    <span className='card_btn2' onClick={openModal}>
    {language === 'es' ?  ' Ver más' : 'View more' }
    </span>

  </div>
  )
}

export default Card