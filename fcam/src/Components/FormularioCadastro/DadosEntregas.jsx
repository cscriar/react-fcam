import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntregas() {
    return(
        <form>
            <TextField id="cep" label="CEP" type="number" variant="outlined" fullWidth margin="normal" />
            <TextField id="endereco" label="Endereço" type="text" variant="outlined" fullWidth margin="normal" />
            <TextField id="numero" label="Numero" type="number" variant="outlined" margin="normal" />
            <TextField id="estado" label="Estado" type="text" variant="outlined" margin="normal" />
            <TextField id="cidade" label="Cidade" type="text" variant="outlined" fullWidth margin="normal" />
            
            <Button id="submit" variant="contained" color="primary" fullWidth> Finalizar cadastro </Button>
        </form>
    );
}

export default DadosEntregas;