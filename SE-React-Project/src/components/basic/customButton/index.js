import React from 'react'

import './index.scss'

export default props => {
    return (
        <button className="custom-button__container btn btn-success form-control mt-1 mb-1" onClick={props.onClick} type={props.type ? props.type : "submit"}>
            {props.text}
        </button>
    )
}