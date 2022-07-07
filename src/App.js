import './styles/App.css';
import Header from './components/Header';
import { useState } from 'react';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import GeneralForm from './components/GeneralForm';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Preview from './components/Preview';
import General from './components/General';

function App() {

  const [preview, setPreview] = useState(false);
  const [editingGeneral, setEditingGeneral] = useState(true);
  const [editingEducation, setEditingEducation] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [nameContent, setNameContent] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [phoneContent, setPhoneContent] = useState('');
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [schoolName, setSchoolName] = useState('');
  const [major, setMajor] = useState('');
  const [studyDate, setStudyDate] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [posTitle, setPosTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addEducation = () => {
    setEditingEducation(true);
  }

  const saveEducation = (education) => {
    setEducations(educations.concat(education));
    setSchoolName('');
    setMajor('');
    setStudyDate('');
    setEditingEducation(false);
  }

  const removeEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  }

  const editEducation = (id) => {
    setEditingEducation(true);
    const found = educations.find((education) => education.id === id);
    setSchoolName(found.schoolName);
    setMajor(found.major);
    setStudyDate(found.studyDate);
    setEducations(educations.filter((education) => education.id !== id));
  }

  const addExperience = () => {
    setEditingExperience(true);
  }

  const saveExperience = (experience) => {
    setExperiences(experiences.concat(experience));
    setCompanyName('');
    setPosTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setEditingExperience(false);
  }

  const removeExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  }

  const editExperience = (id) => {
    setEditingExperience(true);
    const found = experiences.find((experience) => experience.id === id);
    setCompanyName(found.companyName);
    setPosTitle(found.posTitle);
    setDescription(found.description);
    setStartDate(found.startDate);
    setEndDate(found.endDate);
    setExperiences(experiences.filter((experience) => experience.id !== id));
  }

  const editGeneral = () => {
    setEditingGeneral(true);
  }

  const saveGeneral = () => {
    setEditingGeneral(false);
  }

  return (
    <div className="App">
      <Header />
      <form action="">
        <GeneralForm editGeneral={editGeneral} saveGeneral={saveGeneral} editingGeneral={editingGeneral} nameContent={nameContent} setNameContent={setNameContent} emailContent={emailContent} setEmailContent={setEmailContent} phoneContent={phoneContent} setPhoneContent={setPhoneContent}/>
        {!editingGeneral && <General editGeneral={editGeneral} nameContent={nameContent} emailContent={emailContent} phoneContent={phoneContent} />}
        <EducationForm saveEducation={saveEducation} editingEducation={editingEducation} schoolName={schoolName} setSchoolName={setSchoolName} major={major} setMajor={setMajor} studyDate={studyDate} setStudyDate={setStudyDate} addEducation={addEducation} />
        {educations.map((education) => {
          return <Education key={education.id} id={education.id} schoolName={education.schoolName} major={education.major} studyDate={education.studyDate} removeEducation={removeEducation} editEducation={editEducation}/>
        })}
        <ExperienceForm preview='false' removeExperience={removeExperience} editExperience={editExperience} editingExperience={editingExperience} saveExperience={saveExperience} companyName={companyName} setCompanyName={setCompanyName} posTitle={posTitle} setPosTitle={setPosTitle} description={description} setDescription={setDescription} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} addExperience={addExperience} />
        {experiences.map((experience) => {
          return <Experience preview='false' key={experience.id} id={experience.id} companyName={experience.companyName} posTitle={experience.posTitle} description={experience.description} startDate={experience.startDate} endDate={experience.endDate} removeExperience={removeExperience} editExperience={editExperience}/>
        })}
        {!preview && <button className='special-btn' onClick={() => setPreview(true)} type='button'>Show preview</button>}
        {preview && <button className='special-btn' onClick={() => setPreview(false)} type='button'>Hide preview</button>}
      </form>
      {preview && <Preview nameContent={nameContent} emailContent={emailContent} phoneContent={phoneContent} educations={educations} experiences={experiences} />}
      {preview && <button className='special-btn' onClick={() => window.print()} type='button'>Save pdf</button>}
      <Footer />
    </div>
  );
}

export default App;