

/*
Este metodo  del ciclo de vida  es para corroborar
una actualizacion o saber si es que se deben de actualizar
las propiedades de nuestro componente, por ello recibe (nextProps)

*/

componentWillReaceiveProps(nextProps) {
  if(this.props.num1 !== nextProps.num1 || this.props.num2 !== nextProps.num2) {
    this.setState({
      sum: nextProps.num1 + nextProps.num2,
    })
  }
}

/*
 PErmite validar un cambio en el estado o propiedades
 del componente por medio de sus argumentos y retornar
 (VERDADERO O FALSO) true or false para renderizar
 nuevamente el componente
*/

shouldComponentUpdate(nextProps, nextState) {
  return nextProps.name !== this.props.name
}

/*
 Se ejecuta cuando shouldComponentUpdate retorna
 true, se pueden hacer los ultimos cambios antes de renderizar
 nuevamente el componente.
*/

componentWillUpdate(nextProps, nextState) {
  if(this.state.age !== nextStage.age) {
    this.onGrow();
  }
}


/*
 Este es el ultimo metodo de la etapa, despues
 de haberse renderizado con nuevos valores.
 Perfecto para interactuar con el DOM
*/

componentDidUpdate(prevProps, prevState) {
  this.createCard();
}
