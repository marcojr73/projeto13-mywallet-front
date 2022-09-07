import axios from "axios"
import { useEffect } from "react"
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import dotenv from "dotenv"


export default function Historic() {
    
    const urlPost = `${process.env.REACT_APP_API_BASE_URL}/historic`

    const token = JSON.parse(localStorage.getItem("token"))
    
    const [historic, setHistoric] = useState([])
    const [amount, setAmount] = useState(0)

    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get(urlPost, config)
        promisse.then(response => {
            setAmount(response.data.amount)
            setHistoric(response.data.historic.slice(-11).reverse())
        })
        promisse.catch(e => {
            console.log("deu ruim")
        })
    }, [])

    function remvoveTrading(id) {
        if(window.confirm("Deseja realmente excluir a operação?")){
            const promisse = axios.delete(`https://back-my-wallet73.herokuapp.com/delete:${id}`, config)
            promisse.then(response => {
                const promisse = axios.get(urlPost, config)
                promisse.then(response => {
                    setAmount(response.data.amount)
                    setHistoric(response.data.historic.slice(-11).reverse())
                })
                promisse.catch(e => {
                    alert(e.response.data)
                })
            })
            promisse.catch(e => {
                alert(e.response.data)
            })
        }
        
    }

    let color = amount >= 0 ? "green" : "red"
    console.log(historic)
    return (
        historic.length === 0 ?
            <h2>Não há registros de entrada ou saída</h2>
            :
            <ContainerList>
                {historic.map(trad => {

                    let css = trad.type === "output" ? "red" : "green"
                    return (
                        <li>
                            <p><div className="date">{(trad.date).substr(0, 5)}</div>{trad.description}</p>
                            <p className={css}>{parseFloat(trad.valueTrading).toFixed(2)}
                                <p onClick={() => remvoveTrading(trad._id)} className="remove">x</p>
                            </p>

                        </li>
                    )
                })}
                <div className="balance">
                    <p className="text">Saldo</p>
                    <p className={`value ${color}`}>{parseFloat(amount).toFixed(2)}</p>
                </div>
            </ContainerList>
    )
}

const ContainerList = styled.ul`
        padding-top: 23px;
    li{
        display: flex;
        width: 275px;
        margin: auto;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    p{
        display: flex;
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        color: black;
    }
    .date{
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        color: #C6C6C6;
        padding-right: 20px;
    }
    .remove{
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        color: #C6C6C6;
        margin-left: 8px;
    }
    .red{
        color: #C70000;
    }
    .green{
        color: green;
    }
    .balance{
        width: 275px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 12px;
        left: 0;
        right: 0;
    }
    .text{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        color: black;
    }

`