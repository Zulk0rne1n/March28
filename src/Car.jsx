import React, { Component } from 'react'

export default class Car extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.color}</h2>
        <p>{this.props.type}</p>
        <p>{this.props.registration}</p>
        <p>{this.props.capacity}</p>
      </div>
    )
  }
}
