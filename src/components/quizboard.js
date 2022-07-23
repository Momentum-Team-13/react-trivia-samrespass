import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"
import Quiz from './quiz.js'


export default function Quizboard () {
    const [topic, setTopic] = useState([]);
    const [quiz, setQuiz] = useState(false);
    const [category, setCategory] = useState(0)


    

    useEffect(() => {
        axios
        .get("https://opentdb.com/api_category.php")
        .then((res) => setTopic(res.data.trivia_categories))
        .catch(err=>console.log(err))
        }, [])
        if (topic.length === 0) return( 
        <div className="quiz">
        <h1>Loading...</h1>
        </div>) 
        if (topic.length > 0) {
            return (
               <div className="quizBoard">
                {quiz === true && <button className="cancelQuiz" onClick={() => setQuiz(false)}>Quit?</button>
                }
                {quiz === true && <Quiz category = {category} />}
                
                 {topic.map(topic => (
         <button className="quizSquare" onClick={() => {setQuiz(true);setCategory(`${topic.id}`)}}>
         <h3>{topic.name}</h3>
     </button>
        ))}
               
        
              </div> 
                      
           
             )
        }
    

}