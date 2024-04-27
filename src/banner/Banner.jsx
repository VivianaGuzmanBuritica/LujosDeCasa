import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';

const Banner = () => {
  const { language } = useLanguage();
  return (
    <section id="banner" className='banner'>
        <div className='banner_contain'> 
            <img className="logo" src="/logos/logo_LujosDeCasa.png" alt="logo-lujos-img" />
        
        </div>
          <h2 className='banner_containTex1'>         
                {language === 'es' ?  '"La calidad y versatilidad de cada una de nuestras líneas harán la diferencia de elegancia en todo tipo de ambiente"' : '"The quality and versatility of each of our lines will make the difference in elegance in any type of environment."' }
          </h2>
        <button className='banner_button'>
            <a href='https://linktr.ee/LujosDeCasa' target='_black'>   {language === 'es' ?  'Ver Brochure' : ' View Brochure' }</a> 
        </button>
        
    </section>
  )
}

export default Banner