import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "../assets/reset.css"
import "../assets/style.css"

import DataContext from "./context/context";
import Home from "./Home";
import Input from "./Input";
import Output from "./Output";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function App(){

    const [ token, setToken ] = useState("")
    const [ name, setName ] = useState("")

    return(
        <DataContext.Provider  value={{token, setToken, name, setName}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>} > </Route>
                    <Route path="/sign-up"element={<SignUp/>} > </Route>
                    <Route path="/home" element={<Home/>} > </Route>
                    <Route path="/input" element={<Input/>} > </Route>
                    <Route path="/output" element={<Output/>} > </Route>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}