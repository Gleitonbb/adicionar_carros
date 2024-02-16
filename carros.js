const tipoMilitar = document.querySelector("#f_tipomilitar")
const tiponormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagens")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const botao = document.querySelector("#botaoadd")

let a_carros = []

const quemRemover = (quem) =>{
   a_carros = a_carros.filter((upu)=>{
         return upu.nome != quem
    })

}

tiponormal.addEventListener("click",(evt)=>{
    f_blindagem.value = 0
    f_municao.value = 0
      f_blindagem.setAttribute("disabled","disabled")
      f_municao.setAttribute("disabled","disabled")
})
tipoMilitar.addEventListener("click",(evt)=>{
     f_nome.value = ""
     f_portas.value = 0
     f_blindagem.value = 0
     f_municao.value = 0
     f_blindagem.removeAttribute("disabled")
     f_municao.removeAttribute("disabled")
})

const GerenciadorDeCarros = () =>{
     carros.innerHTML = ""
    a_carros.forEach((c)=>{
     const Div = document.createElement("div")
     Div.setAttribute("class","carro")
     Div.setAttribute("data-nome",c.nome)

     const botaorem = document.createElement("button")
     botaorem.addEventListener("click",(evt)=>{
     const apontarElemento = evt.target.parentNode.dataset.nome
     console.log(apontarElemento)
     quemRemover(apontarElemento)
     GerenciadorDeCarros()
       
     })
      Div.innerHTML = `Nome:${c.nome}<br/>`
      Div.innerHTML += `Portas:${c.portas}<br/>`
      Div.innerHTML += `Blindagem:${c.blindagem}<br/>`
      Div.innerHTML += `Munição:${c.munic0912ao}`
      botaorem .innerHTML = "remover"
      carros.appendChild(Div)
      Div.appendChild(botaorem)
      
      
    })
}
botao.addEventListener("click",(evt)=>{
    if(tiponormal.checked){
        const c = new militar(f_nome.value,f_portas.value)
        a_carros.push(c)
    }else{
        const c = new militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
        a_carros.push(c)
        
    }
    GerenciadorDeCarros()
})

class carro{
    constructor(nome,portas){
     this.nome = nome
     this.portas = portas
     this.ligado = false
     this.vel = 0
     this.cor = undefined
    }
    ligar=function(){
        this.ligado = true
    }
    ligar=function(){
        this.ligado = false
    }
    setCor=function(cor){
        this.cor = cor
    }
}

class militar extends carro{
    constructor(nome, portas, blindagem, municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}
 const c1 = new carro("Normal", 4)
 c1.ligar()
 c1.setCor("preto")

 const c2 = new militar("Lutador",1,100,50)
 c2.atirar()
 c2.atirar()
 c2.atirar()
 c2.atirar()
 c2.atirar()

 console.log(`Nome:${c1.nome} Portas:${c1.portas} Ligado:${(c1.ligado?"sim":"não")} Velocidade:${c1.vel} Cor:${c1.cor}`)

 console.log(`Nome:${c2.nome} Portas:${c2.portas} Ligado:${(c2.ligado?"sim":"não")} Velocidade:${c2.vel} Cor:${c2.cor} Blindagem: ${c2.blindagem} Atitar:${c2.municao}`)
 