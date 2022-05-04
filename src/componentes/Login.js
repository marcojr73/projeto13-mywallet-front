import React from 'react';
import Container from './Container';

export default function LogIn(){
    return(
        <Container>
            <h1> MyWallet </h1>
            <form>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>
                <button>Entrar</button>
                <h2>Primeira vez? Cadastre-se!</h2>
            </form>
        </Container>
    )
}

