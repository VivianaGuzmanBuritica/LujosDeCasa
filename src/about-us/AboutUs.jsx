import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';


const AboutUs = () => {
  const { language} = useLanguage();
  
  
  return (
    <section id="about-us" className='containerAbout'>
          <h3 className='titleSection'> {language === 'es' ?  'Quiénes somos' : ' About us' }</h3> 
   
    <section className='articles' >
      <article className='quienes'>
        <div className='img-logo'>         
            <img className='logoCiat1'  src="/post/1.png" alt="logo-ciat" />
            <img className='logoCiat'  src="/img/woman-tailor-working-at-the-sewing-factory.jpg" alt="logo-ciat" />
            <img className='logoCiat'  src="/post/3.png" alt="logo-ciat" />        
        
        </div>
        <div className='img-logo'>         
            <img className='logoCiat'  src="/post/1.png" alt="logo-ciat" />
            <img className='logoCiat'  src="/img/woman-tailor-working-at-the-sewing-factory.jpg" alt="logo-ciat" />
            <img className='logoCiat'  src="/post/3.png" alt="logo-ciat" />        
        
        </div> 
        </article>
        <div>
            <p className='text'>
            {language === 'es' ?  'Lujos de Casa es una empresa con sello colombiano nace para satisfacer las necesidad de la industria hotelera, restaurantes, Cajas de compensación etc. Empleamos los mejores materiales para crear productos fáciles de limpiar, duraderos y amigables con el medio ambiente. Nos apasiona el servicio y brindar  soluciones acorde a las necesidades de cada uno de nuestros clientes.':'' }
           
            </p>
        </div>
     
      {/* <article>
      <div className='img-logo'>
      <a href='https://producersdirect.org/' target="_blank"><img className='logoCiat' src="/logos/logoProducersDirect.png" alt="logo-producers-direct" /></a>
        </div>
        <div>
            <p className='text'>
            {language === 'es' ?  '  Producers Direct es fundada y dirigida por agricultores, tiene como objetivo crear nuevas oportunidades para el desarrollo de pequeños agricultores, en las que asuman el liderazgo y el desarrollo de soluciones innovadoras para enfrentar los desafíos del día a día en su labor.' : ' Producers Direct is founded and run by farmers. It aims to create new opportunities for the development of small farmers, in which they assume leadership and develop innovative solutions to face the day-to-day challenges of their work.' }
            </p>
        </div>
      </article>
      <article>
      <div className='img-logo'>
      <a href='https://tecnicafe.co/' target="_blank"><img className='logoCiat' src="/logos/logoTecnicafe.png" alt="logo-tecniafe" /></a></div>
        <div>
            <p className='text'>
            {language === 'es' ?  ' Tecnicafé, es una corporación mixta sin animo de lucro que ha sido creada como el Primer Parque Tecnológico abierto y global, ubicado en el departamento del Cauca en Colombia. Con el objetivo de realizar innovación transformativa en el mundo del café a través de la sostenibilidad.' : ' Tecnicafé, a private-public non-profit organization, is the first global coffee technological innovation park, located in the department of Cauca in Colombia. It aims to carry out transformative innovation in the world of coffee through sustainability.' }
           </p>
        </div>
      </article> */}
    
    </section>
  
    </section>
  )
}

export default AboutUs