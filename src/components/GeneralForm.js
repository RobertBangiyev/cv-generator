import React, { Component } from "react";
import Info from "./Info";

class GeneralForm extends Component {
    render() {
        const { saveGeneral, editingGeneral, nameContent, setNameContent, emailContent, setEmailContent, phoneContent, setPhoneContent } = this.props;
        return (
            <div className="general-form">
                <h2>General Information</h2>
                {editingGeneral && <Info name="Name" content={nameContent} changeHandler={setNameContent}/>}
                {editingGeneral && <Info name="Email" content={emailContent} changeHandler={setEmailContent} type='email'/>}
                {editingGeneral && <Info name="Phone" content={phoneContent} changeHandler={setPhoneContent} />}
                {editingGeneral && <button onClick={saveGeneral} type="button">Save</button>}
            </div>
        )
    }
}

export default GeneralForm;