import { Component } from 'react'

import './profil.css'

class Profil extends Component {
  render() {
    return (
      <div className="profil">
        <p className="name">{this.props.name}</p>
        <p className="photo">
          <img src={this.props.photo} alt={`Profil de ${this.props.name}`} />
        </p>
      </div>
    )
  }
}

export default Profil
