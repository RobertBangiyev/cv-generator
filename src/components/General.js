import React, { Component } from "react";
import Info from "./Info";

class General extends Component {
    render() {
        const { nameContent, setNameContent, emailContent, setEmailContent, phoneContent, setPhoneContent } = this.props;
        return (
            <div>
                <h2>General Information</h2>
                <Info name="Name" content={nameContent} changeHandler={setNameContent}/>
                <Info name="Email" content={emailContent} changeHandler={setEmailContent} type='email'/>
                <Info name="Phone" content={phoneContent} changeHandler={setPhoneContent} />
            </div>
        )
    }
}

export default General;