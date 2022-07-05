import React, { Component } from "react";

class Experience extends Component {
    render() {
        const { id, companyName, posTitle, description, startDate, endDate, editExperience, removeExperience } = this.props;
        return (
            <div>
                <p>{companyName}</p>
                <p>{posTitle}</p>
                <p>{description}</p>
                <p>{startDate}</p>
                <p>{endDate}</p>
                <button onClick={() => removeExperience(id)} type="button">Delete</button>
                <button onClick={() => editExperience(id)} type="button">Edit</button>
            </div>
        )
    }
}

export default Experience;