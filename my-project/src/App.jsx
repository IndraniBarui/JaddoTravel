



import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from './signup/SignUp';
// import Login from './signup/Login';
import Home from './screen/Home/Home';
// import store from './redux/Store';
// import { Provider } from 'react-redux';
import "../src/App.css"
import SignUp from "./signup/SignUp";
import Login from "./signup/Login";


function App() {

  return (
    <>
     {/* <Provider store={store}> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
    </>
   
  );
}

export default App;
