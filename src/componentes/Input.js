import ContainerTrading from "./ContainerTrading"
import { useNavigate } from "react-router"
import axiosInstance from "../instances/api"
import { useState } from "react"

export default function Input() {

    const [valueTrading, setValueTrading] = useState("")
    const [description, setDescription] = useState("")
    const url = '/trading'
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
            type: "input"
        }

        const promisse = axiosInstance.post(url, data, config)
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
