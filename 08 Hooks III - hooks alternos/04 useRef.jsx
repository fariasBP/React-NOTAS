/* USEREF
	es un hook que permite crear una referencia a un elemento, es decir
	crear una referencia del dom y asi trabajar con esta

	SINTAXIS:
		const ref = useRef(<any InitialValue>)
		const handdle = () => {
			ref.current.<propieties>
		}
		<div ref={ref}></div>

*/
// EJEMPLO BASICO - referencia de un input y crear focus
	// sin useRef()
		function App() {
			
			const handleFocus = () => {
				document.querySelector('input').focus()
				document.querySelector('input').select()
			}

			return(
				<>
					<input type="text" placeholder="mi input" /> 
					<button onClick={handleFocus}>Focus en Input</button>
				</>
			)
		}

		// Con useRef()
		function App() {
			const inputRef = useRef()

			const handleFocus = () => {
				inputRef.current.focus()
				inputRef.current.select()
			}

			return(
				<>
					<input type="text" placeholder="mi input" ref={inputRef} /> 
					<button onClick={handleFocus}>Focus en Input</button>
				</>
			)
		}
// PROPIEDADES DEL DOM CON USEREF - obteniendo el ancho de un div
	function App() {
		const divRef = useRef()
		const handleWidth = () => {
			console.log(divRef.current) // propiedades
			console.log(divRef.current.offsetWidth) // ancho
		}
		return(
			<>
				<div ref={divRef}>Mi Div</div>
				<button onClick={handleWidth}>Obtener Ancho</button>
			</>
		)
	}

// VARIABLES CON USEREF - crear variables de alto scope con useRef()
	function App() {
		const initVal = useRef(0)
		const handleVal = () => {
			initVal.current = initVal+1
		}
		return(
			<>
				<h1>{initVal.current}</h1>
				<button onClick={handleVal}>Cambiar Valor</button>
			</>
		)
	}

// USO UTIL DE USEREF - evitando error de "Can't perform a React state update on an unmounted..."
	// sin useRef
		function App() {
		  const [showData, setShowData] =  useState(false)
			const handleData = () => {
				setShowData(!showData)
			}
			return(
				<>
					{showData&&<Data />}
					<button onClick={handleData}>{!showData?'Mostrar':'Ocultar'}</button>
				</>
			)
		}
		function Data() {
			const [state, setState] = useState('datos')
			const isMounted = useRef(true);
			useEffect(()=>{
				return ()=>{
					isMounted.current = false
				}
			}, [])
			useEffect(()=>{
				setTimeout(()=>{
					setState('se ha cambiado los datos')
				}, 4000)
			}, [])
			return(
				<h1>{state}</h1>
			)
		}
		/*  Si se oprime el boton para mostrar Data pero rapidamente
		se oprime nuevamente para ocultarlo (sin esperar tres segunda para mostrar el mensaje).
		Se lanza un error porque se esta malgastando memoria ya que
		se guarda datos en el state pero el compoenente fue desmontado, y de echo
		eso es cierto por lo tanto se debe prevenir el guardar en el state*/
	// con useRef - se usa useRef para evitar un setState
		function App() {
		  const [showData, setShowData] =  useState(false)
			const handleData = () => {
				setShowData(!showData)
			}
			return(
				<>
					{showData&&<Data />}
					<button onClick={handleData}>{!showData?'Mostrar':'Ocultar'}</button>
				</>
			)
		}
		function Data() {
			const [state, setState] = useState('datos')
			const isMounted = useRef(true)
			useEffect(()=>{
				return ()=>{
					isMounted.current = false
				}
			}, [])
			useEffect(()=>{
				setTimeout(()=>{
					if (isMounted.current)
						setState('se ha cambiado los datos')
					else console.log('Se ha prevenido un setState')
				}, 4000)
			}, [])
			return(
				<h1>{state}</h1>
			)
		}

// USEREF CON POO (Referencias)
class App extends Component {
    constructor() {
        super()
        this.title = React.createRef()
        this.changeColor = this.changeColor.bind( this )
    }
    changeColor() {
        console.log(this.title)
        this.title.current.style.color = 'tomato'
    }
    render() {
        return (
            <div className="App">
                <h1 ref = { this.title }>Hola comunidad</h1>
                <button onClick = { this.changeColor }>Cambiar color</button>
            </div>
        );
    }
}