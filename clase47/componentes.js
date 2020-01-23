/*
Definicion de Componente:
Los componentes permiten separar la interfaz de usuario
 en piezas independientes, reutilizables y pensar en cada
 pieza de forma aislada.
*/


// Componente de forma de funcion
 let props = {
   name: "Alfonso Rios"
 }
 /*
Se le llama componente funcion ya que desciende de una function
en el cual props son las propiedades de dicho componente
 */
function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
}


// Componente de forma de clase, implementado con ES6
/*
Este componente es de clase por que se ocupan principios de POO,
en el cual se ocupan metodos y herencia
*/
class Welcome extends React.Component {
   render() {
     return <h1>Hello, {this.props.name}</h1>;
     }
}

// Componente SMart

/*
Estos componentes son los Componentes de clase,
 y en estos tenemos toda nuestra lógica específicamente para ese
 componente por ejemplo en ellos podemos consumir una API y
 posteriormente, los datos que obtuvimos de esa API los pasamos
  vía props a nuestro componente funcional para mostrarlo al usuario
*/
//Componente dump
/*
Estos componentes son los Componentes funcionales, y solo se encargan
 de mostrar datos, que previamente recibieron de un Smart Component,
 cabe resaltar que estos componentes no saben ni se enteran de nada
 de lo que pasa en la app, solo se encargan de mostrar templates.
*/
//Componente hook

// Componente pure
funcion Suma( a, b ){
  return a + b;
}
/*
Es una funcion-componente pura toda aquella que no altera sus entradas
y siempre regresa lo mismo
Aunque react tiene una regla estricta:
**Todos los componentes de React deben actuar como funciones puras con respecto a sus props.**
*/

// Componente high order
