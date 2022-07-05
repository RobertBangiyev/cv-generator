import React, { Component } from "react";
import Info from "./Info";
import uniqid from 'uniqid';

class EducationForm extends Component {

    render() {
        const { schoolName, setSchoolName, major, setMajor, studyDate, setStudyDate, addEducation, saveEducation, editingEducation } = this.props;

        return (
            <div>
                <h2>Education</h2>
                {editingEducation && <Info name="School Name" content={schoolName} changeHandler={setSchoolName}/>}
                {editingEducation && <Info name="Field of Study" content={major} changeHandler={setMajor}/>}
                {editingEducation && <Info name="Study Date" content={studyDate} changeHandler={setStudyDate} type='date'/>}
                {editingEducation && <button onClick={() => {saveEducation({id:uniqid(), schoolName, major, studyDate})}} type="button">Save</button>}
                {!editingEducation && <button onClick={addEducation} type="button">Add new</button>}
            </div>
        )
    }
}

export default EducationForm;