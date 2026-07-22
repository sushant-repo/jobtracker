import { useNavigate } from 'react-router-dom';
import DataTable from '@/components/DataTable';
import { useEffect, useState } from 'react';
import { jobService } from '@/services/jobService';
import useLoading from '@/hooks/useLoading';
import { useDeleteModal } from '@/hooks/useDeleteModal';

const headers = [
  { title: 'Job Title', key: 'jobTitle' },
  { title: 'Company', key: 'company' },
  { title: 'Date Applied', key: 'dateApplied' },
  { title: 'Status', key: 'status' },
];

function Home() {
  const [jobApplications, setJobApplications] = useState([]);
  const { showLoading, hideLoading } = useLoading();
  const { confirmation } = useDeleteModal();

  useEffect(() => {
    async function getJobApplications() {
      showLoading();
      try {
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
      } catch (error) {
        console.error('Error fetching job applications:', error);
      } finally {
        hideLoading();
      }
    }

    getJobApplications();
  }, []);

  let navigate = useNavigate();

  function onAddApplication() {
    navigate('/jobs/add');
  }

  async function handleDelete(jobId) {
    console.log('Delete job with ID:', jobId);
    const confirmDelete = await confirmation(
      'Delete Job Application',
      'Are you sure you want to delete this job application?'
    );

    if (confirmDelete) {
      showLoading();
      try {
        await jobService.deleteJob(jobId);
        setJobApplications((prevApplications) =>
          prevApplications.filter((job) => job.id !== jobId)
        );
      } catch (error) {
        console.error('Error deleting job application:', error);
      } finally {
        hideLoading();
      }
    }
  }

  return (
    <main>
      <DataTable
        title="Job Applications"
        headers={headers}
        data={jobApplications}
        onAdd={onAddApplication}
        onEdit={(row) => navigate(`/jobs/${row.id}`)}
        onDelete={(row) => handleDelete(row.id)}
      />
    </main>
  );
}
export default Home;
