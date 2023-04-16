import './index.css'

const NewStory = () => {
return(
    <div className='new-story'>
        <h1>NEW STORY</h1>
        <label htmlFor="type">Story type</label>
        <select className='input' name="types" id="type">
            <option value="Select">Select Rejection type</option>
            <option value="JobApplication">Job Application</option>
            <option value="Proposal">Proposal</option>
            <option value="ProjectIdea">Project Idea</option>
        </select>

    </div>
)
}
export default NewStory