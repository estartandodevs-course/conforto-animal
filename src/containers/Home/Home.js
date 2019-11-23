import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {HomeContainer} from './HomeStyle'
import Menu from '../../components/menu/Menu.js'

export default class Home extends Component {

state = {
  openMenu: false
}

toggleMenu = () =>{
  this.setState({openMenu: !this.state.openMenu})
}
  render() {
  return <div className=''>
    <button onClick={this.toggleMenu}>Menu</button>
    <Menu
    show={this.state.openMenu}
    close={this.toggleMenu}
    />
    </div>
  }
}