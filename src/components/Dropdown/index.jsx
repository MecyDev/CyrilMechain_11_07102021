import { Component } from 'react'

import './dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classNameDropContent: 'close',
      classNameArrow: '',
    }
  }

  handleClick = () => {
    if (this.state.classNameDropContent === 'close') {
      this.setState({
        classNameDropContent: '',
        classNameArrow: 'rotate',
      })
    } else {
      this.setState({
        classNameDropContent: 'close',
        classNameArrow: '',
      })
    }
  }

  render() {
    return (
      <div className="dropdown-container">
        <div className="dropdown" onClick={this.handleClick}>
          <h2>{this.props.title}</h2>
          <span className={`arrow ${this.state.classNameArrow}`}></span>
        </div>
        <div className={`dropdown-content ${this.state.classNameDropContent}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dropdown
