import { useState } from "react"

export default function IdeasForm(props){
    const [userInput,SetUserInput] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        props.AddIdeas(userInput)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label >Idea</label>
                <input type="text" name="idea" id="idea" onChange={(e)=> SetUserInput(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}