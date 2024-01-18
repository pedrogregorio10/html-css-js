     //Determinar o aproveitamento ou rendimento do estudante apartir de dados aleatorio
     function saber(){
        let valor=document.getElementById('inum').value
        let result
        let aleatorio= Math.floor(Math.random()*(5)+valor)
        if(aleatorio==1) {
            result='Tens dormido muito'
            }else if(aleatorio==2){
             result='Tens descansado pouco'
            }
            else if(aleatorio==3){
             result='Dormir pelo menos 8 horas por dia!'
            }else if(aleatorio==4){
                result='Fazer pelo menos três refeições por dia!'
               }else if(aleatorio==5){
                result='Fazer exercícios todos os dias pelo menos 30 minutos!'
               }else if(aleatorio==6){
                result='Estudar 1 disciplina por dia, e fazer exercícios!'
               }
            else{
             result='Estude, Não faltar nas aulas desnecessariamente!'
            }    
    document.getElementById('texto').innerHTML=result
    aparecer();
     }
    let s=document.getElementById('alert')
    function aparecer(){
    s.classList.add('to')
    } 
    function sair(){
    s.classList.remove('to')
    }
