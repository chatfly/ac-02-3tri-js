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

function ex02(){
  const vendas = []
  var venda

  var venda_maior = parseFloat(0)
  var venda_menor = parseFloat(0)
  var venda_media = 0
  var numero_vendas = 0
  var total_vendas = 0

  while(venda!=-1){
    venda = parseInt(prompt(`Digite o valor da venda: `))
    if(venda!=-1){
      vendas.push(venda)
      venda_menor=venda
    }
  }
  for(i=0; i<vendas.length; i++){
    if (venda_maior <= vendas[i]){
      venda_maior = vendas[i]
    }
    if (venda_menor >= vendas[i]){
      venda_menor = vendas[i]
    }
    total_vendas+=vendas[i]
  }

  numero_vendas = vendas.length
  venda_media = total_vendas / numero_vendas

  alert(`Maior venda: ${venda_maior}`)
  alert(`Menor venda: ${venda_menor}`)
  alert(`Média venda: ${venda_media}`)
  alert(`Quantidade de vendas: ${numero_vendas}`)
}

function ex03(){
  var produtos = []
  var quantidades = []

  var produto
  var quantidade
  var quantidadeTotalProdutos = 0
  var numeroProdutos = 0

  var IndexMaiorEstoque = 0
  var produtoBusca
  var indexProdutoBusca

  while(produto!=-1){
    produto = prompt(`Digite o nome do produto: `)
    if(produto!=-1){
      quantidade = parseInt(prompt(`Digite a quantidade em estoque: `))
    }
    if(produto!=-1){
      produtos.push(produto)
      quantidades.push(quantidade)
      quantidadeTotalProdutos += quantidade
      numeroProdutos++
    }
  }

  alert(`Foi inserido um total de: ${numeroProdutos}`)
  alert(`A quantidade de produtos em estoque é de: ${quantidadeTotalProdutos}`)
  for(i=0; i<quantidades; i++){
    if(quantidades[i] >= quantidade[IndexMaiorEstoque]){
      IndexMaiorEstoque = i
    }
  }
  alert(`O produto em que mais se encontra no estoque é o: ${produtos[IndexMaiorEstoque]}`)
  produtoBusca = prompt(`Digite o nome do produto a ser buscado: `)
  for(i=0; i<produtos.length; i++){
    if(produtos[i] == produtoBusca){
      indexProdutoBusca = i
      break
    }
  }
  alert(`Unidades em estoque: ${quantidades[indexProdutoBusca]}`)
}