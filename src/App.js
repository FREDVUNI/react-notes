import './App.css';
import NavBar from './components/NavBar'
import Add from './components/Add'
import Notes from './components/Notes'
import {NotesProvider} from './context/NotesContext'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <NotesProvider>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Notes/>}/>
            <Route path='/note' element={<Add/>}/>
          </Routes>
      </Router>
    </NotesProvider>
  );
}

export default App;
