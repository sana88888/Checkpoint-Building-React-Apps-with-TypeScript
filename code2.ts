import React, { Component } from "react"; // Importation de React et Component

// Interface pour définir le type de state
// Ici, nous définissons une interface `CounterState` avec une seule propriété `count` de type `number`.
interface CounterState {
  count: number;
}

// Composant de classe Counter
// Nous définissons une classe `Counter` qui étend `Component`.
// Nous spécifions que le composant n'a pas de props (indiqué par `{}`) et que le state est de type `CounterState`.
class Counter extends Component<{}, CounterState> {
  // Déclaration et initialisation du state
  state: CounterState = {
    count: 0, // Initialisation de `count` à 0
  };

  // Méthode pour incrémenter le compteur
  // Cette méthode met à jour le state en incrémentant la valeur de `count`.
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Méthode render pour afficher le JSX
  // Cette méthode retourne le JSX à rendre, incluant un paragraphe affichant le count et un bouton pour incrémenter le count.
  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Exportation du composant Counter pour utilisation dans d'autres fichiers
export default Counter;
