import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Quizzer ({category}) {
    const [round, setRound] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get(`https://opentdb.com/api.php?amount=10&category=${category}`)
        .then((response) => setRound(response.data.results),setLoading(false),)

        }, [category])
    if (loading === true) return "Loading..."
    if (round.length > 0) {
            return (
               <div className="quiz">
               <div className="question"><h1> {round[0].question}</h1>
               <div className="answers">  {round[0].incorrect_answers.map(answer => (
           
           <h3 className="answer">{answer}</h3>
  
          ))}</div></div>
      
                 
               </div> 
                      
           
             )
        }
}