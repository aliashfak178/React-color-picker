import React from 'react';
import PropTypes from 'prop-types';

class Colors extends React.Component{
        static propTypes ={
            colorsNames:PropTypes.array.isRequired
        }
    render(){
        return(
            <div className="row">
                {this.props.colorsNames.map((color)=>(
                    <div className="col" key={color} style={{backgroundColor:color}}>
                        {color}
                    </div>
                ))}
            </div>
        )
    }
}
export default Colors;