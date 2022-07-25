import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"
import Scoreboard from './scoreboard.js'

function Quizzer ({category}) {
    const [round, setRound] = useState([]);
    const [slide, setSlide] = useState(0);
    const [points, setPoints] = useState(0)
    let [answers, setAnswers] = useState([])
    const [finish, setFinish] = useState(false)

    function decoder(html) {
        let txt = document.createElement("textarea")
        txt.innerHTML = html;
        return txt.value;
    }

 
    useEffect(() => {
        axios
        .get(`https://opentdb.com/api.php?amount=10&category=${category}`)
        .then((questions) => setRound(questions.data.results))
        
        }, [category])
    if (round.length > 1) {
        separate()
        answers.push(round[slide].correct_answer)
    }

function separate() {
    const splits = round[slide].incorrect_answers
    splits.forEach( split => {answers.push(split)});
}

function emptyAnswers() {
    setAnswers([])
}

function checkAnswer(answers) {
    if (answers === round[slide].correct_answer) {
        setPoints(points + 10)
    }
    else {
        setPoints(points - 20)
    }
}
        

    if (round.length < 1) {
        return (
            <div className="quiz">
                <h1>Loading...</h1>
            </div>
        )
    }
    if (round.length > 1 ) {
        
            return (
               <div className="quiz">
               {finish !== true && <div className="skip">
               <button ></button>
               </div>
               }
                {finish === true && <Scoreboard points = {points} />}
               <div className="question"><h1>{decoder(round[slide].question)}</h1>
               
               <div className="answers"> 
               {answers.sort().map(answers => (

<button className="answer" onClick={() => {emptyAnswers();checkAnswer(answers);slide < 9 && setSlide(slide + 1);slide === 9 && setFinish(true)}}>{decoder(answers)}</button>))} 
              
               </div>
               
               </div>
      
        
               </div> 
                      
             )
        }
}

export default Quizzer