import React from 'react'

import './index.scss'

class RadioButton extends React.Component{
    componentDidMount(){
        this.props.input.onChange(null)
    }
    changeSelected = (e) => {
        console.log(e.target.value)
        this.props.input.onChange(e.target.value)
    }
    render(){
        return(<div className="radio-button__container">
            <div className="radio-button__label text-right">{this.props.label}</div>
            <div className="radio-button__radios col-12 d-flex justify-content-around">
                {this.props.content.map((element, index) => 
                    <span key={index} className="col-md-6">
                        <label className="radio-button__radio-label">{element.label}</label>
                        <input className="" type="radio" name="radio" value={element.title} onClick={this.changeSelected}/>
                    </span>
                )}
            </div>
        </div>)
    }
}

export default RadioButton