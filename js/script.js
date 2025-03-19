//Cria uma função para validar a senha e o email
function ValidateFields () {
    //Adiciona ao sistema as informaçãoes que ele precisará por enquanto
    const email = document.getElementById("Email").value;
    const password = document.getElementById("password").value;
    const emailvalid = isEmailValid();
    const login = ispasswordvalid();
    
    //Só habilita o botão recuperar senha se o campo email estiver preenchido
    document.getElementById('recover-password-button').disabled =!emailvalid;
    //Só habilita o botão Login se o campo email e senha estiver preenchido
    document.getElementById("login-button").disabled = !emailvalid || !password;
 }
 
 //Cria uma função para validar o email e senha para que ambos não estejam vazios
 function isEmailValid() {
     const email = document.getElementById("Email").value;
     if(!email){
      return false;
     }
     return validateEmail(email);
 }
 
 function ispasswordvalid (){
     const password = document.getElementById("password");
     if(!password) {
         return false;
     }
     return true;
 }
 //cria uma função para confirmar o login e a senha
 function loginisvalue(login){
     if (!email || !password){
         return false;
     }
     return true;
 
 }
 //Cria uma função para validar o email e a senha
 function validateEmail(email){
     return /\S+\S+\.\S+/.test(email)
 }