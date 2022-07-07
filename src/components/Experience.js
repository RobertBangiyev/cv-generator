import React, { Component } from "react";

class Experience extends Component {
    render() {
        const { id, companyName, posTitle, description, startDate, endDate, editExperience, removeExperience, preview } = this.props;
        return (
            <div className="experience">
                <p>{companyName}</p>
                <p>{posTitle}</p>
                <p>{description}</p>
                <p>{startDate}</p>
                <p>{endDate}</p>
                {!preview && <button onClick={() => removeExperience(id)} type="button">Delete</button>}
                {!preview && <button onClick={() => editExperience(id)} type="button">Edit</button>}
            </div>
        )
    }
}

export default Experience;