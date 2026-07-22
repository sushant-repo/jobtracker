import { useRef, useState, useEffect, useContext } from 'react';
import Page from '@/components/layout/Page';
import TextField from '@/components/form/TextField';
import Textarea from '@/components/form/Textarea';
import FormElement from '@/components/form/FormElement';
import Select from '@/components/form/Select';
import AmountField from '../components/form/AmountField';
import DateField from '../components/form/DateField';
import Form from '../components/form/Form';
import {jobService} from "@/services/jobService";
import useLoading from "@/hooks/useLoading";

export default function AddJob() {
  const {showLoading, hideLoading} = useLoading();
  const [job, setJob] = useState({
    title: '',
    description: '',
    url: '',
    workArrangement: '',
    category: '',
  });

  const [company, setCompany] = useState({
    name: '',
    url: '',
    location: '',
  });

  function handleSubmit(e){
    showLoading();
        jobService.addJob(job, company);

  }

  function handleChange(e){
    const {id, value} = e.target;
    setJob({...job, [id]: value});
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
              label="Job URL"
              id="url"
              rows="6"
              value={job.url}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Select
              label="Work Arrangement"
              id="workArrangement"
              value={job.workArrangement}
              onChange={handleChange}
              required
              options = {
                [
                  {label: 'Remote', value: 'remote'},
                  {label: 'Onsite', value: 'onsite'},
                  {label: 'Hybrid', value: 'hybrid'},
                ]
              }
            />
              
          </div>
        </div>

<div className="row">
          <div className="col">
            <TextField
              label="Category"
              id="category"
              rows="6"
              value={job.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <TextField
              label="Company Name"
              id="companyName"
              value={company.name}
              onChange={(e) => setCompany({...company, name: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <TextField
              label="Company URL"
              id="companyUrl"
              value={company.url}
              onChange={(e) => setCompany({...company, url: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <TextField
              label="Company Location"
              id="location"
              value={company.location}
              onChange={(e) => setCompany({...company, location: e.target.value})}
              required
            />
          </div>
        </div>



        <button type="submit" className="btn btn-success">Save</button>
      </Form>
    </Page>
  );
}
