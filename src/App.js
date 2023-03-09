import logo from './logo.svg';
import Homepage from './pages/HomePage';
import './style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout/>}>
   <Route path="/" index element={<Homepage/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/*" element={<Homepage/>}/>
   
   </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;