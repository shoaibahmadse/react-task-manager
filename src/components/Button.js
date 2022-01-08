import React from 'react'
import Proptypes from 'prop-types'

const Button = ({color , text,onClick}) => {
    
    return (
        
        <div>
            <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
        </div>
    )
}
// Button.defaultProp={
//     color:'red',
// }
Button.propTypes={
    text:Proptypes.string,
    color:Proptypes.string,
}
export default Button
