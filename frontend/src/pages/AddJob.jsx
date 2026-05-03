import { useState } from "react";
import Page from "../components/Page";
import TextField from "../components/form/TextField";
import Textarea from "../components/form/Textarea";

export default function AddJob(){
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [expectedSalary, setExpectedSalary] = useState("");
    const [workArrangement, setWorkArrangement] = useState("");
    
    const [employerName, setEmployerName] = useState("");
    const [employerURL, setEmployerURL] = useState("");

    const [sourceType, setSourceType] = useState("direct");

    const [recruiterName, setRecruiterName] = useState("");
    const [recruiterURL, setRecruiterURL] = useState("");

    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactLinkedIn, setContactLinkedIn] = useState("");

    return (
        <Page title="Add Job">
        <form>
            <TextField label="Job Title" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
            <Textarea label="Job Description" id="jobDescription" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} required />
            <TextField label="Job Location" id="jobLocation" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} required />
            <TextField label="Job Type" id="jobType" value={jobType} onChange={(e) => setJobType(e.target.value)} required />
            <TextField label="Expected Salary" id="expectedSalary" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} required />
            <TextField label="Work Arrangement" id="workArrangement" value={workArrangement} onChange={(e) => setWorkArrangement(e.target.value)} required />
            <button type="submit">Add Job</button>
        </form>
    </Page>
    )
}