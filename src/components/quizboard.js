import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"
import Quiz from './quiz.js'


export default function Quizboard () {
    const [topic, setTopic] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState(false);

    function startQuiz() {
        return (
          "hi"
        )
    }

    useEffect(() => {
        axios
        .get("https://opentdb.com/api_category.php")
        .then((response) => setTopic(response.data.trivia_categories))
        .then(setLoading(false))
        .catch(err=>console.log(err))
        }, []);
        if (loading === true) return "Loading..."
        else {
            return (
               <div className="quizBoard">
                {quiz === true && <div><Quiz/></div>}
                
                 {topic.map(topic => (
         <button className="quizSquare" onClick={() => setQuiz(true)} value={topic.id}>   
         <h3>{topic.name}</h3>
     </button>
        ))}
               
        
              </div> 
                      
           
             )
        }
    

}