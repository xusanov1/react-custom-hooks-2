import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardList from './components/list/CardList'
import Single from './components/single/Single'

import './App.css'

function App() {

  return (
    <>
     <Router>
     <Nav/>
      <header>
        <h1 className='app-title'>Daily News</h1>
      </header>
      <div className="app">
       <Routes>
         <Route exact path="/" element={<CardList />} />
         <Route exact path="/news/:id" element={<Single />} />
       </Routes>
       </div>

     </Router>

    </>
  )
}

export default App
