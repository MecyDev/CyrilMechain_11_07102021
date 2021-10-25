import { Component } from 'react'

import './carrousel.css'

class Carrousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCount: 0,
      picture: this.currentCount,
    }
  }

  handleClick(direction) {
    if (direction === 'left') {
      if (this.state.currentCount === 0) {
        return this.setState({ currentCount: this.props.pictures.length - 1 })
      }
      return this.setState({ currentCount: this.state.currentCount - 1 })
    }
    if (direction === 'right') {
      if (this.state.currentCount === this.props.pictures.length - 1) {
        return this.setState({ currentCount: 0 })
      }
      return this.setState({ currentCount: this.state.currentCount + 1 })
    }
  }

  render() {
    return (
      <div className="carrousel">
        {this.props.pictures.length > 1 && (
          <div className="navigation">
            <button
              type="button"
              className="nav nav--left"
              id="left"
              aria-label="Retour à l'image précédente."
              onClick={() => this.handleClick('left')}
            ></button>
            <button
              type="button"
              className="nav nav--right"
              id="right"
              aria-label="Aller à l'image suivante."
              onClick={() => this.handleClick('right')}
            ></button>
          </div>
        )}
        <figure>
          <img
            src={this.props.pictures[this.state.currentCount]}
            alt={this.props.title}
          />
        </figure>
        <span>{`${this.state.currentCount + 1}/${
          this.props.pictures.length
        }`}</span>
      </div>
    )
  }
}

export default Carrousel
