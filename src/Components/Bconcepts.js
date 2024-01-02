import React from "react";
import { useNavigate } from "react-router-dom";
export const Bconcepts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-div">
        <h1> Concept de base </h1>
        <div>
          <h2>Installation et Configuration Initiale</h2>
          <p>
            Avant de commencer à plonger dans les fonctionnalités avancées de
            React Router, on souhaite d'abord parler des bases de React
            Router. Pour utiliser React Router sur le Web, vous devez exécuter.
            `npm i react-router-dom` ``` l'installation de React Router.Cette
            bibliothèque installe spécifiquement la version DOM de React
            Router.  Une fois que vous disposez de cette bibliothèque, vous
            devez faire trois choses pour utiliser React Router. 1. Configurez
            votre routeur 2. Définissez vos itinéraires 3. Gérer la navigation
          </p>
          <h2>Configuration du routeur</h2>
          <p>
            a.BrowserRouter c'est Un composant qui utilise HTML5 history API
            pour synchroniser l'interface utilisateur avec l'URL. en terme plus
            simple BrowserRouter stocke l'emplacement actuel dans la barre
            d'adresse du navigateur et donc , si votre application a plusieurs
            pages , BrowserRouter garde trace de celle qui est actuellement
            affichée. en utilisant des URLs lisibles et facilement
            compréhensibles par les utilisateurs plutôt que d'avoir des URLs
            avec des paramètres complexes Et navigue en utilisant la pile
            d'historique intégrée du navigateur.Cela signifie que Lorsque
            l'utilisateur interagit avec votre application en cliquant sur des
            liens ou en utilisant les boutons de navigation du navigateur
            BrowserRouter gére la navigation et l'utilisateur peut donc naviguer
            en arrière et en avant entre les différentes vues de votre
            application. pour faire cela on enveloppe la composant racine avec
            BrowserRouter pour fournir un contexte de routage. Généralement vous
            importerez votre routeur dans la `index.js`page de votre application
            et celui-ci enveloppera votre `App`composant. b.HashRouter
            HashRouter est aussi un composant de routage fourni par React Router
            pour la gestion de la navigation dans une application React. il est
            principalement utilisé dans le contexte des applications web lorsque
            l'URL ne doit pas (ou ne peut pas) être envoyée au serveur pour une
            raison quelconque. por ceci il stocke la localisation actuelle dans
            la partie hachée (hash) de l'URL, ce qui signifie que seule cette
            partie de l'URL est modifiée lors de la navigation dans
            l'application, sans que le reste de l'URL soit envoyé au serveur.
          </p>
        </div>
        <button
          onClick={() => navigate("/bconfiguration")}
          className="button-suivant"
        >
          Suivant
        </button>
      </div>
    </>
  );
};
