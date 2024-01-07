//Css
import './marcas.css';

//Imgs
import lista from './logos/listaLogos';

const Marcas = () => {
  const listItens = lista.map((img) => {
    return (
      <li key={img.toString()}>
        <img src={img} alt='bla vla cla' />
      </li>
    );
  });

  return (
    <div className='container_marcas'>
      <div className='box_marcas'>
        <h3>Nossas principais marcas</h3>
        <div className='marcas' id='marca'>
          <ul>{listItens}</ul>
        </div>
      </div>
    </div>
  );
};

export default Marcas;
