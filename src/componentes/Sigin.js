import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import Container from "./Container"
import axios from "axios"

export default function SigIn(){

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirm, setConfirm ] = useState("")
    const navigate = useNavigate()
    const url = "http://localhost:5000/sig-in"

    async function sigInUser(e){
        e.preventDefault()
        if(false){
            alert("As senhas digitadas não correspondem")
            setEmail("")
            setName("")
            setPassword("")
            setConfirm("")

        } else {
            const data = {
                name,
                email,
                password,
                confirm
            }

            const promisse = axios.post(url, data)
            promisse.then (response => {
                navigate("/")
            })        
            promisse.catch(e => {
                alert(e.response.data)
                console.log(e)
            })

            console.log(data)
        }
    }

    return(
        <Container>
            <h1> MyWallet </h1>
            <form onSubmit={sigInUser}>
                <input  type="text" 
                        required
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                ></input>

                <input  type="email" 
                        required
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}        
                        value={email}
                ></input>

                <input  type="password" 
                        required
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}        
                        value={password}
                ></input>

                <input  type="password" 
                        required
                        placeholder="Confirme a senha"
                        onChange={(e) => setConfirm(e.target.value)}
                        value={confirm}
                ></input>

                <button type="submit">Entrar</button>
                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </form>
        </Container>
    )
}