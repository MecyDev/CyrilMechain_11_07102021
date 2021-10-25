import { Component } from 'react'
import { Link } from 'react-router-dom'

import './thumb.css'

class Thumb extends Component {
  render() {
    return (
      <Link to={`/details/${this.props.id}`}>
        <div className="card">
          <p>
            <img src={this.props.cover} alt="" />
          </p>
          <h2>{this.props.title}</h2>
        </div>
      </Link>
    )
  }
}

export default Thumb
