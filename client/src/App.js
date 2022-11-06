import Home from "./component/home"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from "./component/register"
import Login from "./component/loginpage"
import Addpost from "./component/form";
import { PrivateRoute } from './privateroute';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Login />}/>
              <Route  path="/register" element={<Register/>}/>
              <Route path="/home" element={<PrivateRoute>
                <Home/>
              </PrivateRoute>
              }/>
              <Route path="/form" element={<PrivateRoute>
                <Addpost/>
              </PrivateRoute>
              }/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
