import {useState} from "react";

const CreateBlogs = () => {

    const [inputs, setInputs] = useState({});

    const onHandleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
    }

    const onHandleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values)=> ({...values, [name]:value}))
        console.log()
    }

    return(
        <div>
            <h1>create new</h1>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor='text'>text</label>
                <input
                    type='text'
                    name='text'
                    onChange={onHandleChange}
                />
                <br/>
                <label type='text' htmlFor='author'>author</label>
                <input
                    type='text'
                    name='author'
                    onChange={onHandleChange}
                />
                <br/>
                <label type='text' htmlFor='url'>url</label>
                <input
                    type='text'
                    name='url'
                    onChange={onHandleChange}
                />
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )

}

export default CreateBlogs
