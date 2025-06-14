import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './screens/home/home';
import SignInScreen from './screens/auth/SignIn/SignIn';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignInScreen />} />
        </Routes>
      </BrowserRouter>

      {/* <SignInScreen/> */}

    </>
    
  )
}

export default App
