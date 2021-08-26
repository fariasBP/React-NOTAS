/* USECONTEXT - useContext()
	Es un hook que ayuda a comunicarse con algun contexto.
	Es decir que permite la comunicacion con un contexto creado y todo esto es util para
	leer props de un componete muy lejano por ejemplo si se tiene tres componentes
	anidados de la siguiente manera

		Padre<componente>
			l-> Hijo<componente>
				l-> Nieto<componente>

	en donde el componente padre quiere mandar un prop al componente nieto
	entoces se tendria que mandar la prop primero al hijo y despues al nieto.
	Es ahi donde useContext(), ya que nos ayudara a obtener esa prop del padre
	directo con la ayuda de un contexto.

*/

// EJEMPLO DE REACTJS.ORG
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

  const ThemeContext = React.createContext(themes.light); // se crea el contexto

  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}> // se establece un valor al contexto
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function ThemedButton() {
    const theme = useContext(ThemeContext); //recupera el valor del contexto con useContext()
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }