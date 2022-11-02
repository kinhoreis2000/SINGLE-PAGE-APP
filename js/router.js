
//oritentação a objetos
export class Router {

  
  routes = {} 


  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event ||window.event // Garantir que o evento será pego 
    event.preventDefault() //não atualizar a página ao clicar no link

   console.log(event)

    window.history.pushState({},"", event.target.href) //(coloque no seu histórico que eu estou mudando de página)essa linha a gente faz o pathname mudar
      this.handle() 
  
  }
  
  
  handle() {
    
    const {pathname} = window.location // isso aqui pega qual é o pathname da página (/home, /, /exploration)
  
    const route = this.routes[pathname] || this.routes[404] //vai pegar qual é a página atual e colocar na variavel route
    
    fetch(route)
    .then(function (data) {return data.text()})
    .then(html => document.querySelector(".spa-space").innerHTML = html)
    
    if(pathname == '/'){

      document.body.classList.remove("exploration", "universe")

    } else 
    if (pathname == '/exploration') {
      document.body.classList.add("exploration")
      document.body.classList.remove("universe")

    }
    if (pathname == '/universe') {
      document.body.classList.add("universe")
      document.body.classList.remove("exploration")


    }else {
    }
  }


}
