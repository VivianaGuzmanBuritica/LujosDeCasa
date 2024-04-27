import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';

const Sponsors = () => {
  const { language } = useLanguage();
  return (
    <div  className='containerAbou'>
   
      <div>
         <h3 className='titleSection'>{language === 'es' ?  'Clientes Satisfechos' : 'Happy Clients' }</h3>
      </div>
      
        <section id="sponsors"   className='sectionSponsors' >
         
          <div className='clientes'>
            <div className='logos'>
              <article>
                <div className='img-logo-sp'>
                <img src="/clientes/colsubsidio.png" alt="logo-colsubsidio" />
                </div> 
              </article>
              <article>
                <div className='img-logo-sp'>
                <img src="/clientes/decameron.png" alt="logo-decameron" />
                </div>
              </article> 
              <article>
                <div className='img-logo-sp'>
                <img src="/clientes/estelar.png" alt="logo-estelar" />
                </div> 
              </article>
            </div>

            <div  className='logos'>
              <article>
                <div className='img-logo-sp'>
                <img className='img-producers' src="/clientes/ghl.png" alt="logo-ghl"/>
                </div>
              </article>
              <article>
                <div className='img-logo-sp'>
              <img src="/clientes/oxo.png" alt="logo-oxo" />
                </div> 
              </article>
              <article>
                <div className='img-logo-sp'>
              <img src="/clientes/camaraComercio.png" alt="logo-cc" />
                </div> 
              </article>
            </div>

            <div  className='logos'>
            <article>
                <div className='img-logo-sp'>
              <img src="/clientes/wyndhan.png" alt="logo-wyndhan" />
                </div> 
              </article>
              {/* <article>
                <div className='img-logo-sp'>
              <img src="/clientes/ermita-cartagena.png" alt="logo-ermita" />
                </div> 
              </article> */}
              <article>
                <div className='img-logo-sp'>
              <img src="/clientes/inter.png" alt="logo-inter" />
                </div> 
              </article>
              <article>
                <div className='img-logo-sp'>
              <img src="/clientes/logo-club-campestre.png" alt="logo-club-campestre" />
                </div> 
              </article>
            </div>

            <div  className='logos'>            
              <article>
                <div className='img-logo-sp'>
              <img src="/clientes/radisson-logo-1.png" alt="logo-radisson" />
                </div> 
              </article>
              <article>
                <div className='img-logo-sp'>
              <img src="/clientes/solar.png" alt="logo-solar" />
                </div> 
              </article>
              <article>
                <div className='img-logo-sp'>
              <img src="/clientes/valleDelPacifico.png" alt="logo-valleDelPacifico" />
                </div> 
              </article>
            
            </div>
          </div>
      </section>    
    </div>
  )
}

export default Sponsors