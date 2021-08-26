/* useState
	useState es un hook que declara una "variable de estado",
	el donde su valor se preserva hasta que se decida modificarla.
	TEMAS:
		- useState >>> crea una variable de estado. Es de tipo array que
									contiene una variable y una funcion (state y setState)
			-> state >>> de cualquier tipo Any, es la variable de estado
									el cual se preservara. Ademas esta variable puede
									llevar cualquier nombre no necesariamente state.
			-> setState >>> de tipo Function, es la funcion que modifica la
											variable de estado.

	SINTAXIS:
		- <Array useState>
			-> <String state>
			-> <Function setState>
*/

// EJEMPLO BASICO
	import React, { useState } from 'react'

	function App() {
	  const [mystate, setMystate] = useState('valor por defecto') // establece la variable de estado

	  const HandleState = () => {
	    setMystate('nuevo valor') // se modifica la variable de estado
	  }
	  return (
	    <>
	      <h3>{ mystate }</h3> // muestra la variable de estado
	      <button onClick={HandleState}>Modificar State</button>
	    </>
	  )
	}

// OBJETO COMO VARIABLE DE ESTADO
	// modificar sin desestructuracion (no recomendado)
		function App() {
		  const [persona, setPersona] = useState({
		    nombre: 'sin nombre',
		    apellido: 'sin apellido',
		    edad: 0
		  })
		  let { nombre, apellido, edad } = persona
		  const handleNombre = e => {
		    setPersona({
		      nombre: e.target.value,
		      apellido,
		      edad
		    })
		  }
		  const handleApellido = e => {
		    setPersona({
		      nombre,
		      apellido: e.target.value,
		      edad
		    })
		  }
		  const handleEdad = e => {
		    setPersona({
		      nombre,
		      apellido,
		      edad: e.target.value
		    })
		  }
		  return (
		    <>
		      <h3>Nombre: { nombre }</h3>
		      <h3>Apellido: { apellido }</h3>
		      <h3>Edad: { edad }</h3>
		      <form>
		        <input onChange={handleNombre} type="text" name="nombre" /> <br />
		        <input onChange={handleApellido} type="text" name="apellido" /> <br />
		        <input onChange={handleEdad} type="number" name="edad" />
		      </form>
		    </>

		  )
		}
	// modifica con desestructuracion (recomendado)
		function App() {
		  const [persona, setPersona] = useState({
		    nombre: 'sin nombre',
		    apellido: 'sin apellido',
		    edad: 0
		  })
		  let { nombre, apellido, edad } = persona
		  const handlePersona = e => {
		    setPersona({
		      ...persona,
		      [ e.target.name ] : e.target.value
		    })
		  }
		  return (
		    <>
		      <h3>Nombre: { nombre }</h3>
		      <h3>Apellido: { apellido }</h3>
		      <h3>Edad: { edad }</h3>
		      <form>
		        <input onChange={handlePersona} type="text" name="nombre" /> <br />
		        <input onChange={handlePersona} type="text" name="apellido" /> <br />
		        <input onChange={handlePersona} type="number" name="edad" />
		      </form>
		    </>
		  )
		}

// Arrays de Estado
	/* si hay un array en el estado se puede recorrer cada elemento
	(como si fuera un map) de la siguiente manera 
		setState( item => {
			// recorre cada elemento del array de estado
		})
	*/
	const App = () => {
	  const [citas, setCitas] = useState([
	    { id: "1", tarea: "caminar", estado: 0},
	    { id: "2", tarea: "saltar", estado: 0},
	    { id: "3", tarea: "volar", estado: 0}
	  ])
	  const eliminarCita = id => {
	    setCitas( item => { // se puede colocar cualquier nombre a la variable
	      return item.filter(key => key.id !== id)
	    })
	  }
	  return (
	    <div>
	      <p>tareas</p>
	      {citas.map(key => (
	        <div>
	          <p key={key.id}>{ key.tarea }</p>
	          <button onClick={() => eliminarTarea(key.id) }>Eliminar Tarea</button>
	        </div>
	      ))}
	    </div>
	  );
	};