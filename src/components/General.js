import React, { Component } from "react";

class General extends Component {
    render() {
        const { editGeneral, nameContent, emailContent, phoneContent } = this.props;

        return (
            <div>
                <p>{nameContent}</p>
                <p>{emailContent}</p>
                <p>{phoneContent}</p>
                <button onClick={editGeneral} type="button">Edit</button>
            </div>
        )
    }
}

export default General;