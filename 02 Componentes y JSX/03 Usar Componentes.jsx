/*

*/

// Llamar componente desde otra componente con funciones
	import React from 'react';
	import HolaATodos from './HolaATodos'
	export default function App() {
	  return (
	    <div>
	      mi componente dice:
	      <HolaATodos /> // asi se llama un componente
	    </div>
	  );
	}

	import React from 'react'
	export default function HolaATodos() {
	  return(
	    <div>Hola A Todos</div>
	  )
	}

// Llamar componente desde otra componente con POO
	// componente: "MiAriticulo.jsx"
		import React, { Component } from 'react';

		export default class MiAriticulo extends Component {
			render() {
				return (
				    <div>
				    	<h2>Titulo de mi Articulo</h2>
				    	<p>Lorem ipsum dolor sit amet consectetur adipisicing
				    	elit. Cum veniam fugit iusto consequuntur fuga dicta
				    	ea magnam ad optio animi, esse itaque, harum totam hic
				    	ipsum quam sint explicabo laudantium!</p>
				    </div>
			    )
			}
		}

	// componente: "Noticias.jsx"
		import React, { Component } from 'react';
		import MiAriticulo from 'MiAriticulo' // se puede omitir ".jsx" o ".js"

		export default class Noticias extends Component {
			render() {
				return (
				    <div>
				    	<h1>Noticias</h1>
				    	<MiAriticulo />
				    	<MiAriticulo />
				    	<MiAriticulo /> // se observa que se puede hacer varias instacias de un mismo componente
				    </div>
			    )
			}
		}