import React from 'react';
import InputField from '../components/inputField'

type Props = {
    header : String,
    title: String,
    placeholder: String,
    handleInput: Function,
    cssClass: String
}

function ConverterFunction(props) {
    let { cssClass, header, title, placeholder, handleInput} = props
  return (
      <div class={cssClass}>
        <div class="icon-block">
          <h1 class="header center orange-text">{header}</h1>
            <InputField title={title} placeholder={placeholder} handleInput={handleInput}/>
            </div>
      </div>
  )}

  export default ConverterFunction;
