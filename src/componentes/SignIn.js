import React, { useState } from 'react';
import { useContext } from "react"
import DataContext from './context/context';
import { Link } from 'react-router-dom';
import Container from './Container';
import { useNavigate } from 'react-router';
import axiosInstance from '../instances/api';

export default function SignIn(){

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const navigate = useNavigate()

    const token = useContext(DataContext);
    const name = useContext(DataContext)

    function logInUser(e){
        e.preventDefault()

        const data = {
            email,
            password
        }
        
        const promisse = axiosInstance.post('/sign-in', data)
        promisse.then(response => {

            const locals = JSON.stringify(response.data.token)
            localStorage.setItem("token", locals)

            name.setName(response.data.name)
            token.setToken(response.data.token)
            navigate("/home")
        })
        promisse.catch(e => {
            console.log(e)
            alert(e.response.data)
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
                <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
            </form>
        </Container>
    )
}

