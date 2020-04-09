import React from 'react'
import paola from '../images/paola.jpg';


function Hero() {

  return (
    <div>
    <section className="mt-5 text-center">
    <div className="container">
      <h1 className="text-primary">Paola Andrea Hernández Velásquez</h1>
      <img class="img-profile mt-3 rounded-circle" width="200" height="auto" src={paola} alt="Responsive-image"/>
      <p className="lead text-dark mt-5">Desarrolladora frontend en formación en Academia Geek, ingeniera ambiental de la Universidad de Antioquia, interesada en continuar mi proceso de formación como desarrolladora web e incursionar en el campo laboral, con el fin de fusionar la ingeniería ambiental, con el desarrollo web.
      </p>
    </div>
  </section>
  </div>
  );
}


export default Hero;