import Page from "../components/Page";

export default function AddJob(){
    return (
    <Page title="Add Job">
        <form>
            <label htmlFor="title">Job Title</label>
            <input type="text" id="title" name="title" />
        </form>
    </Page>
    )
}