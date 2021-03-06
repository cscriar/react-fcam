import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos] = useErros(validacoes);
     
    function possoEnviar() {
      for(let campo in erros) {
        if(!erros[campo].valido) {
          return false;
        }
      }
      return true;
    }

    return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
              aoEnviar({ email, senha });
            }
          }}
        >
            <TextField 
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            name="email" 
            id="email" 
            label="email" 
            type="email" 
            riquired 
            variant="outlined" 
            fullWidth margin="normal"/>
            
            <TextField 
            value={senha}
            onChange={(event) => {
              setSenha(event.target.value);
            }}
            onBlur={validarCampos} 
            error={!erros.senha.valido} 
            helperText={erros.senha.texto}
            id="senha" 
            name="senha" 
            label="senha" 
            type="password" 
            riquired 
            variant="outlined" 
            fullWidth margin="normal"/>

            <Button type="submit" variant="contained" color="primary"> Próximo </Button>
        </form>
    );
}

export default DadosUsuario;