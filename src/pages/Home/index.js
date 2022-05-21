import React, { useState } from "react";
import axios from "axios";
import {
  HomeContainer,
  Title,
  SubTitle,
  Content,
  Input,
  Button,
  ErrorMessage,
} from "./styled";
import { useNavigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        navigate("/repositories");
      })
      .catch((err) => {
        setErro(true);
      });
  }

  return (
    <HomeContainer>
      <Title>BuscaGit</Title>
      <SubTitle>Veja aqui seus repositórios</SubTitle>
      <Content>
        <Input
          className="usuario"
          placeholder="Digite seu GitHub"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Button className="botao" type="button" onClick={handlePesquisa}>
          Pesquisar
        </Button>
      </Content>
      {erro ? (
        <ErrorMessage>Ocorreu um erro, Tente novamente.</ErrorMessage>
      ) : (
        " "
      )}
    </HomeContainer>
  );
}

export default App;
