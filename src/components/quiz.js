import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Quizzer ({category}) {
    const [round, setRound] = useState([]);
    const [loading2, setLoading2] = useState(true);
    const [slide, setSlide] = useState([0]);
    const [points, setPoints] = useState([0])

    useEffect(() => {
        axios
        .get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple&category=${category}`)
        .then((response) => setRound(response.data.results),setLoading2(false),console.log("why god"))
        }, [category])
    if (loading2 === true) return "Loading..."
    if (round.length > 0) {
            return (
               <div className="quiz">
               <div className="question"><h1>{round[slide].question}</h1>
               <div className="answers">  {round[slide].incorrect_answers.map(answer => (
           
           <button className="answer" onClick={() => {setPoints(points + 10);setSlide(slide + 1)}}>{answer}</button>
  
          ))} <button className="answer" onClick={() => {setPoints(points - 10);setSlide(slide + 1)}}>{round[slide].correct_answer}</button></div></div>
      
                 
               </div> 
                      
           
             )
        }
}