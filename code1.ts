import React from "react"; // Importation de React

// Déclaration des types pour les props
// Ici, nous définissons un type `GreetingProps` avec une seule propriété `name` de type `string`.
type GreetingProps = {
  name: string;
};

// Composant fonctionnel Greeting
// Nous utilisons le type `GreetingProps` pour typer les props du composant.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div> Bonjour, {name} !</div>;
};

// Exportation du composant Greeting pour utilisation dans d'autres fichiers
export default Greeting;
