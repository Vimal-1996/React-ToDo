import Header from './Components/Header/Header/Header';
import AddComponent from './Components/AddComponent/AddComponent';
import DetailsComponent from './Components/Details/DetailsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import IndiDetails from './Components/Details/IndiDetails';
function App() {
  
  const getDatasApp=(datas)=>{
    
    
  }
  
  
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route exact path="/" element={<DetailsComponent details={null}/>}/>
        <Route path="/add" element={<AddComponent getDatas={getDatasApp}/>}/>
        <Route path="/details" element={<DetailsComponent/>}/>
        <Route path="/details/:id" element={<IndiDetails />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
