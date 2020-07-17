import React from 'react';

type Props = {
    header: String,
    result: String,
    onSuccess: Boolean
}

function Result(props) {
    let { header, result, onSuccess } = props

    return (
        <div style={{height: '100px'}} class="center"> 
        <label>
            <React.Fragment>
                <br></br>
                <br></br>
                <h5 class="center">{header}</h5>
           {onSuccess  &&   <h4 style={{height: '100px'}} class="header center orange-text">{result}</h4> }
            </React.Fragment>
        </label>
        </div>
    )}

  export default Result;
