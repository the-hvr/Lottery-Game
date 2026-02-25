import './Form.css';
import { useState } from "react";
import { genNum } from "./helper";
export default function({setTicket}){
    let [n, setN] = useState(3);

    return (
        <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setTicket(genNum(n))} 
            }
            >
             <select value={n} onChange={(e)=> setN(Number(e.target.value))} style={{padding:'15px'}}>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
                <option value='4'>Four</option>
                <option value='5'>Five</option>
             </select>
             <button type="submit" >Buy New Ticket</button>
            </form>
        </>
    );
}