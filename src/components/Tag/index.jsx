import { Component } from 'react'

import './tag.css'

class Tag extends Component {
  render() {
    return <span className="tag">{this.props.value}</span>
  }
}

export default Tag
