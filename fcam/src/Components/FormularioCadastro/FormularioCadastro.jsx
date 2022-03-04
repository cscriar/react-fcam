import React, {useState} from 'react';
import DadosEntregas from './DadosEntregas';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({onSubmit, validarCPF}) {

   
    return(
       <>
         <DadosPessoais onSubmit={onSubmit} validarCPF={validarCPF} />
         <DadosUsuario/>
         <DadosEntregas/>
      </>
   );
}

export default FormularioCadastro;