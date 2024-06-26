//on va utilizer App pour configure gerer les routes

//import Header from './components/Header/index'
//route pour lies les pages
import { Routes, Route } from 'react-router-dom'

//importacion de las paginas
import Acceuil from './Pages/Home/Home'
import APropo from './Pages/About/About'
//page d'Erreur
import Error from './Pages/Error/Error'
//page de logement
import Housing from './Pages/Housing/Housing'
//importation de la data
//import data from '../public/data.json'
//style
//import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/apropo" element={<APropo />} />
        <Route path="*" element={<Error />} />
        <Route path="/housing/:id" element={<Housing />} />
      </Routes>
    </>
  )
}
//attention il fau l'enleve si ne marche pas
export default App
