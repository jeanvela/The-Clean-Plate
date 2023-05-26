import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'



const Publications = () => {

    const [publications, setPublications] = useState(null)

    useEffect(() => {

        
        const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:3001/publications");
              const data = response.data;
              setPublications(data)
              
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
              
           

        
       
      }, []);

      console.log(publications)
    




  return (
    <div>

        <div>

{publications && publications.map(p => (
        <div >
          <p>Opinion: {p.description}</p>
          <p>Score: {p.score}</p>

        </div>
      ))}

     </div>

    </div>
    
  );
};

export default Publications;