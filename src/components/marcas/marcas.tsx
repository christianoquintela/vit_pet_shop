//Css
// import { useEffect, useState } from 'react';
import './marcas.css';

//Imgs
import lista from './logos/listaLogos';

//Axios
// import axios from 'axios';
//end point
// const baseUrl = 'http://localhost:8080/petshop';

const Marcas = () => {
  //   const [logos, setLogos] = useState(null);

  //UseEffect para carregar os dados somente quando o componente e montado.
  //   useEffect(() => {
  //     axios.get(baseUrl).then((req) => {
  //       console.log(req);
  //       setLogos(req.data);
  //     });
  //   }, []);
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
        <h2>Nossas principais marcas</h2>
        {/* <div className='marcas'>
          {logos.map((imgs) => {
            <img key={logos.id} src={img} alt={descricao} />;
          })}
        </div> */}
        <div className='marcas' id='marca'>
          <ul>{listItens}</ul>
        </div>
      </div>
    </div>
  );
};

export default Marcas;
