import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export default function LogIn(){
    return(
        <Container>
            <h1> MyWallet </h1>
            <form>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>
                <button>Entrar</button>
                <Link to="/sig-in">Primeira vez? Cadastre-se!</Link>
            </form>
        </Container>
    )
}

