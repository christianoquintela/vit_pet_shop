interface FaixasProps {  
  paragrafo?: string | null;
}
//css
import './faixas.css';

//imgs
import face from '../../assets/img/redes-sociais/facebook-svgrepo-com.png';
import insta from '../../assets/img/redes-sociais/instagram-svgrepo-com.png';
import whats from '../../assets/img/redes-sociais/whatsapp-svgrepo-com.png';

const Faixas = (props: FaixasProps) => {
  return (
    <div className='container_faixa'>
      <p id='container_faixa'>{props.paragrafo}</p>
      <div className='container_faixa_redes'>
        <a href='http://www.facebook.com'>
          <img src={face} alt='faceboook' />
        </a>
        <a href='http://www.instagram.com'>
          <img src={insta} alt='instagram' />
        </a>
        <a href='http://www.whatsapp.com'>
          <img src={whats} alt='whatsapp' />
        </a>
      </div>
    </div>
  );
};

export default Faixas;
