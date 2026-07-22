import { useNavigate } from 'react-router-dom';
import DataTable from '../components/DataTable';
import { useEffect, useState } from 'react';
import {jobService} from '../services/jobService';
import useLoading from '../hooks/useLoading';

const headers = [
  { title: 'Job Title', key: 'jobTitle' },
  { title: 'Company', key: 'company' },
  { title: 'Date Applied', key: 'dateApplied' },
  { title: 'Status', key: 'status' },
];

function Home() {
    const [jobApplications, setJobApplications] = useState([]);
      const {showLoading, hideLoading} = useLoading();
    

  useEffect(() => {
    async function getJobApplications() {
        showLoading();
        try{
            const jobApplications = await jobService.getJobs();
            const mappedApplications = jobApplications.map((job) => ({
                id: job.id,
                jobTitle: job.title,
                description: job.description,
                company: job.companyName,
                dateApplied: job.appliedOn,
                status: job.status,
            }));
            setJobApplications(mappedApplications);
        }
        catch(error){
            console.error('Error fetching job applications:', error);
        }
        finally{
            hideLoading();
        }
    }

    getJobApplications();
    
}, []);

  let navigate = useNavigate();

  function onAddApplication() {
    navigate('/jobs/add');
  }

  return (
    <main>
      <DataTable
        title="Job Applications"
        headers={headers}
        data={jobApplications}
        onAdd={onAddApplication}
      />
    </main>
  );
}
export default Home;
