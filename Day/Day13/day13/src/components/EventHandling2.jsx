import { useState } from 'react';

function FormDemo() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault(); //stop page reload
        alert("Submitted name: "+name);
    }

    return(
        <form>
            <h4>Form Demo</h4>
            <input type="text" 
                value={name} 
                placeholder="Enter your name" 
                onChange = {handleChange}
            />

            <button type="submit">Submit</button>
            <p>Hi, {name}. Have a great day.</p>
        </form>
    );
}
export default FormDemo;