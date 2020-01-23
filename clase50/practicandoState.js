/*
  Otra forma de declarar o construir un componente

*/

var CheckBox = React.createClass({

     //obtengo el estado del checkbok
     getInitialState : function(){
       return {checked: !this.state.checked}
     },
    handleChecked: function (){
      //cambio el estado
      this.setState({checked: !this.state.checked})
    },

       render: function () {
               var mensajito;
              // valido el estado del checkbox
              if(this.state.checked){
               mensajito = 'checado';
              }else{
              mensajito = 'no checado';
              }
         return(
           <div>
              /* aqui es donde cambio el estado del checkbox y le pongo por default checked */
             <inpit type="checkbox" onchange={this.handleCheked} defaultCheked={state.cheked} />
             <h1> el checkbox esta {mensajito} </h1>
           </div>
       );
    }
});
ReactDOM.render(<CheckBox />, document.getElementById('app'));
