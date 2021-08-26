/* PROPS
  Son propiedades que envia el componente padre a sus hijos
    TEMAS:
      - props.[any] --> es un objeto que tiene datos enviados por el componente padre
*/

// enviando propiedades (props) a HelloWorld
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

  function HelloWorld(props) {
    return (
      <div className="box">
        <h3>{props.subtitle}</h3>
        <p>{props.mytext}</p>
      </div>
    )
  }

// enviando propiedades (props) a HelloWorld - con destruccturacion
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

  function HelloWorld({ subtitle, mytext }) {
    return (
      <div className="box">
        <h3>{subtitle}</h3>
        <p>{mytext}</p>
      </div>
    )
  }