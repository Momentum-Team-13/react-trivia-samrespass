import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Quizzer ({category}) {
    const [round, setRound] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get(`https://opentdb.com/api.php?amount=10&category=${category}`)
        .then((response) => setRound(response.data.results))
        .then(setLoading(false))
        .catch(err=>console.log(err))
        }, []);
    if (loading === true) return "Loading..."
    if (round.length > 0) {
            return (
               <div className="quiz">
                  <h1> {round[0].question}</h1>
               </div> 
                      
           
             )
        }
}