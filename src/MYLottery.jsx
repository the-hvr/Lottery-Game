import { useState } from "react";

export default function Lottery(){

    let [randNum, setRandNum] = useState(0);
    let [sum, setSum] = useState(0);
    
    function numGen(){
        let threeDigitNum = Math.floor(Math.random() * 900 + 100);
        setRandNum(threeDigitNum);
        setSum(0);
    }

    function checkSum(){
        let num = randNum;
        
        while(num > 0 ){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        setSum(sum);
    }

    return (
        <>
            <h2>Random Number : {randNum}</h2>

            { sum === 15 || sum === 22 ? 
                <h1> you won! your sum : {sum}</h1> :
                sum !== 15 && sum !== 0 ?
                <h2>try again! your sum : {sum}</h2> :
                <p>Click on Check button</p>
            }

            <button onClick={numGen}>TRY YOUR LUCK!</button> &nbsp;&nbsp;
            <button onClick={checkSum}>CHECK</button>

            <br /><br /><br />
            <p>Get the sum 22 or 15</p>
        </>
    )
}