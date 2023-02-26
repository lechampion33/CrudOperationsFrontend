
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import AddPlayers from './Users/AddPlayers';
import EditPlayers from './Users/EditPlayers';
import ViewPlayers from './Users/ViewPlayers';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addplayers" element={<AddPlayers/>}/>
        <Route path="/editplayers/:id" element={<EditPlayers/>}/>
        <Route exact path="/viewplayer/:id" element={<ViewPlayers />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
