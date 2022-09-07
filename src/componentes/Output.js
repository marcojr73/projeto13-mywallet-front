import { useState } from "react"
import ContainerTrading from "./ContainerTrading"
import axios from "axios"
import { useNavigate } from "react-router"

export default function Output(){

    const [ valueTrading, setValueTrading ] = useState("")
    const [ description, setDescription ] = useState("")
    const url = `${process.env.REACT_APP_API_BASE_URL}/trading`
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()


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
            type: "output"
        }

        const promisse = axios.post(url, data, config)
        promisse.then(response => {
            console.log(response.data)
            navigate("/home")
            setDescription("")
            setValueTrading("")
        })
        promisse.catch(e => {
            console.log("deu ruim irmão", e)
        })
    }


    return(
        <ContainerTrading>
            <h1> Nova saída </h1>
            <form onSubmit={trading}>
                <input  type="number"
                        value={valueTrading}
                        onChange={(e) => setValueTrading(e.target.value) }
                        placeholder="Valor"
                ></input>
                <input  type="text" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value) }        
                        placeholder="Descrição"
                ></input>
                <button type="submit">Salvar saída</button>
            </form>
        </ContainerTrading>
    )
}