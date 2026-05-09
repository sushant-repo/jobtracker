import { useRef, useState, useEffect } from 'react';
import Page from '@/components/layout/Page';
import TextField from '@/components/form/TextField';
import Textarea from '@/components/form/Textarea';
import FormElement from '@/components/form/FormElement';
import Select from '@/components/form/Select';
import AmountField from '../components/form/AmountField';
import DateField from '../components/form/DateField';
import Form from '../components/form/Form';

export default function AddJob() {
  const [job, setJob] = useState({
    title: '',
    description: '',
    source: '',
    url: '',
    postedSalary: {
      amount: '',
      frequency: 'ph',
    },
    expectedSalary: {
      amount: '',
      frequency: 'ph',
    },
    appliedOn: '',
    status: '',
    category: '',
    workArrangement: '',
  });

  const [company, setCompany] = useState({
    name: '',
    url: '',
    location: '',
  });

  const recruiter ={
    name: '',
    email: '',
    phone: '',
    title: '',
    profileURL: '',
  };

  async function getApplicationStatuses(){
    const result  = await fetch("/api/applicationstatuses");
    console.log({result});
  }

  useEffect( () => {
    async function getJobs(){
      const result = await fetch("/api/jobs");
      console.log(await result.text());

    }

    getJobs();
    getApplicationStatuses();
  },[]);

  const [recruiters, setRecruiters] = useState([recruiter]);

  function handleSubmit(e){

        console.log("save called");

  }

  function handleAmountChange({amount, frequency, name}){
setJob((prev) => ({...prev, [name]: {
    amount,
    frequency
}}));
  }

  function addRecruiter(e) {
    e.preventDefault();
    setRecruiters((prev) => [...prev, recruiter]);
  }

  function updateRecruiter(index, field, value) {
    setRecruiters((prev) =>
      prev.map((rec, i) =>
        i === index ? { ...rec, [field]: value } : rec
      )
    );
  }

  function removeRecruiter(index) {
    setRecruiters((prev) => prev.filter((_, i) => i !== index));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target, name, value);
    setJob((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Page title="Add Job">
      <Form onSubmit={handleSubmit} >
        <div className="row">
          <div className="col">
            <TextField
              label="Title"
              id="title"
              value={job.title}
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Textarea
              label="Job Description"
              id="description"
              rows="6"
              value={job.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <TextField
              label="Location"
              placeholder="Eg. Melbourne, Australia"
              id="location"
              value={job.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <Select
              id="type"
              label="Type"
              value={job.type}
              onChange={handleChange}
              required
              options={[
                { value: 'full-time', label: 'Full-time' },
                { value: 'part-time', label: 'Part-time' },
                { value: 'contract', label: 'Contract' },
              ]}
            />
          </div>
          <div className="col">
            <Select
              id="workArrangement"
              label="Work Arrangement"
              value={job.workArrangement}
              onChange={handleChange}
              required
              options={[
                { value: 'remote', label: 'Remote' },
                { value: 'hybrid', label: 'Hybrid' },
                { value: 'onsite', label: 'On-site' },
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AmountField
              label="Posted Salary"
              id="postedSalary"
              value={job.postedSalary}
              onChange={handleAmountChange}
            />
          </div>
          <div className="col">
            <AmountField
              label="Expected Salary"
              id="expectedSalary"
              value={job.expectedSalary}
              onChange={handleAmountChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <TextField
              label="Source"
              id="source"
              value={job.source}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <TextField
              label="URL"
              id="url"
              value={job.url}
              onChange={handleChange}
              required
            />
          </div>
        </div>

<div className="row">
            <div className="col-3 col-xs-12">
                <DateField label="Applied On" id="appliedOn" value={job.appliedOn} onChange={handleChange} />
                </div>
                </div>

                <div className="row my-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Company Details</h5>
                                <TextField label="Company Name" id="companyName" value={company.name} onChange={(e) => setCompany(prev => ({ ...prev, name: e.target.value }))} required />
                                <div className="row">
                                    <div className="col">
                                        <TextField label="Company URL" id="companyURL" value={company.url} onChange={(e) => setCompany(prev => ({ ...prev, url: e.target.value }))} />
                                    </div>
                                    <div className="col">
                                        <TextField label="Company Location" id="companyLocation" value={company.location} onChange={(e) => setCompany(prev => ({ ...prev, location: e.target.value }))} />
                                    </div>
                                </div>

                                <div className="spacer my-3"></div>
                                
                                <div className="card-footer d-flex flex-column">
                                    <div className="row">
                                        <div className="col d-flex justify-content-between">
                                            <h5 className="card-title">Recruiter Details</h5>
                                            <button className="btn btn-primary" onClick={addRecruiter}> Add Recruiter </button>
                                        </div>
                                    </div>
{ recruiters.map((rec, index) => (
    <div key={index} className="row mb-3 border-bottom pb-3">
        <div className="col">
            <div className="row">
                <div className="col">
                                            <TextField label="Name" id="recruiterName" value={rec.name} onChange={(e) => updateRecruiter(index, 'name', e.target.value)} required />
                                            </div>
                                        <div className="col">
                                            <TextField label="Title" id="recruiterTitle" value={rec.title} onChange={(e) => updateRecruiter(index, 'title', e.target.value)} />
                                            
                                            </div>
            </div>
            <div className="row">
                                        <div className="col">
                                            <TextField label="Email" id="recruiterEmail" value={rec.email} onChange={(e) => updateRecruiter(index, 'email', e.target.value)} />
                                        </div>
                                        <div className="col">
                                            <TextField label="Phone" id="recruiterPhone" value={rec.phone} onChange={(e) => updateRecruiter(index, 'phone', e.target.value)} />
                                        </div>
                                        <div className="col">
                                            <TextField label="Profile URL" id="recruiterProfileURL" value={rec.profileURL} onChange={(e) => updateRecruiter(index, 'profileURL', e.target.value)} />
                                        </div>
            </div>
            {recruiters.length > 1 && (
            <div className="row mt-2">
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={() => removeRecruiter(index)}> Remove </button>
                </div>
            </div>
            )}
                                    </div>
                                    </div>

))}
</div>
</div>
                        </div>
                    </div>
                    </div>
        

        <button type="submit" className="btn btn-success">Save</button>
      </Form>
    </Page>
  );
}
