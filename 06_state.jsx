/* STATE - estados
  son estados que tiene y si no lo tiene se puede crear en los componentes
    TEMAS:
      - state --> es un objeto que todo componente tiene en donde se puede crear estados del componente.
      - setState(obje) --> metodo que establece el nuevo estado que tendra la componente
        - obj --> objeto que indica los valores el cual cambiaran los estados.
      - [metodo].bind(<class>) --> indica la clase a la cual pertenece el metodo que se esta llamando.
      - [...this.state.<state>, <obj item>] --> agrega un elemento a un estado

*/

// Ejemplo - cambiando de estado y componente
  import React from 'react';
  import './App.css';

  class HelloWorld extends React.Component {

    state = {
      show: true // estableciendo estado inicial
    }

    toggleShow() { // funcion que comabiara el estado
      this.setState({show: !this.state.show})
    }

    render() {
      if (this.state.show) {
        return(
          <div className="box">
            <h3>{this.props.subtitle}</h3>
            <p>{this.props.mytext}</p>
            <button onClick={this.toggleShow.bind(this)}>Ocultar</button>
          </div>
        )
      } else {
        return(
          <div>
          <h1>No hay elementos</h1>
          <button onClick={this.toggleShow.bind(this)}>Mostrar</button>
          </div>
        )
      }
      
    }
  }

  function App() {
    return (
      <h1>
        This is my component: 
        <HelloWorld subtitle="subtitulo uno" mytext="contenido del subtitulo uno."/>
        <HelloWorld subtitle="subtitulo dos" mytext="contenido del subtitulo dos."/>
        <HelloWorld subtitle="subtitulo tres" mytext="contenido del subtitulo tres."/>
        </h1>
    );
  }

  export default App;


// otra forma para evitar escribir el bind(this)
  import React from 'react';
  import './App.css';

  class HelloWorld extends React.Component {

    state = {
      show: true // estableciendo estado inicial
    }

    toggleShow = () => { // funcion que comabiara el estado
      this.setState({show: !this.state.show})
    }

    render() {
      if (this.state.show) {
        return(
          <div className="box">
            <h3>{this.props.subtitle}</h3>
            <p>{this.props.mytext}</p>
            <button onClick={this.toggleShow}>Ocultar</button>
          </div>
        )
      } else {
        return(
          <div>
          <h1>No hay elementos</h1>
          <button onClick={this.toggleShow}>Mostrar</button>
          </div>
        )
      }
      
    }
  }

  function App() {
    return (
      <h1>
        This is my component: 
        <HelloWorld subtitle="subtitulo uno" mytext="contenido del subtitulo uno."/>
        <HelloWorld subtitle="subtitulo dos" mytext="contenido del subtitulo dos."/>
        <HelloWorld subtitle="subtitulo tres" mytext="contenido del subtitulo tres."/>
        </h1>
    );
  }

  export default App;


// Agregar Nuevos datos a un Estado

  state = {
    tasks: mytasks
  }

  addTask(title, description) {
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description
    }
    this.setState({
      tasks: [...this.state.tasks, newTask] // Esta linea Agrega nuevos datos a un estado
    })
  }