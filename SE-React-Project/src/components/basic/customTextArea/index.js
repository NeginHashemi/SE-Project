import React from 'react'

import "./index.scss"

const CustomTextArea = props => {
    return (
        <div className="custom-text-area__container">
            <div className="custom-text-area__button-container form-group">
                {props.label ? <div className="custom-text-area__label text-right col-12">{props.label}</div> : null}
                <textarea className="custom-text-area__text-area form-control" {...props.input} placeholder={props.placeholder ? props.placeholder : null} type={props.type ? props.type : "text"} ></textarea>
            </div>
            {props.meta ? renderError(props.meta) : null}
        </div>
    )
}

const renderError = ({touched, error}) => {
    if(touched && error){
        return <div className="custom-text-area__error form-control text-right small mb-3">{error}</div>
    }
}

export default CustomTextArea