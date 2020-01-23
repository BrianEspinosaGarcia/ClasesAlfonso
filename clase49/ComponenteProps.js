import React, { Component } from 'react';


export default class ComponenteProps extends Component {
    render() {
        return (
            <div>
              <p>  Bienvenido {this.props.nombre}  {this.props.lastName} a {this.props.app} </p>
            </div>
        )
    }
    /*
      DEfinicion de  ( > defaultProps <)
      Estos son definidos en todo caso que no sean colocados al componente
      al momento de hacer uso de else {
      }
    */
    ComponenteProps.defaultProps = {
      lastName: 'Rios',
      age: 23
    }
}
