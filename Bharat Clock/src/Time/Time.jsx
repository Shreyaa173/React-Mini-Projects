import './Time.css'

function Time(){
    let time = new Date();
    return(
        <center><h3>This is the Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3></center>
    )
}

export default Time