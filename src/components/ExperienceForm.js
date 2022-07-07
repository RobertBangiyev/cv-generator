import React, { Component } from "react";
import Info from "./Info";
import uniqid from 'uniqid';

class ExperienceForm extends Component {
    render() {
        const { companyName, setCompanyName, posTitle, setPosTitle, description, setDescription, startDate, setStartDate, endDate, setEndDate, editingExperience, saveExperience, addExperience } = this.props;

        return (
            <div className="experience-form">
                <h2>Experience</h2>
                {editingExperience && <Info name='Company Name' content={companyName} changeHandler={setCompanyName}/>}
                {editingExperience && <Info name='Position Title' content={posTitle} changeHandler={setPosTitle}/>}
                {editingExperience && <Info name='Position Description' content={description} changeHandler={setDescription}/>}
                {editingExperience && <Info name='Start Date' content={startDate} changeHandler={setStartDate} type='date'/>}
                {editingExperience && <Info name='End Date' content={endDate} changeHandler={setEndDate} type='date'/>}
                {editingExperience && <button onClick={() => {saveExperience({id:uniqid(), companyName, posTitle, description, startDate, endDate})}} type="button">Save</button>}
                {!editingExperience && <button onClick={addExperience} type="button">Add new</button>}
            </div>
        )
    }
}

export default ExperienceForm;