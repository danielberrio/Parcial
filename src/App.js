import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Foto from './img/foto.jpg';

class App extends Component {
  render() {

    const person = {
      avatar: Foto,
      name: 'Daniel Berrio',
      profession: 'Estuiante de Ingenieria de Sistemas',
      bio: '❤ Estudiante de noveno semestre de Ingenieria de Sistemas, entusiasta de la lectura y ansioso por empdrender desafios profesionales.',
      address: 'Cartagena, Colombia.',
      social: [
        {name: 'facebook', url: 'https://www.facebook.com/daniel.berrio.5203'},
        {name: 'github', url: 'https://github.com/danielberrio'}
      ],
      experience: [
        {jobTitle: 'Clase de FrontEnd', company: 'Universidad Tecnologica de Bolivar', startDate: 'Feb 2020', endDate: 'Present', jobDescription: 'Curso de desarrollo Web II usando ReactJS.'},
        {jobTitle: 'Backend', company: 'Desarrollo del lado del servidor', startDate: 'Feb 2020', endDate: 'Presente', jobDescription: 'Trabajo de grado.'},
      ],
      education: [
        {degree: 'Media tecnica ', institution: 'Cedesarrollo Comfenalco', startDate: 'Feb 2014', endDate: 'Nov 2015', description: 'Tecnica en procesamiento industrial.'},
        {degree: 'Ingenieria en Sistemas', institution: 'Universidad Tecnologica de Bolivar', startDate: 'Feb 2016', endDate: 'Presente', description: 'Cursando el noveno semestre de la carrera profesional Ingenieria de Sistemas.'},
      ],
      
      skills: [
        {name: 'HTML5', percentage: '75%'},
        {name: 'CSS', percentage: '70%'},
        {name: 'PYTHON', percentage: '75%'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
        
      </header>
    );
  }
}

export default App;
