import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter, Route, Routes  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messsage, type) => {
    setAlert({
      msg: messsage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode Is Enable.", "success");
      // document.title = "Text Title is Awesome.";
      // setInterval(() => {
      //   document.title = "Text Title is Awesome.";
      // }, 3000);
      // setInterval(() => {
      //   document.title = "Download it.";
      // }, 2000);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Is Enable.", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar logoName="Text Maker" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/' element={<Text showAlert={showAlert} mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
