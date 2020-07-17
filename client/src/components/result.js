import React from 'react';

type Props = {
    header: String,
    result: String,
    onSuccess: Boolean
}

function Result(props) {
    let { header, result, onSuccess } = props

    return (
        <div style={{height: '150px'}}> 
        <label>
            <React.Fragment>
                <br></br>
                <br></br>
                <h5>{header}</h5>
           {onSuccess  &&   <h4 style={{height: '50px'}} class="header orange-text">{result}</h4> }
            </React.Fragment>
        </label>
        </div>
    )}

  export default Result;
