import DataTable from "../components/DataTable"

const headers = [
    { title: "Job Title", key: "jobTitle" },
    { title: "Company", key: "company" },
    { title: "Date Applied", key: "dateApplied" },
    { title: "Status", key: "status" },
];


const jobApplications = [
    {
        jobTitle: "Software Engineer",
        company: "Tech Company",
        dateApplied: "2023-10-01",
        status: "Pending"
    }, 
    {
        jobTitle: "Frontend Developer",
        company: "Web Solutions",
        dateApplied: "2023-10-02",
        status: "Interviewing"
    }
];

function onAddApplication(){
    console.log("Add Application Clicked");
}
function Home(){
    return(
        <main>
        
                <DataTable
                 title="Job Applications"
                 headers={headers}
                 data={jobApplications}
                 onAdd={onAddApplication}/>
        </main>
    )
}

export default Home