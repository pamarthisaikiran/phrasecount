import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    input: '',
  }

  onUserInput = event => {
    this.setState({input: event.target.value})
  }
  render() {
    const {input} = this.state

    return (
      <div className="main">
        <div className="text-containe">
          <h1 className="head">Calculate the Letters you enter</h1>
          <div className="lab-container">
            <label className="lab" htmlfor="textId">
              Enter the phrase
            </label>
            <input
              placeholder="Enter the Pharase"
              className="inp"
              type="text"
              id="textId"
              onChange={this.onUserInput}
            />
          </div>
          <p className="button">No.of letters {input.length} </p>
        </div>
        <div>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
