/* PROPTYPES
	PropTypes.[type]
		- string
		- number
*/

// EJEMPLO 1 - uso basico de proptypes
	import React from 'react';
	import Saludar from './Saludar'
	export default function App() {
	  return (
	    <div>
	      mi componente dice:
	      <Saludar saludo="que tal" numero={23} />
	    </div>
	  );
	}
	

	import React from 'react'
	import propTypes from 'prop-types'
	export default function Saludar({ saludo, numero }) {
	  return(
	    <div>
	    	{ saludo } tu numero favorito es: {numero}
	    </div>
	  )
	}
	Saludar.propTypes = {
		saludo: PropTypes.string.isRequired // establece que el prop sea string y sea obligatorio
		numero: PropTypes.numero // establece que el prop sea number pero no obligatorio
	}
