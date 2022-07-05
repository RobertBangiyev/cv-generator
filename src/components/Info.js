import React, { Component } from "react";

class Info extends Component {
    render() {
        const { name, content, changeHandler, type } = this.props;

        return (
            <div>
                <label htmlFor="generalInfo">{name}</label>
                <input onChange={(e) => changeHandler(e.target.value)} value={content} type={type} />
            </div>
        )
    }
}

export default Info;