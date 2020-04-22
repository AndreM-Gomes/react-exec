import React,{Component} from 'react';
import TabelaUnidades from './unidades/TabelaUnidades'
import UnidadeRepository from './unidades/UnidadeRepository'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      unidades:[
        {
          id:1,
          nome:'Vila Mariana'
        },
        {
          id:2,
          nome:'Santa Cecília'
        },
        {
          id:3,
          nome:'Barra Funda'
        },
      ],
      modal:{
        visivel:false
      }
    }
  }
  componentDidMount(){
  }
  mostrarDetalhes= (e)=>{
    this.setState((state,props)=>({
      modal:{visivel:true}
    }))
  }
  esconderDetalhes= (e)=>{
    this.setState((state,props)=>({
      modal:{visivel:false}
    }))
  }
  render(){
    return (
      <>
      <div className="container">
        <div className="side">
          <ul>
            <li><a href="#">Unidades</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Ordens de Serviço</a></li>
            <li><a href="#">Funcionários</a></li>
          </ul>
        </div>
        <div className="main">
          <div className="top-bar">
            Unidades
          </div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th colSpan="2" >Nome</th>
              </tr>
            </thead>
            <tbody>
             <tr>
                <td></td>
                <td><input type="text" id="nome" value=""/></td>
                <td><button>Cadastrar</button></td>
              </tr>
              {this.state.unidades.map(unidade=>{
                return(
                  <tr key={unidade.id}>
                    <td>{unidade.id}</td>
                    <td>{unidade.nome}</td>
                    <td><button onClick={this.mostrarDetalhes}>Detalhes</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="modal" style={{
            transition:'ease-in 0.1s',
            visibility:this.state.modal.visivel?'visible':'hidden',
            opacity:this.state.modal.visivel?'1':'0'
            }}>
            Estoque
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Fita isolante</td>
                  <td>Fita isolante 3M anti-chamas</td>
                  <td>12</td>
                  <td>Perfeito Estado</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Furadeira</td>
                  <td>Furadeira sds com martelete</td>
                  <td>3</td>
                  <td>Danificado</td>
                </tr>
              </tbody>
            </table>
            <button onClick={this.esconderDetalhes}>x</button>
          </div>
        </div>
      </div>
      </>
    );
  }
  
}

export default App;
