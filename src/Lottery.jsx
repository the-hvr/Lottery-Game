import { useState } from "react";
import { genNum, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Form from "./Form.jsx";

export default function Lottery({winCondition}){
    let [ticket, setTicket] = useState([0, 0, 0]);

    let isWinner = winCondition(ticket);

    return (
        <>
            <h1 style={{color:"skyblue"}}>Lottery Game!</h1>

            <Ticket ticket={ticket}/>

            <Form setTicket={setTicket}/>

            {isWinner && <h1 style={{color:"orangered", fontSize:'60px'}}>Congratualtion! You Won.</h1>}

            <p>Winning Condition : Sum of ticket digits = 15</p>
        </>
    )
}