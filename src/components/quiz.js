import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Quizzer () {
    const [round, setRound] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get("https://opentdb.com/api_count.php?category=7")
        .then((response) => setRound(response.data.trivia_categories))
        .then(setLoading(false))
        .catch(err=>console.log(err))
        }, []);
    if (loading === true) return "Loading..."
        else {
            return (
               <div className="quiz">
            
         
         <h3>Please Bro</h3>
   
        
               
        
              </div> 
                      
           
             )
        }
}