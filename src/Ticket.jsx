import './Ticket.css';
import TicketNum from "./TicketNum";

export default function Ticket({ticket}){

    return (
        <>
        <div className="ticketBox">
            <h2>TICKET NO :</h2>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
            
        </>
    )
}