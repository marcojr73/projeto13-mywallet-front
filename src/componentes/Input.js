import { useState } from "react/cjs/react.development"
import { useContext } from "react"
import DataContext from "./context/context"
import ContainerTrading from "./ContainerTrading"
import axios from "axios"

export default function Input() {

    const [valueTrading, setValueTrading] = useState("")
    const [description, setDescription] = useState("")
    const url = "http://localhost:5000/trading"
    const token = useContext(DataContext).token;

    
    function trading(e) {

        e.preventDefault()
        

        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const data = {
            valueTrading,
            description,
            type: "input"
        }

        const promisse = axios.post(url, data, config)
        promisse.then(response => {
            console.log(response.data)
            setDescription("")
            setValueTrading("")
        })
        promisse.catch(e => {
            console.log("deu ruim irmão", e)
        })
    }



    return (
        <ContainerTrading>
            <h1> Nova entrada </h1>
            <form onSubmit={trading}>
                <input type="number"
                    placeholder="Valor"
                    value={valueTrading}
                    onChange={(e) => setValueTrading(e.target.value)}
                ></input>

                <input type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></input>
                <button type="submit">Salvar entrada</button>
            </form>
        </ContainerTrading>
    )
}
