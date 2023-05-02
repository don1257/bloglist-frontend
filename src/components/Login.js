import { useState } from "react";

const Login = () => {
    const [inputs, setInputs] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <div>
            <h1>log in to application</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>username</label>
                <input
                    type='text'
                    name='username'
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor='password'>password</label>
                <input
                    type='password'
                    name='password'
                    onChange={handleChange}
                />
                <br/>
                <input type='submit' id='login' value="login"/>
            </form>
        </div>
    );
}

export default Login
