import React, { useEffect, useState } from 'react';
import { Container, Title, List, ListItem, LinkHome } from './styled';
import { useNavigate } from 'react-router-dom';


export default function Repositories() {
    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
        }else{
            navigate('/');
        }
        
    }, []);

    return (
        <Container>
            <Title>Repositórios</Title>
            <List>
                { repositories.map(repository => {
                    return (
                        <ListItem>Repositório: { repository }</ListItem>
                    )
                })}
            </List>
            <LinkHome to='/'>Voltar</LinkHome>
        </Container>
    )
}
