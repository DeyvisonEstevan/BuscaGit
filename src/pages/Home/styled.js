import styled from 'styled-components'
import background from '../../../img/git_background.png'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: azure;
    background-image: url(${background});
    background-repeat: repeat;
    background-position: center center fixed;
`;

export const Title = styled.h1`
    background-color: #000;
    color: #000;
    font-weight: 600;
    font-size: 5rem;
    line-height: 0;

`;

export const SubTitle = styled.h1`
    color: #000;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 0;
    margin-top: 10px;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    height: 40px;
    border: 1px solid #ddd;
    padding: 0 .5rem;
    border-radius: 5px 0px 0px 5px;
    width: 20%;
    margin: 0 auto;
    margin-right: 0;
    margin-top: 10px;
`;

export const Button = styled.button`
    height: 40px;
    color: #fff;
    font-size: large;
    font-weight: 600;
    border: 1px solid #000;
    background-color: #000;
    border-radius: 0px 5px 5px 0px;
    width: 10%;
    padding: 5px 10px;
    margin: 0 auto;
    margin-left: 0;
    margin-top: 10px;
`;

export const ErrorMessage = styled.span`
    display: block;
    font-size: 1rem;
    color: red;
    padding: 0.5rem;
    font-weight: 600;
    margin-top: 10px;
    background-color: #404040;
    border-radius: 5px;
`;

// .container {
//     display: flex;
//     height: 500px;
//     align-items: center;
//     justify-content: center;
// }

// .usuario {
//     height: 30px;
//     border-radius: 5px 0px 0px 5px;
// }

// .botao {
//     height: 35px;
//     color: #fff;
//     background-color: #000;
//     border-radius: 0px 5px 5px 0px;
// }