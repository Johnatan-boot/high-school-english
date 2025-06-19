import menina from '../assets/menina.png';

const HeroSection = () => (
  <section className="bg-secondary text-primary p-10 text-center">
    <h1 class="hero-text" >Aprenda Inglês com Fluencia</h1>
    <p class="hero-text-p" >Cursos online com professores Certificados</p>
    <button class="hero-text-button" >
      Ver Cursos
    </button>
    <div class="hero-image">
   <img src={menina} alt="Ilustração de menina" />
    </div>
  </section>
);

export default HeroSection;
