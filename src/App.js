import './style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AirportAvailability from './pages/AirportAvailability';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout/>}>
   <Route path="/" index element={<HomePage/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="*" element={<HomePage/>}/>
   <Route path="results" element={<AirportAvailability/>} />
   
   </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;