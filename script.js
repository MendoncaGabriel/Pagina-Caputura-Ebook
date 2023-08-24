let selectSetorEmpresa = document.getElementById('selectSetorEmpresa')

const setoresEmpresas = [
    "Agropecuária", "Alimentos", "Automotivo", "Bebidas", "Construção", "Educação", "Energia", "Entretenimento", "Farmacêutico", "Finanças",
    "Hospedagem", "Imobiliário", "Indústria", "Logística", "Mídia", "Moda", "Saúde", "Tecnologia", "Telecomunicações", "Transporte",
    "Turismo", "Varejo", "Agricultura", "Biotecnologia", "Consultoria", "Design", "E-commerce", "Esportes", "Manufatura", "Marketing",
    "Meio Ambiente", "Mineração", "Petrolífero", "Publicidade", "Recursos Humanos", "Relações Públicas", "Segurança", "Seguros", "Têxtil",
    "Transporte Público", "Turismo", "Veterinário", "Arquitetura", "Astronomia", "Biblioteconomia", "Cinema", "Comida", "Culinária", "Ecologia",
    "Eventos", "Geologia", "História", "Jardinagem", "Literatura", "Matemática", "Música", "Pesquisa", "Política", "Psicologia", "Religião",
    "Televisão", "Zoologia",
];

  let opcoes = '<option value="" selected></option>'

  for(let i = 0; i<setoresEmpresas.length; i++){
    opcoes += `<option value="${setoresEmpresas[i]}">${setoresEmpresas[i]}</option>`
  }

  selectSetorEmpresa.innerHTML = opcoes


  function enviar(){
    let alerta = document.getElementById('alerta')
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let empresa = document.getElementById('empresa')
    let setor = document.getElementById('selectSetorEmpresa')
    let qtdFuncionarios = document.getElementById('qtdFuncionarios')
    let termos = document.getElementById('termos')

    

    if(nome.value.length == 0){
        alertar('Por favor, preencha seu nome!')
    }else if(email.value.length == 0){
        alertar('Por favor, preencha seu e-mail!')
    }else if(!termos.checked){
        alertar('Para receber o e-book aceite os termos.')

    }else{
        let data = {}
        data.nome = nome.value
        data.email = email.value
        if(empresa.value.length != 0){
            data.empresa = empresa.value
        }
        if(setor.value != 0){
            data.setor = setor.value
        }
        if(qtdFuncionarios.value != 0){
            data.qtdFuncionarios = qtdFuncionarios.value
        }


        console.log(data)
        alertar('Parabens!, em breve voce receberar o ebook em seu email.', true)
        
    }


    function alertar(msg, sucesso){


        if(sucesso){
            alerta.style.textAlign = 'center'
            alerta.style.padding = '10px'
            alerta.style.backgroundColor = 'green'
            alerta.style.color = 'white'
        }

        alerta.innerHTML = msg
        alerta.style.transition = '300ms linear'
        alerta.style.transform = 'translate(-100%)'
    
        setTimeout(() => {
            alerta.style.display = 'flex'
            setTimeout(() => {
                alerta.style.transform = 'translate(0%)'
            }, 10);
        }, 100);
        
        setTimeout(() => {
            alerta.style.transform = 'translate(-100%)'
            
            setTimeout(() => {
                alerta.style.display = 'none'
                
            }, 100);

            if(sucesso){
                window.location.reload()
            }
        }, 3000);



    }

  }