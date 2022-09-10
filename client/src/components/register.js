const { useState } = require("react");

const Register = (props) => {

    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        fetch("http://localhost:3000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fullName,
                userName,
                password,
                email,
            })
        })
        .then((result) => {
            result.json();
        })
        .then((data) => {
            console.log(data, "UserRegister");
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    return (
        
        <form onSubmit={handleSubmit}> 
            <h3>Register</h3>
            <div className='mb-3'>
                <label>Full Name</label>
                <input 
                    type = "fullName"
                    className='form-control'
                    placeholder='Enter your full name'
                    onChange={(e) => {setFullName(e.target.value)}}
                />
            </div>
            <div className='mb-3'>
                <label>User Name</label>
                <input 
                    type = "userName"
                    className='form-control'
                    placeholder='Enter your user name'
                    onChange={(e) => {setUserName(e.target.value)}}
                />
            </div>
            <div className='mb-3'>
                <label>Password</label>
                <input 
                    type = "password"
                    className='form-control'
                    placeholder='Enter your password'
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <div className='mb-3'>
                <label>Email Address</label>
                <input 
                    type = "email"
                    className='form-control'
                    placeholder='Enter your email address'
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>
            <div className="d-grid">
                <button type = "submit" className='btn btn-primary'>
                    Submit
                </button>
            </div>
            <p className='forgot-password text-right'>
                Already registed <a href="/login">login?</a>
            </p>
        </form>
    )
}

export default Register;