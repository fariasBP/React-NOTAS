/* ROUTE
    El componente Route es quizás el componente más importante en React
    Router para entender y aprender a utilizar bien. Su responsabilidad
    más básica es representar alguna interfaz de usuario cuando coincide
    con la dirección URL actual.path
  TEMAS:
    - < route path exact?|strict?|sensitive? component?|render? > >>> es un enrutador que muestra una interfaz u otra dependiendo
    de la url
     - path >>> direccion URL que evaluara route
     - type >>> establece la forma que evaluara a path
      - exact >>> por defecto false, si es true verifica que la ruta (path)
      coincida exactamente con location.pathname (url), por ejemplo:
         _________________________________________
        | camino | phatname | exact  |¿renderiza? |
        |________|__________|________|____________|
        |  /one  | /one/two | true   | No         |
        |________|__________|________|____________|
        |  /one  | /one/two | false  | Si         |
        |________|__________|________|____________|


  SINTAXIS:
    - < route path="[String path]" exact? strict? sensitive? component?={[component]} render?={[callback:componente]} > [component?] </router

  NOTA: <Route> siempre tiene que ser hijo de < Router > (en estos ejemplo de BrowserRouter)
*/

// METODOS DE RENDERIZADO
  // Con render
    import React, { Component } from 'react'
    import { BrowserRouter as Router, Route } from 'react-router-dom'

    export default class App extends Component {
      render() {
        return (
          <Router>
            <Route path="/" render={() => {
              return (<h1>Estamos en Inicio</h1>)
            }} />
          </Router>
        )
      }
    }

  // con render() en una linea
    import React, { Component } from 'react'
    import { BrowserRouter as Router, Route } from 'react-router-dom'

    export default class App extends Component {
      render() {
        return (
          <Router>
            <Route path="/" render={ () => <h1>Estamos en Inicio</h1> } />
          </Router>
        )
      }
    }

  // con component()
    import React, { Component } from 'react'
    import { BrowserRouter as Router, Route } from 'react-router-dom'
    import MiComponente from './components/MiComponente'

    export default class App extends Component {
      render() {
        console.log('hol')
        return (
          <Router>
            <Route path="/" component={MiComponente} />
          </Router>
        )
      }
    }

  // con etiquetas
    import React, { Component } from 'react'
    import { BrowserRouter as Router, Route } from 'react-router-dom'

    export default class App extends Component {
      render() {
        console.log('hol')
        return (
          <Router>
            <Route path="/">
              <h1>Estamos en Inicio</h1>
            </Route>
          </Router>
        )
      }
    }

// ENRUTADOR
  import React, { Component } from 'react'
  import { BrowserRouter as Router, Route } from 'react-router-dom'

  export default class App extends Component {
    render() {
      console.log('hol')
      return (
        <Router>
          <Route path="/">
            <h1>Estamos en Inicio</h1>
          </Route>
          <Route path="/contact">
            <h1>Estamos en Contacto</h1>
          </Route>
          <Route path="/about">
            <h1>Estamos en Acerca de</h1>
          </Route>
        </Router>
      )
    }
  }


