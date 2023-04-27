import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

function action(){
  console.log('click')
const cep = document.getElementById('cep').value


fetch(`https://viacep.com.br/ws/${cep}/json/`).then(r=>{
  return r.json()
}).then(res =>{
 console.log(res)
 document.getElementById('localidade').innerHTML = `A cidade: ${res.localidade}`
 document.getElementById('ddd').innerHTML = `O DDD: ${res.ddd}`
 document.getElementById('bairro').innerHTML = `O bairro: ${res.bairro}`
 document.getElementById('uf').innerHTML = `Estado: ${res.uf}`






})

}


 

  return (


    <div className='app'>
    <div className='consulta'>
    <input type="number" id='cep' placeholder='Insira o seu cep aqui...' />
    <input type="submit" value={'Consultar'} onClick={action} className='btn'/>
    </div>
    <div className='return'>
     <p id= 'localidade'></p>
     <p id='ddd'></p>
      <p id='bairro'></p>
     <p id='uf'></p>
     </div>

    </div>
  )
}

export default App
