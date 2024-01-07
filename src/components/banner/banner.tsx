import logo_fone from '../../assets/img/redes-sociais/whatsapp-svgrepo-com.png';
import './banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner_text'>
        <h1>Tenha o melhor tratamento para o seu parceiro</h1>
        <p>
          <a href='https://wa.me/5532992156554' target='_blank'>
            Fale conosco <img src={logo_fone} alt='logo whatsapp' />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
