/* DEFAULTPROPS

*/

// EJEMPLO 1 - 
	import React from 'react';
	import Saludar from './Saludar'
	export default function App() {
	  return (
	    <div>
	      mi componente dice:
	      <Saludar saludo="que tal" />
	    </div>
	  );
	}
	

	import React from 'react'
	import propTypes from 'prop-types'
	export default function Saludar({ saludo, persona }) {
	  return(
	    <div>
	    	{ saludo } { persona }
	    </div>
	  )
	}
	Saludar.propTypes = {
		saludo: PropTypes.string.isRequired
	}
	Saludar.defaultProps = {
		persona: 'amigo'
	}
