import './header.css';
import pata from '../../assets/img/patas.png'

function Header() {
  return (
    <header className='container_header'>
      <div className='container_text'>
        <h1><img src={pata} alt="pata" className='img_pata'/>Pet Boutique</h1>
        <p>Estilo e elegância para Cães e Gatos</p>
      </div>
    </header>
  );
}

export default Header;
