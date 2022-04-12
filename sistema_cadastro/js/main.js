
 

let savelocal = function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
      let name = document.getElementById('descricao').value;
      let email = document.getElementById('estado').value;
      let password = document.getElementById('cidade').value;
    let repassword = document.getElementById('responsavel').value;
      let date = document.getElementById('email_responsavel').value;
      let phone = document.getElementById('fone_responsavel').value;
  for (let i = 0; i < gender.length; i++) {
          if (gender[i].checked) {
              
            gender = gender[i].value;
          }
      }
    
    if(username == ''){ alert("Insira o nome");
                       exit;}
    if(descricao == ''){ alert("Insira a descricao");
                   exit;}
    if(estado == ''){ alert("Insira o estado");
                       exit;}
    if(cidade == ''){ alert("Insira a cidade");
                       exit;}
    if(responsavel == ''){ alert("Insira o responsavel");
                   exit;}
    if(email_responsavel == ''){ alert("Insira o email responsavel");
                  exit;}
    if(fone_responsavel == ''){ alert("Insira o fone responsavel");
                  exit;}

    
              let jsonitems = {
                    'username': username,
                    'descricao': name, 
                    'estado': email, 
                    'cidade': password,
                    'responsavel': date,
                    'email_responsavel': phone,
                    'fone_responsavel':gender
                  };

              let jsonlocal = JSON.stringify(jsonitems);
  
              localStorage.setItem('jsonCadastro', jsonlocal);
    
   };
  
  
  
  document.getElementById('cadastro').addEventListener('submit', savelocal);
  
  
    
    
    
    
    