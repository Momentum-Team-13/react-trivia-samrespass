import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"


export default function Scoreboard ({points}) {
    return (
        <div className="score">
        <div className="resultScreen">
        {points < 0 &&
        <h1>Nice try dumbass...</h1>
        }
        {points > 40 && points < 90 &&
        <h1>Not Bad!</h1>
        }
        {points > 90 &&
        <h1>Incredible!</h1>
        }
            <h1>You Scored: {points} Points</h1>

        </div>

        </div>
    )
}