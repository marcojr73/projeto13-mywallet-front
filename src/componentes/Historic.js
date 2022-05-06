import axios from "axios"
import { useContext } from "react"
import DataContext from './context/context';



export default function Historic(){
    const url = "http://localhost:5000/historic"
    const token = useContext(DataContext).token;
    console.log(token)

    getList()
    function getList(){

        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        const promisse = axios.get(url, config)
        promisse.then(response => {
            console.log(response.data)
        })
        promisse.catch(e => {
            console.log("deu ruim")
        })
    }

    return(
        <h2>Não há registros de entrada ou saída</h2>
    )    
}