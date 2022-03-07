
function validarCPF(cpf) {
    if(cpf.lenght !== 11) {
     return {valido: false, texto: "CPF inválido!"};
    } else {
      return {valido: true, texto: ""};
    }
  }

  function validarSenha(senha) {
    if(senha.lenght < 4 || senha.lenght > 72) {
     return {valido: false, texto:"Senha dever ter entre 4 e 72 caracters"};
    }else {
      return {valido: true, texto: ""};
    }
  }

  export {validarCPF, validarSenha};