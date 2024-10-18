function ex01(){
  const votos = []
  var voto

  var candidato1_counter = 0
  var candidato2_counter = 0
  var branco_counter = 0
  var nulo_counter = 0
  var votos_counter = 0

  var candidato1_percentage = 0
  var candidato2_percentage = 0
  var branco_percentage = 0
  var nulo_percentage = 0

  while(voto != -1){
    voto = parseInt(prompt(`Digite seu voto: `))
    if(voto == 1 || voto == 2 || voto == 0){
      votos.push(voto)
    }
    else if (voto != -1){
      votos.push(5)
    }
  }

  for(i=0; i<=votos.length; i++){
    if(votos[i] == 1){
      candidato1_counter++
      votos_counter++
    }
    else if (votos[i] == 2){
      candidato2_counter++
      votos_counter++
    }
    else if (votos[i] == 0){
      branco_counter++
      votos_counter++
    }
    else if (votos[i] == 5){
      nulo_counter++
      votos_counter++
    }
  }

  candidato1_percentage = ((candidato1_counter*100)/votos_counter).toFixed(1)
  candidato2_percentage = ((candidato2_counter*100)/votos_counter).toFixed(1)
  branco_percentage = ((branco_counter*100)/votos_counter).toFixed(1)
  nulo_percentage = ((nulo_counter*100)/votos_counter).toFixed(1)

  if(candidato1_percentage > candidato2_percentage){
    alert(`O Candidato 1 Venceu!`)
  }
  else if (candidato1_percentage < candidato2_percentage){
    alert(`O Candidato 2 Venceu!`)
  }
  else{
    alert(`Algum erro ocorreu...`)
  }

  alert(`Votos do candidato 1: ${candidato1_counter} // Porcentagem: ${candidato1_percentage}%`)
  alert(`Votos do candidato 2: ${candidato2_counter} // Porcentagem: ${candidato2_percentage}%`)
  alert(`Votos em branco: ${branco_counter} // Porcentagem: ${branco_percentage}%`)
  alert(`Votos em nulo: ${nulo_counter} // Porcentagem: ${nulo_percentage}%`)
}