
/*readme.md --> es un archivo para que lo leo cualquiero en donde informa de que trata nuestro proyecto

package.json --> es un archivo inportarte que almacena datos importantes como la version, nombre, dependencias, entre otros.


public/ --> muestra los archivos estatico y visibles (archivos publicos)

src/ --> contiene el codigo de react

	index.js --> el archivo (inicial) donde empieza la logica de react.
		serviceWorker --> es un metodo importado y ejecutado para progesive web app PWA
		ReactDOM.render --> es el renderizador de react 
	app.js --> es solo un componente creado para mostrar un previo de lo que hace react.*/

// index.js
	import React from 'react';
	import ReactDOM from 'react-dom';
	import './index.css';
	import App from './App';
	import * as serviceWorker from './serviceWorker';

	ReactDOM.render( // renderiza el componente "App" y lo escribe en div con el id "root"
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>,
	  document.getElementById('root')
	);

	serviceWorker.unregister();