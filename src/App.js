/*
lang=language at initialization, it can be changed later (0 = English, 1 = French)
name=full name of the influencer

*/ 


/* eslint-disable no-eval */
import './App.css';
import logo from './img/logo1.png';
import React, { useState } from "react";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const lang = urlParams.get('lang');
const name = urlParams.get('name');

const l = (list) => {
  switch (localStorage.getItem('caballeroLang')) {
    case '1':
      return list[1];
    default:
      return list[0];      
  } 
}


// eslint-disable-next-line no-unused-vars
const welcomePage = () => {

  return (
    <div style={{
      height: `450px`,
      overflow: "scroll",
      color: `yellow`
    }} key="welcomePage">

      <h3 style={{
        color: `red`
      }}>
        {l([`(THIS IS A TEST, NOT A COMMERCIAL PRODUCT. THERE IS NO CONTRACT BETWEEN US AND USERS.)`, `(CECI EST UN TEST, PAS UN PRODUIT COMMERCIAL. IL N'Y A AUCUN CONTRAT ENTRE NOUS ET LES UTILISATEURS.)`])}
      </h3>

      <h1 key="greetings">
         {l([`Congratulations! You have access to a special link from ${name}.`, `Félicitations! Vous avez accès à un lien spécial de  ${name}.`])}
      </h1>

      <h2>
        {l([`Register or log in to access your giveaway.`, `Inscrivez-vous ou connectez-vous pour accéder à votre cadeau.`])}
      </h2>



      
    </div>
  )
}


// eslint-disable-next-line no-unused-vars
const languagePage = () => {
  return (
    <div key="languagePage" className="Ordinary-text">
       <h1>
        {l(["Select your language", "Choisissez votre langue"])}
      </h1>

      <div style={{
        textAlign: `center`
      }}>
      <button className="Lang-button" key="EnglishLang"
      onClick={() => {
        localStorage.setItem('caballeroLang', '0');
        window.location.reload(false);    
      }}>
        English
      </button>

      <br/>
      <br/>

      <button className="Lang-button" key="frenchLang"
      onClick={() => {
        localStorage.setItem('caballeroLang', '1');
        window.location.reload(false);
      }}>
        Français
      </button>
      </div>
    </div>
  )
}


function App() {
  if (localStorage.getItem('caballeroPageFarm') == null) {
    localStorage.setItem('caballeroPageFarm', 'welcomePage()')
  }


  if ( (localStorage.getItem('caballeroLang')) === null ) {
    localStorage.setItem('caballeroLang', lang);
  }

  
  
  switch (localStorage.getItem('caballeroLang')) {
    case '1':
      document.getElementById("html").lang = 'fr';
      break;
    default:
      document.getElementById("html").lang = 'en';
      break;
  }

  const [jsx, setJsx] = useState(eval(localStorage.getItem('caballeroPageFarm')));


  const update = () => {
    setJsx(eval(localStorage.getItem('caballeroPageFarm')));
  }

  

  const headOfPages = () => {
    return (
      <table style={{ width: `100%` }} key="headOfPages">
        <tbody>
          <tr>

            <td style={{
              width: `15%`
            }}>
              <input type="image" style={{
                marginLeft: `10px`
              }} alt="logo" src={logo} className="Main-logo" key="logo"
                onClick={() => {
                  localStorage.setItem('caballeroPageFarm', 'welcomePage()');
                  update()
                }}
              />
            </td>

            <td style={{
              width: `85%`
            }}>
              <div className="Head" key="Head">
                <div key="Skull" style={{
                  marginLeft: `10px`,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>

                  <button className="Cute-button" onClick={() => {
                    localStorage.setItem('caballeroPageFarm', 'languagePage()');
                    update()
                  }} key="buttonLanguage">
                    {l(["Language", "Langage"])}
                  </button>

                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className="App" key="app">

      {headOfPages()}

      {jsx}

    </div>
  );
}

export default App;
