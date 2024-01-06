//Libs
import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
//Components

//Imgs
import banho from '../assets/img/banho.png';

export default function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <section>
      <div style={{ width: '100%', height: '100vh' }}>
        <Parallax pages={7}>
          {/* ******************************************************************************************* */}
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#3c184e', zIndex: 1 }}
          >
            <h1> - Aqui na Pet Boutique somos apaixonados pelo que fazemos</h1>
          </ParallaxLayer>

          {/* ******************************************************************************************* */}
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: '#3c184e', zIndex: 1 }}
          >
            <h1>
              - Na Pet Boutique você encontra Estilo e Elegância para Cães e
              Gatos
            </h1>
          </ParallaxLayer>
          {/* ******************************************************************************************* */}
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{ backgroundColor: '#3c184e', zIndex: 1 }}
          >
            <h1>- Header</h1>
          </ParallaxLayer>
          {/* ******************************************************************************************* */}
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={7}
            style={{
              backgroundColor: '#fff',
            }}
          >
            <h1>Pet Boutique</h1>
            <p>Estilo e elegância para Cães e Gatos</p>
          </ParallaxLayer>
          {/* ******************************************************************************************* */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={banho} style={{ width: '40%' }} />
          </ParallaxLayer>
          {/* ******************************************************************************************* */}
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={banho} style={{ width: '40%' }} />
          </ParallaxLayer>
          {/* ******************************************************************************************* */}
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => parallax.current.scrollTo(0)}
          >
            <img src={banho} style={{ width: '40%' }} />
          </ParallaxLayer>
          {/* ******************************************************************************************* */}
        </Parallax>
      </div>
    </section>
  );
}
