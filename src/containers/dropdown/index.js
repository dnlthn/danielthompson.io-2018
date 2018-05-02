import React, { Component } from 'react'

export default class Dropdown extends Component {
  state = {
    value: '',
  }
  componentDidMount = () => {
    this.setState({
      value: this.props.initialValue,
    })
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      value,
    })
  }

  render() {
    return (
      <span>
        {this.props.children({
          value: this.state.value,
          handleChange: this.handleChange,
        })}
      </span>
    )
  }
}
