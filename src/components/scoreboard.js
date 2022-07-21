import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from "axios"


export default function Scoreboard ({points}) {
    return (
        <div className="score">
            <h2>You Scored: {points}</h2>
        </div>
    )
}