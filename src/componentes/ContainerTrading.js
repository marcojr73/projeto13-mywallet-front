import styled from "styled-components";

const ContainerTrading = styled.div`
    width: 326px;
    margin: auto;

    h1{
        font-family: "Raleway";
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
        margin-top: 25px;
    }

    form{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
    }

    input{
        border: none;
        border-radius: 5px;
        height: 58px;
        margin-bottom: 13px;
    }

    input::placeholder{
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        color: black;

    }

    button{
        height: 46px;
        background: #A328D6;
        border: none;
        border-radius: 5px;
        font-family: Raleway;
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
    }
`
export default ContainerTrading