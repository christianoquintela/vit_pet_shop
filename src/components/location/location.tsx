import './location.css';

export default function Localizacao() {
  return (
    <div className='container_location'>
      <div className='box_location'>
        <h3>Onde estamos</h3>
        <p>Se ficou interessado em nossos serviços, venha conhecer</p>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.330538890607!2d-43.3677152!3d-22.9748697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd980310df053%3A0x51b16e81630e9c4!2sCondom%C3%ADnio%20dos%20Edificios%20Rio%20Office%20Park%204%20e%205%20-%20Rua%20Victor%20Civita%2C%2066%20-%20Jacarepagu%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-044!5e0!3m2!1sen!2sbr!4v1704591966973!5m2!1sen!2sbr'
          width='800'
          height='450'
          style={{ border: 0 }}
          loading='lazy'
        />
      </div>
    </div>
  );
}
