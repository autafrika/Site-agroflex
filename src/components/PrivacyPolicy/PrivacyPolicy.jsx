import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-policy-header">
        <h1>Politique de Confidentialité pour Agroflex</h1>
        <p>Dernière mise à jour : 3 septembre 2025</p>
      </header>
      <main className="privacy-policy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Bienvenue sur Agroflex. Nous nous engageons à protéger la vie privée de nos utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application mobile.
          </p>
        </section>
        <section>
          <h2>2. Collecte de vos informations</h2>
          <p>
            Nous pouvons collecter des informations vous concernant de différentes manières. Les informations que nous pouvons collecter via l'application incluent :
          </p>
          <ul>
            <li>
              <strong>Données personnelles :</strong> Des informations personnellement identifiables, telles que votre nom, votre adresse e-mail, que vous nous fournissez volontairement lorsque vous créez un compte.
            </li>
            <li>
              <strong>Images et Vidéos :</strong> Nous collectons les images et les vidéos de plantes que vous téléchargez pour le diagnostic des maladies.
            </li>
            <li>
              <strong>Informations financières :</strong> Des informations financières, telles que les données relatives à votre mode de paiement (par exemple, numéro de carte de crédit valide, marque de la carte, date d'expiration) que nous collectons lorsque vous effectuez un achat sur notre place de marché. Toutes les transactions financières sont traitées par des processeurs de paiement sécurisés.
            </li>
          </ul>
        </section>
        <section>
          <h2>3. Utilisation de vos informations</h2>
          <p>
            Avoir des informations précises nous permet de vous offrir une expérience fluide, efficace et personnalisée. Spécifiquement, nous pouvons utiliser les informations collectées à votre sujet via l'application pour :
          </p>
          <ul>
            <li>Créer et gérer votre compte.</li>
            <li>Vous fournir des diagnostics de maladies des plantes.</li>
            <li>Traiter les paiements et les remboursements.</li>
            <li>Améliorer notre application et nos services.</li>
          </ul>
        </section>
        <section>
          <h2>4. Sécurité de vos informations</h2>
          <p>
            Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Toutes les données personnelles sont traitées en toute sécurité et sont cryptées lors de leur transmission pour garantir leur confidentialité.
          </p>
        </section>
        <section>
          <h2>5. Nous contacter</h2>
          <p>
            Si vous avez des questions ou des commentaires concernant cette politique de confidentialité, veuillez nous contacter à : contact@agroflex.com
          </p>
        </section>
      </main>
      <footer className="privacy-policy-footer">
        <Link to="/">Retour à l'accueil</Link>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
