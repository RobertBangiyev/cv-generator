import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";

class Preview extends Component {
    render() {
        const { nameContent, emailContent, phoneContent, educations, experiences } = this.props;

        return (
            <div className='preview'>
                <h2>{nameContent}</h2>
                <p>{emailContent}</p>
                <p>{phoneContent}</p>
                <h2>Education</h2>
                {educations.map((education) => {
                    return <Education preview='true' key={education.id} id={education.id} schoolName={education.schoolName} major={education.major} studyDate={education.studyDate} />
                })}
                <h2>Experience</h2>
                {experiences.map((experience) => {
                    return <Experience preview='true' key={experience.id} id={experience.id} companyName={experience.companyName} posTitle={experience.posTitle} description={experience.description} startDate={experience.startDate} endDate={experience.endDate} />
                })}
            </div>
        )
    }
}

export default Preview;