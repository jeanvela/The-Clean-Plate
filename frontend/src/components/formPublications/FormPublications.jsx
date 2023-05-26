import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";

const FormPublications = () => {

    const rating = useSelector((state) => state.publication.rating);

    const [FormPublications, setFormPublications] = useState({
        description: '',
        score: rating
    })

    useEffect(() => {
        setFormPublications((prevState) => ({
          ...prevState,
          score: rating
        }));
      }, [rating]);

    const handleInputChange = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setFormPublications((prevState) => ({
            ...prevState,
            [property]: value,
             
          }));

        

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

            <label>Score: {rating} </label>

            
            
            <button type='submit'>Post</button>

        </form>

    )
}

export default FormPublications;