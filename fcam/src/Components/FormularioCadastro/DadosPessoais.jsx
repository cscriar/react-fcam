import React, { useContext, useState } from 'react';
import {TextField, Button, Switch, FormControlLabel} from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosPessoais({ aoEnviar }) {
    
   const [nome, setNome] = useState("");
   const [sobrenome, setSobrenome] = useState("");
   const [cpf, setCpf] = useState("");
   const [promocoes, setPromocoes] = useState(true);
   const [novidades, setNovidades] = useState(false);
   const validacoes = useContext(ValidacoesCadastro);
   const [erros, validarCampos] = useErros(validacoes);

   function possoEnviar() {
      for (let campo in erros) {
         if(!erros[campo].valido) {
            return false;
         }
      }
      return true;
   }
   
    return(
      <form 
      onSubmit={(event) => {
         event.preventDefault();
         if(possoEnviar()) {
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
         }
      }}>
            
         <TextField 
            value={nome}
            onChange={(event) => {
               setNome (event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id="nome" 
            name="nome" 
            label="Nome" 
            variant="outlined" 
            fullWidth margin="normal"/>
         
         <TextField 
            value={sobrenome}
            onChange={(event) => {
               setSobrenome(event.target.value);
            }}
            id="sobrenome" 
            name="sobrenome"
            label="Sobrenome" 
            variant="outlined" 
            fullWidth margin="normal"/>
         
         <TextField 
            value={cpf}
            onChange={(event) => {
               setCpf (event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="cpf" 
            name="cpf" 
            label="CPF" 
            variant="outlined" 
            fullWidth 
            margin="normal"/>

         <FormControlLabel 
            control={
               <Switch 
                  checked={promocoes} 
                  onChange={(event) => {
                     setPromocoes(event.target.checked);
               }} 
               label="Promoções" 
               name="promocoes" 
               color="primary"/>
            }/>
         
         <FormControlLabel control={
            <Switch
               checked={novidades} 
               onChange={(event) => {
                  setNovidades(event.target.checked);
            }} 
            label="Novidades" 
            name="novidades" 
            color="primary"/>
            }/>
         
         <Button type="submit" variant="contained" color="primary"> Próximo </Button>
      </form> 
   );
}

export default DadosPessoais;