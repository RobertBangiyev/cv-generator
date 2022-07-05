import React, { Component } from "react";

class Education extends Component {
    render() {
        const { schoolName, major, studyDate, id, removeEducation, editEducation } = this.props;

        return (
            <div>
                <p>{schoolName}</p>
                <p>{major}</p>
                <p>{studyDate}</p>
                <button onClick={() => removeEducation(id)} type="button">Delete</button>
                <button onClick={() => editEducation(id)} type="button">Edit</button>
            </div>
        )
    }
}

export default Education;