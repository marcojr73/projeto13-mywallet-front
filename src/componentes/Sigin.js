import { Link } from "react-router-dom"
import Container from "./Container"

export default function SigIn(){
    return(
        <Container>
            <h1> MyWallet </h1>
            <form>
                <input placeholder="Nome"></input>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>
                <input placeholder="Confirme a senha"></input>
                <button>Entrar</button>
                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </form>
        </Container>
    )
}