import React from 'react';
import Result from './result'

type Props = {
    title: String,
    placeholder: String,
    handleInput: Function,
}

class InputField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', onSuccess: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clear        = this.clear.bind(this)
    }

    clear() {
      this.setState({
        value: '',
        onSuccess: false
      });

    }
  
    handleChange(event) {
      this.setState({value: event.target.value, onSuccess: false
      });

    }
  
    handleSubmit(event)  {
      event.preventDefault();
       let { handleInput } = this.props
       let valid = handleInput(this.state.value)
    
        console.log(valid)
        this.setState({onSuccess: valid })
    }
  
    render() {
        let {title, placeholder} = this.props
        let { onSuccess } = this.state
      return (
        <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
           <h5>{title}</h5>
            <input 
            placeholder={placeholder} 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            onFocus={this.clear} />
            </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      <Result header="Result:" result={this.state.value} onSuccess={onSuccess}/> 
        </React.Fragment>
      );
    }
  }

  export default InputField;