//Components
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Banner from '../components/banner/banner';
import Servicos from '../components/servicos/servicos';
import Faixas from '../components/faixas/faixas';
import Marcas from '../components/marcas/marcas';
import Localizacao from '../components/location/location';

//Axios
import axios from 'axios';

const baseUrl = 'http://localhost:8080/petshop';

//libs
import { useEffect, useState } from 'react';

export default function App() {
  const [infos, setInfos] = useState(null);
  const [infos2, setInfos2] = useState(null);
  useEffect(() => {
    console.log('entrou no effect');

    axios.get(baseUrl).then((req) => {
      const dados = req.data[0];
      // console.log(dados.titulo);
      // console.log(dados.paragrafo);
      setInfos(dados.titulo);
      setInfos2(dados.paragrafo);
    });
  }, []);

  // console.log(infos[0]);

  return (
    <section>
      <Header />
      <Banner />
      <Servicos />
      <Faixas paragrafo={infos} />
      <Marcas />
      <Faixas paragrafo={infos2} />
      <Localizacao />
      <Footer />
    </section>
  );
}
