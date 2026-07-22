import { useNavigate } from 'react-router-dom';
import DataTable from '../components/DataTable';
import { useEffect, useState } from 'react';
import { jobService } from '../services/jobService';

const headers = [
  { title: 'Job Title', key: 'jobTitle' },
  { title: 'Company', key: 'company' },
  { title: 'Date Applied', key: 'dateApplied' },
  { title: 'Status', key: 'status' },
];

// const jobApplications = [
//   {
//     jobTitle: 'Software Engineer',
//     company: 'Tech Company',
//     dateApplied: '2023-10-01',
//     status: 'Pending',
//   },
//   {
//     jobTitle: 'Frontend Developer',
//     company: 'Web Solutions',
//     dateApplied: '2023-10-02',
//     status: 'Interviewing',
//   },
// ];

function Home() {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    async function getJobApplications() {
      const jobApplications = await jobService.getJobs();
      const mappedApplications = jobApplications.map((job) => ({
        id: job.id,
        jobTitle: job.title,
        description: job.description,
        company: job.companyName,
        dateApplied: job.appliedOn,
        status: job.status,
      }));
      console.log(mappedApplications);
      setJobApplications(mappedApplications);
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
