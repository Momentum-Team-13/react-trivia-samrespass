import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"

function Quizzer ({category}) {
    const [round, setRound] = useState([]);
    const [slide, setSlide] = useState(0);
    const [points, setPoints] = useState(0)
    const [shuffle, setShuffle] = useState([20, 40, 60, 80])
 
    useEffect(() => {
        axios
        .get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple&category=${category}`)
        .then((response) => setRound(response.data.results),)
        }, [category])
    if (round.length === 0) {
        return (
            <div className="quiz">
                <h1>Loading...</h1>
            </div>
        )
    }
    if (round.length > 0) {
            return (
               <div className="quiz">
               <div className="question"><h1>{round[slide].question}</h1>
               
               <div className="answers">  {round[slide].incorrect_answers.map(answer => (
          
           <button className="answer" onClick={() => {setPoints(points + 10);setSlide(slide + 1);console.log(slide)}}>{answer}</button>
  
          ))} <button className="answer" onClick={() => {setPoints(points - 10);setSlide(slide + 1);console.log(slide)}}>{round[slide].correct_answer}</button></div></div>
      
                 
               </div> 
                      
             )
        }
}

export default Quizzer