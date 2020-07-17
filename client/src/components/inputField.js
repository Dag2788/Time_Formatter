import React from 'react';

type Props = {
    title: String,
    placeholder: String,
    handleInput: Function,
    successfulParse: Boolean
}

class InputField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', clicked: false, successfulParse: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event)  {
      event.preventDefault();
       let { handleInput } = this.props
        let valid =  handleInput(this.state.value)
        console.log(valid)
        this.setState({successfulParse: valid, clicked: !this.state.clicked})

    }
  
    render() {
        let {title, placeholder} = this.props
        let { clicked, successfulParse } = this.state
      return (
        <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
          <h5 class="center">{title}</h5>
            <input placeholder={placeholder} type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div class="center"> 
        <label>
            { clicked && successfulParse && <React.Fragment>
                <br></br>
                <br></br>
                <h5 class="center">Result:</h5>
                <h4 class="header center orange-text">{this.state.value}</h4>
            </React.Fragment>}
        </label>
        <label>
            { clicked && !successfulParse && <React.Fragment>
                <br></br>
                <br></br>
                <h5 class="center">Oops!</h5>
                <h4 class="header center orange-text">We were not able convert {this.state.value}</h4>
            </React.Fragment>}
        </label>
        </div>
        </React.Fragment>
      );
    }
  }

  export default InputField;