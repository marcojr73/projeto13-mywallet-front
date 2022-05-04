import styled from "styled-components";

const Container = styled.div`
    h1, form{
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
    }
    h1{
        font-family: 'Saira Stencil One';
        font-size: 32px;
        color: #FFFFFF;
        top: 159px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 223px;
    }
    input, button{
        width: 326px;
        margin-bottom: 13px;
        border-radius: 5px;
        border: 0px solid;
    }
    button{
        height: 46px;
        background: #A328D6;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
    }
    input{
        height: 58px;
    }
    input::placeholder{
        padding: 15px;
        font-size: 20px;  
        color: #000000;
    }
    h2{
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        margin-top: 23px;
    }
`

export default Container