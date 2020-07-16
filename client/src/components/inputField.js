import React from 'react';

type Props = {
    title: String,
    placeholder: String,
}

class InputField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', clicked: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.setState({clicked: !this.state.clicked})
        event.preventDefault();
    }
  
    render() {
        let {title, placeholder} = this.props
        let { clicked } = this.state
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
            { clicked && <React.Fragment>
                <br></br>
                <br></br>
                <h5 class="center">Result:</h5>
                <h4 class="header center orange-text">{this.state.value}</h4>
            </React.Fragment>}
        </label>
        </div>
        </React.Fragment>
      );
    }
  }

  export default InputField;