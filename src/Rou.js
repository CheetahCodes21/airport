import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Demo from './Demo';
import Res from './Res';
function Rou() {
  return (
   <BrowserRouter>
   <Routes>
    <Route>
   <Route path="/" index element={<Demo/>}/>
   <Route path="results" element={<Res/>} />
   </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default Rou;