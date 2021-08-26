/* FRAGMENT
	Son elementos que en la build no se muestran

*/

/* recordemos que al retornar el codigo html, simpre se debe retornar
	solo un elemento por lo tanto esto no se puede*/
	import React from 'react'
	import header from 'Header'
	import footer from 'Footer'
	function App() {
		return(
			<header />
			<footer />
		)
	}
	export default App

/* Lo correcto seria lo siguiente */
	import React from 'react'
	import header from 'Header'
	import footer from 'Footer'
	function App() {
		return(
			<div>
				<header />
				<footer />
			</div>
		)
	}
	export default App

/* Sin embargo el anterior codigo crea un div y en ocasiones esto no
se deseara, entonces se puede usar un fragment que se usara para
devolver solo un elemnto pero que el html final no se mostrara */
	import React, { Fragment } from 'react'
	import header from 'Header'
	import footer from 'Footer'
	function App() {
		return(
			<Fragment>
				<header />
				<footer />
			</Fragment>
		)
	}
	export default App

/* forma rapida de implementar un fragment*/
	import React from 'react'
	import header from 'Header'
	import footer from 'Footer'
	function App() {
		return(
			<>
				<header />
				<footer />
			</>
		)
	}
	export default App