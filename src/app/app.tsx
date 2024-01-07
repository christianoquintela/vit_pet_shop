//Components
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Banner from '../components/banner/banner';
import Servicos from '../components/servicos/servicos';
import Faixas from '../components/faixas/faixas';
import Marcas from '../components/marcas/marcas';
import Localizacao from '../components/location/location';

export default function App() {
  return (
    <section>
      <Header />
      <Banner />
      <Servicos />
      <Faixas paragrafo='Aqui na Pet Boutique somos apaixonados pelo que fazemos' />
      <Marcas />
      <Faixas paragrafo='Na Pet Boutique você encontra Estilo e Elegância para Cães e Gatos' />
      <Localizacao />
      <Footer />
    </section>
  );
}
