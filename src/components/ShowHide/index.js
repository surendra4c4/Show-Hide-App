// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {show: false, hide: false}

  showOrHideFirstname = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  showOrHideLastname = () => {
    this.setState(prevState => ({hide: !prevState.hide}))
  }

  showFirstnameContainer = () => {
    const {show} = this.state

    return (
      show && (
        <div className="name-container">
          <p className="name">Joe</p>
        </div>
      )
    )
  }

  showLastnameContainer = () => {
    const {hide} = this.state

    return (
      hide && (
        <div className="name-container">
          <p className="name">Jonas</p>
        </div>
      )
    )
  }

  render() {
    const firstnameContainer = this.showFirstnameContainer()
    const secondnameContainer = this.showLastnameContainer()
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="container">
            <button
              className="button"
              type="button"
              onClick={this.showOrHideFirstname}
            >
              Show/Hide Firstname
            </button>
            {firstnameContainer}
          </div>
          <div className="container">
            <button
              className="button"
              type="button"
              onClick={this.showOrHideLastname}
            >
              Show/Hide Lastname
            </button>
            {secondnameContainer}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
