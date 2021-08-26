/* BrowserRouter

	TEMAS:
		- BrowserRouter --> Es un <Router>, solo que esta añade
							datos a la historial de navegación.
			- basename --> Establece la direccion url base de todas las ubicaciones
			- getUserConfimation --> funcion que se va a utilizar para confirmar la
									navegación. El valor predeterminado es window.confirm
			- forceRefresh --> Si el router utilizará actualizaciones de página 
								completa en la navegación de la página. Es posible 
								que desee usar esto para imitar la forma en 
								que una aplicación tradicional representada por 
								el servidor funcionaría con actualizaciones de 
								página completa entre la navegación de página.true
	NOTA: BrowserRouter siempre debe ser padre
*/
// Ejemplo 1 - uso comun
	<BrowserRouter
	  basename={optionalString}
	  forceRefresh={optionalBool}
	  getUserConfirmation={optionalFunc}
	  keyLength={optionalNumber}
	>
	  <App />
	</BrowserRouter>

// Ejemplo 2 - con basename
	<BrowserRouter basename="/calendar">
	    <Link to="/today"/> // renders <a href="/calendar/today">
	    <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow">
	    ...
	</BrowserRouter>