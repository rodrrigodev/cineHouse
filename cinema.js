
const catalogo = require('./database/database.json')
  


  const adicionarFilme = (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) => {
  
    catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz})}



  const buscarFilme = (codigo) => {
  
  let resultado = catalogo.find(filme => filme.codigo == codigo)
    return resultado
  
  }
  
  function buscarfilme(codigo) {
  
    for(var i=0; i<catalogo.length; i++){
      if(catalogo[i].codigo == codigo){
        return catalogo[i]
      }
    }}
  
  
  // const alterarStatusEmCartaz = (codigo) =>{
  
  //   let resultado
  
  //   resultado = catalogo.find(filmeEmCartaz => filmeEmCartaz.codigo == codigo)
  
  // resultado.emCartaz = !resultado.emCartaz
  //   return resultado
    
  // }

  const listarTodosOsFilmes = () =>{

    for(let i=0; i<catalogo.length; i++){
     console.log('Filme: ' + catalogo[i].titulo + ' ' + 'Duração: ' +catalogo[i].duracao + ' ' + 'Lançamento: ' + catalogo[i].anoDeLancamento)
    }
  }

  const listarFilmesEMCartaz = () => {
    
    for(let i=0; i<catalogo.length; i++){
      if(catalogo[i].emCartaz){
        console.log(catalogo[i].titulo)
      }
    }
  }

  const alterarStatusEmCartaz = (numero, buscar) =>{

    let info = buscar(numero)

    info.emCartaz = !info.emCartaz
    return info
    
  }

