/* USEEFFECT
	Es una hook que ejecuta codigo como efecto de algun cambio o estado de la componente.
	TEMAS:
		- useEffect para escuchar cualquier cambio de una componente
		- useEffect para escuchar cuando se monta la componente
		- useEffect para escuchar algun cambio especifico en una componente
		- useEffect para escuchar cuando se desmonta la componente
	
	SINTAXIS:
		useEffect(() => {
			//Codigo que se ejecuta cuando se actualize (cambie) algun item del array <Listening []>
			//Si <Listening []> no esta definido entonces se escuchara cualquier actualizacion
			//Si <Listening []> es un array vacio entonces solo se ejecutara cuando se monte la componente
			return(
				// codigo que se ejecuta cuando algun item de <Listening []> sea desmontado
			)
		}, <Listening []> )

*/

/* EFECTO DE CUALQUIER CAMBIO EN UNA COMPONENTE
	useEffect se puede usar para escuchar cualquier cambio que se 
	haga a la componente donde se instancio, para esto la sintaxis
	debe ser de la siguiente manera:

	useEffect(() => {
		// codigo que se ejecuta como efecto a cualquier cambio
	})
*/
	/* Ejemplo - efecto de cualquier cambio
	En este ejemplo cada que se presione el boton el estado cambiara,
	y mandara a consola 'Algo Cambio' por que useEffect espera o esta
	a la escucha de cualquier cambio.*/

	function App() {
		const [ state, setState ] =  useState(true)
		useEffect(() => {
			console.log('Algo cambio en App') 
		})

		const handdleChange = () => setState(!state)

		return(
			<>
				<button onClick={handdleChange}>Cambiar el estado</button>
			</>
		)
	}

/* EFECTO AL MONTAR UNA COMPONENTE
	useEffect tambien se puede usar para realizar algo justo despues
	de montar una componente, para esto la sintaxis debe ser de la
	siguiente manera:
	
	useEffect(() => {
		// codigo que se ejecuta justo despues de montar la componente
	}, [] )
*/
	/* EJEMPLO - Efecto de montar una componente 
		En este ejemplo se muestra un mensaje en la consola justo
		despues de montar la componente
	*/
	function App() {
		
		useEffect(() => {
			console.log('Ya se ha montado la componente App') 
		}, [] )

		return(
			<>
				mi componente
			</>
		)
	}

/* EFECTO DE ALGUN CAMBIO ESPECIFICO DE UNA COMPONENTE
	useEffect puede escuchar algun cambio especifico de  una componente
	para esto la sintaxis debe ser de la siguiente manera:

	useEffect( () => {
		// codigo que se ejecuta como efecto de algun cualquier
	}, [ Componentes ] )
*/
	/* Ejemplo - efecto de algun cambio
	En este ejemplo cada que se presione el boton el estado corresponedinte
	a esta cambiara,
	y useEffect mostrara un mensaje a la consola si el boton 1 o 3 fueron 
	presionados (pero no el boton 2).*/
	function App() {
		const [ stateOne, setStateOne ] =  useState(true)
		const [ stateTwo, setStateTwo ] =  useState(true)
		const [ stateThree, setStateThree ] =  useState(true)

		useEffect(() => {
			console.log('Algo cambio en stateOne o stateThree') 
		}, [ stateOne, stateThree ])

		const handdleChange1 = () => setStateOne(!stateOne)
		const handdleChange2 = () => setStateTwo(!stateTwo)
		const handdleChange3 = () => setStateThree(!stateThree)

		return(
			<>
				<button onClick={handdleChange1}>Boton 1</button>
				<button onClick={handdleChange2}>Boton 2</button>
				<button onClick={handdleChange3}>Boton 3</button>
			</>
		)
	}