import React, { Component } from "react";
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
// import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import {validarCPF, validarSenha} from "./models/cadastro";

class App extends Component {
   render() {
     return (
       <Container component="article" maxWidth="sm">
         <Typography variant="h3" component="h2" align="center"> Formulário de Cadastro </Typography>
         <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={onSubmitForm} />
        </ValidacoesCadastro.Provider>
       </Container>
     );
   }
 }

 function onSubmitForm(dados) {
   console.log(dados);
 }
 
 export default App;
