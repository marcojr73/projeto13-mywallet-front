import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "../assets/reset.css"
import "../assets/style.css"

import DataContext from "./context/context";
import LogIn from "./Login";
import SigIn from "./Sigin";
import Home from "./Home";
import Input from "./Input";
import Output from "./Output";

export default function App(){

    const [ token, setToken ] = useState("")

    return(
        <DataContext.Provider  value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn/>} > </Route>
                    <Route path="/sig-in"element={<SigIn/>} > </Route>
                    <Route path="/home" element={<Home/>} > </Route>
                    <Route path="/input" element={<Input/>} > </Route>
                    <Route path="/output" element={<Output/>} > </Route>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}