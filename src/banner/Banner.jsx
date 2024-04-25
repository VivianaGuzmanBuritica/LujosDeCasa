import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';

const Banner = () => {
  const { language } = useLanguage();
  return (
    <section id="banner" className='banner'>
        <div className='banner_contain'> 
            <img className="logo" src="/logos/logo_LujosDeCasa.png" alt="logo-lujos-img" />
            {/* <h2 className='banner_containTex1'>         
                {language === 'es' ?  ' Estimado de rendimiento  asistido por IA' : 'AI-assisted coffee yield estimation' }
            </h2> */}
        </div>
        <button className='banner_button'>
            <a href='https://play.google.com/store/search?q=croppie&c=apps' target='_black'>   {language === 'es' ?  'Descargar App' : 'Download App' }</a> 
        </button>
        
    </section>
  )
}

export default Banner