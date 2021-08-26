/* COMPONENTES
	Son porciones de codigo html y js, dinamicos y flexibles
	TEMAS:
		- return --> es el metodo en donde debe retornar codigo JSX
		- className --> en html para indicar que un elemento tenia una clase de estilo se colocaba el atributo "class" pero en react se usa "className"

*/
 // EJEMPLOS - creando componentes
	// Creando componente "MiArticulo" con funciones 
		import React from 'react';

		function MiArticulo() {
			return(
				<div>
					<h1>Titulo de mi Aritculo</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dicta quod, molestias unde, placeat quaerat iste maiores
					assumenda impedit porro consectetur dolor quae nulla illum.
					Accusamus dolore maiores quas voluptatibus voluptas.</p>
				</div>
			)
		}
		export default App;

	// Creando componente "MiArticulo" con funcion flecha
		import React from 'react';

		const App = () => <div>Adios</div>

		export default App;


	// Creando componente "MiArticulo" con POO
		import React, { Component } from 'react';

		class MiArticulo extends Component {
			render() {
				return (
				    <div>
				    	<h2>Titulo de mi Articulo</h2>
				    	<p>este es el contenido de mi Aritculo</p>
				    </div>
			    )
			}
		}
		export default MiArticulo

// CREAR COMPONENTES MAS RAPIDOS - con la extension "ES7 React/Redux/GraphQL/React-Native snippets" de VScode

	// rcc
		import React, { Component } from 'react'

		export default class FileName extends Component {
		  render() {
		    return <div>$2</div>
		  }
		}

	// rce
		import React, { Component } from 'react'

		export class FileName extends Component {
		  render() {
		    return <div>$2</div>
		  }
		}

		export default $1

	// rcep
		import React, { Component } from 'react'
		import PropTypes from 'prop-types'

		export class FileName extends Component {
		  static propTypes = {}

		  render() {
		    return <div>$2</div>
		  }
		}
		export default $1

	// rpc
		import React, { PureComponent } from 'react'

		export default class FileName extends PureComponent {
		  render() {
		    return <div>$2</div>
		  }
		}

	// rpcp
		import React, { PureComponent } from 'react'
		import PropTypes from 'prop-types'

		export default class FileName extends PureComponent {
		  static propTypes = {}

		  render() {
		    return <div>$2</div>
		  }
		}

	// hay mas snipets ver dicha extension para mas informacion