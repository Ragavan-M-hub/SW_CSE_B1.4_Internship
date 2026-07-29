function ClickDemo() {
    function handleSeperateClick() {
        alert("Seperate handler clicked");
    }

    return(
        <div>
            <h6>Click demo</h6>
            <button onClick={handleSeperateClick}>Seperate Handler</button>

            <button onClick={()=>alert("Inline handler clicked")}>Inline Handler</button>
        </div>
    )
}
export default ClickDemo;