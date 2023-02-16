  
  // Contexto AppContext.js
  import React from 'react'

  export const AppContext = React.createContext()

  function AppProvider (props) {
    return(
      <AppContext.Provider value={props.value}>
        {props.children}
      </AppContext.Provider>
    )
  }

  export default AppProvider

  // Componente App.js
  import React from 'react'
  import styled from 'styled-components';

  import Hijo from './components/Hijo';
  import AppProvider from './context/AppContext';

  function App() {
    const cl = {
      colorTitulo: '#2773C4', // azul
    };
    return (
      <AppProvider value={cl.colorTitulo}>
        <AppStyled>
          <h2>PADRE</h2>
          <Hijo />
        </AppStyled>
      </AppProvider>
    )
  }
  const AppStyled = styled.div`
    border: 3px solid green;
    height: 400px;
    margin: 32px;
  `
  export default App

  // Componente Hijo.js
  import React from 'react'
  import styled from 'styled-components'
  import Nieto from './Nieto'

  function Hijo() {
    return (
      <HijoStyled>
        <h2>HIJO</h2>
        <Nieto />
      </HijoStyled>
    )
  }
  const HijoStyled = styled.div`
    border: 3px solid brown;
    height: 300px;
    margin: 32px;
  `
  export default Hijo

  // Componente Nieto.js
  import React from 'react'
  import styled from 'styled-components'

  import { AppContext } from '../context/AppContext';

  function Nieto() {
    const appContext = React.useContext(AppContext)

    return (
      <NietoStyled stl={appContext}>
        <h2>NIETO</h2>
      </NietoStyled>
    )
  }
  const NietoStyled = styled.div`
    color: ${({stl}) => stl?stl:'#000'};
    border: 3px solid cyan;
    margin: 16px;
    height: 200px;
  `

  export default Nieto