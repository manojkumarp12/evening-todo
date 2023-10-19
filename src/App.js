import React from "react"
import { Route, Routes } from 'react-router-dom'

import Home from "./Component/Home"
import About from "./Component/About"
//import Contact from "./Component/Contact"

function App(){
    return(
        <>
            <h1>This is an Route Component</h1>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         {/* <Route path="/contact" element={<Contact/>}/> */}
</Routes>
        </>
    )
}
export default App