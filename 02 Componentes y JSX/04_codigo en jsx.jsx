/* CODIGO JSX
    El codigo jsx es el mismo codigo js pero con html incluido

*/

// Agregando una variable en codigo jsx
    const genero = 0;
    const mi_nombre = 'franco';
    function App() {
        return (
          <div>
            <h2>{mi_nombre}</h2> //se incluira el valor de la variable
          </div>
        );
      }

    export default App;

// Operador ternario en jsx
  import React from 'react';
  import Task from 'Task'

  class Tasks extends React.Component {
    render() {
      let age = 0;
      return (
        <div>
          {(age === 0) ?  "eres mayor" : "eres menor"}
        </div>
      )
    }
  }
  export default Tasks;

// El llaves "{}" pueden ser anidadas
  import React from 'react';
  import Task from 'Task'

  class Tasks extends React.Component {
    render() {
      let win = true, wined="ganste", lossed: "perdiste"
      return (
        <div>
          {(win) ? <p>{wined}</p> : <p>{lossed}</p>}
        </div>
      )
    }
  }
  export default Tasks;
