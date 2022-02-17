import React, {Component} from 'react';
import './App.css';
import Navegation from './Navegation';
import Inicio from './Inicio';
import CardList from './CardList';
import Contatos from './Contatos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'inicio',
      aba: 'principal'
    }
  }

  onRouteChange = (route) => {
    if (route === 'inicio') {
      this.setState({ aba:'principal' })
    } else if (route === 'contatoRoute'){
      this.setState({ aba: 'contatoAba' })
    } else if (route === 'producaoRoute'){
      this.setState({ aba: 'producaoAba' })
    }
  }

 render() {
  const {route, aba} = this.state; 
  if (aba === "principal"){
      return (
        <div className='App'>
          <Inicio onRouteChange={this.onRouteChange}/>
        </div>
      )
    } else if ( aba === 'contatoAba'){
      return (
        <div className='App'>
          <Navegation onRouteChange={this.onRouteChange}/>
          <Contatos onRouteChange={this.onRouteChange}/>
        </div>
      )
    } else if ( aba === 'producaoAba') {
      return (
        <div className='App'>
          <Navegation onRouteChange={this.onRouteChange}/>
          <CardList onRouteChange={this.onRouteChange}/>
        </div>
      )
    }
  }
}

export default App;
