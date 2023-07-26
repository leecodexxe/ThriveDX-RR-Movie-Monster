export default function displayIdeas(props) {
    const idea = props.ideas.map((ideas,i) => {
        return (
            <li key={i} id={i}>{ideas}</li>
        )
    })
    return (
        <div>
            <ul>
                {idea}
            </ul>
        </div>
    )
}