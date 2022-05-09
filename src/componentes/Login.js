import React, { useState } from 'react';
import { useContext } from "react"
import DataContext from './context/context';
import { Link } from 'react-router-dom';
import Container from './Container';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function LogIn(){

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const url = "http://localhost:5000/log-in"
    const navigate = useNavigate()

    const token = useContext(DataContext);
    const name = useContext(DataContext)


    function logInUser(e){
        e.preventDefault()

        const data = {
            email,
            password
        }
        
        const promisse = axios.post(url, data)
        promisse.then(response => {

            const locals = JSON.stringify(response.data.token)
            localStorage.setItem("token", locals)

            name.setName(response.data.name)
            token.setToken(response.data.token)
            navigate("/home")
        })
        promisse.catch(e => {
            alert(e.response.data)
            console.log(e)
        })
    }
    return(
        <Container>
            <h1> MyWallet </h1>
            <form onSubmit={logInUser}>

                <input  type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                ></input>

                <input  type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                ></input>

                <button type="submit">Entrar</button>
                <Link to="/sig-in">Primeira vez? Cadastre-se!</Link>
            </form>
        </Container>
    )
}

