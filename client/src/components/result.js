import React from 'react';

type Props = {
    header: String,
    result: String
}

function Result(props) {
    let { header, result } = props
    if(result == '')
    return 

    return (
        <div class="center"> 
        <label>
            <React.Fragment>
                <br></br>
                <br></br>
                <h5 class="center">{header}</h5>
                <h4 class="header center orange-text">{result}</h4>
            </React.Fragment>
        </label>
        </div>
    )}

  export default Result;
