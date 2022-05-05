
import styled from "styled-components"

import exit from "../assets/exit.png"
import plus from "../assets/plus.png"
import sub from "../assets/sub.png"

export default function Home(){
    return(
        <Container>
            <header>
                <h1>olá, fulano</h1> 
                <img src={exit}></img>
            </header>
            <main>
                <h2>Não há registros de entrada ou saída</h2>
            </main>
            <footer>
                <div className="put">
                    <img className="icon" src={plus} />
                    <div className="aux">
                        <p>Nova entrada</p>
                    </div>
                </div>
                <div className="put">
                    <img className="icon" src={sub} />
                    <div className="aux">
                        <p>Nova saída</p>
                    </div>
                </div>
            </footer>
        </Container>
    )
}

const Container = styled.header`
    width: 326px;
    margin: auto;
    /* background: red; */

    header{
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
    }

    h1{
        font-family: "Raleway";
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
    }

    main{
        height: 446px;
        background: #FFFFFF;
        margin-top: 22px;
        border-radius: 5px;
    }
    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        margin: auto;
        height: 100%;
    }

    footer{
        display: flex;
        justify-content: space-between;
        margin-top: 13px;
    }

    .put{
        width: 155px;
        height: 114px;
        background: #A328D6;
        position: relative;
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        color: #FFFFFF;
        border-radius: 5px;
    }

    .aux{
        width: 64px;
        height: 40px;
        position: absolute;
        left: 10px;
        bottom: 9px;
    }

    .icon{
        position: absolute;
        top: 11px;
        left: 10px;
    }


`