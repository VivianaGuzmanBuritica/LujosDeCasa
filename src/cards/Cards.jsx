import React from 'react'
import './style.css'
import Card from './card/Card'
import Card2 from './card2/Card2'
import Card3 from './card3/Card3'
import Card4 from './card4/Card4'
import Card5 from './card5/Card5'
import { useLanguage } from '../LanguageContext';



const Cards = () => {
  const { language} = useLanguage();
  
  
  return (
    <section id= "cards" className='containerSection'>
    <h3 className='titleSection'>
    {language === 'es' ?  'Catálogo de productos' : 'Product Catalog' }
    
    </h3>
   
    
    
    <div className='cards_container'>
      <Card />
      {/* <Card2 /> */}
      <Card3 />
      <Card4 />
      {/* <Card4 />
      <Card5 /> */}

    </div>
    <p className='pSection'>
    {language === 'es' ?  'INDIVIDUALES - MANTELES Y SERVILLETAS -  FORROS SPANDEX - CAMINOS DE MESA - TAPAS - BANDEJEROS - PORTAVASOS - SOBRES PARA CUBIERTOS' : 'PLACEMATS - TABLECLOTHS AND NAPKINS - SPANDEX COVERS - TABLE RUNNERS - LIDS - TRAYS - COASTERS - CUTLERY ENVELOPES' }
    </p>
    </section>
  )
}

export default Cards