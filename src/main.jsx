import React from 'react'
import ReactDOM from 'react-dom/client'

//code router pour github pages quiva associe avec <HashRouter>
//aqui en la raiz del proyecto se debe configurar a <Router> y en
//App.jsx <Routes> y <Route>
import { HashRouter as Router } from 'react-router-dom'
import App from './App.jsx'

//import style reset et global
import '../src/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<HashRouter>*/}
    <Router>
      <App />
    </Router>

    {/*</HashRouter>*/}
  </React.StrictMode>,
)
