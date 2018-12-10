import React from 'react'

export default props => (
    <input className='form-control' {...props.input} type={props.type} readOnly={props.readOnly} placeholder={props.placeholder}/>
)