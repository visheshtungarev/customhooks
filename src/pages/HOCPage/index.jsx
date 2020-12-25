import React from 'react';
import withLogger from "../../HOC/withLogger/index";

const HOCContainer = (props) =>{
    return(
        <div>
            <h1>This HOC page </h1>
        </div>
    )
}

export default withLogger( HOCContainer,"#456788");