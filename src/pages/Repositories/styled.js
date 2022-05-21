import styled from 'styled-components'
import { Link } from 'react-router-dom';
import background from '../../../img/git_background.png';

export const Container = styled.div`
    margin: 0 auto;
    background-color: azure;
    background-image: url(${background});
    background-repeat: repeat;
    background-position: center center fixed;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #000;
    margin: 0;
    margin-bottom: 20px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    display: flex;
    margin: 0 auto;
    margin-bottom: 10px;
    height: 30px;
    width: 70%;
    background: #404040;
    color: #fff;
    padding: 10px;
    align-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: medium;
    font-weight: 300;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
    background-color: #404040;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
    margin-bottom: 20px;
`

