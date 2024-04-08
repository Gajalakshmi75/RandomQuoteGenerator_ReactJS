import React, { useState } from 'react';
import "./Random.css";
import reload from "./refresh.png"; //reload
const RandomQuote=()=>{

    let quotes=[];
        async function loadQuotes(){
            const response=await fetch("https://type.fit/api/quotes");
            quotes=await response.json();
        }

    
    const [quote,setQuote]=useState({
        text:"Life is like riding a bicycle. To keep your balance, you must keep moving",
        author:"Albert Einstein",
    });

    const random=()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }



    loadQuotes();
    return (
        <div className='main'>
            <div className='quote'>{quote.text}</div>
            <div>
                <div className='line'></div>
                <div className='bottom'>
                    <div className='author'>-{quote.author.split(',')[0]}</div>
                
                <div className='icons'>
                    <img src={reload} onClick={()=>{random()}} alt=""/>
                </div>
                </div>
            </div>
        </div>

    )


}
export default RandomQuote;