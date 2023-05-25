import React from "react";
import { useState } from "react";
import axios from 'axios'

const FormPublications = () => {

    const [FormPublications, setFormPublications] = useState({
        description: '',
        score: 0
    })

    const handleInputChange = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setFormPublications({

            ... FormPublications,
            [property]: value
        })

        

    }

    console.log(FormPublications)

    const handleSubmit = async(event) => {
        event.preventDefault()

        try{

            

            const response = await axios.post("http://localhost:3001/publications", FormPublications)
            console.log(response.data)
            alert('Posted')

        }catch(error){
            console.log(error)
        }



    }





    return(
        <form onSubmit={handleSubmit}>
            <label>Opinion: </label>
            <input name='description' type='text' value={FormPublications.description} onChange={handleInputChange}/>

            <label>Score: </label>
            <input name='score' type='Number' value={FormPublications.score} onChange={handleInputChange}/>
            <button type='submit'>Post</button>

        </form>

    )
}

export default FormPublications;