//Imgs
import logo_1 from '../../assets/img/banho.png';
import logo_2 from '../../assets/img/creche.png';
import logo_3 from '../../assets/img/dog-walker.png';
import logo_4 from '../../assets/img/loja.png';
import logo_5 from '../../assets/img/veterinario.png';
//Css
import './servicos.css';

const Servicos = () => {
  return (
    <div className='container_services'>
      <div className='container_text_services'>
        <h3>Alguns dos nosso serviços</h3>
        <ul>
          <li>
            <strong>Banho & Tosa:</strong> Banho, hidratação, tosa higiênica,
            tosa de cachorros de diversas raças e outros serviços feitos por
            profissionais parceiros especialistas no assunto.
          </li>
          <li>
            <strong>Veterinário 24h:</strong> A saúde do seu melhor amigo em
            boas mãos, consultas, exames e vacinas com médicos-veterinários
            parceiros.
          </li>
          <li>
            <strong>Dog Walker:</strong> Sem tempo para sair com seu cachorro?
            Além de caminhadas, os passeadores parceiros Pet Anjo ainda corrigem
            comportamentos e ensinam comandos básicos.
          </li>
          <li>
            <strong>Creche Pet:</strong> A creche para cachorro é uma solução
            personalizada para quem não quer deixar pet sozinho em casa durante
            o dia. Brincadeiras, cuidados e muito carinho!
          </li>
          <li>
            <strong>Produtos para seu pet:</strong> Explore nossa loja repleta
            de produtos premium para animais de estimação. De alimentos
            saudáveis a brinquedos divertidos e acessórios elegantes.
          </li>
        </ul>
        <div>
          <img src={logo_1} alt='bla bla bla' />
          <img src={logo_2} alt='bla bla bla' />
          <img src={logo_3} alt='bla bla bla' />
          <img src={logo_4} alt='bla bla bla' />
          <img src={logo_5} alt='bla bla bla' />
        </div>
      </div>
    </div>
  );
};

export default Servicos;
