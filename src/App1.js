import {useState} from "react"
import Box1 from "./Box1";
import Boxgame from "./Boxgame";
function App1() {
    const [show, setShow] = useState(true);
    const handle_click = () =>{
        alert ("xin choa cac ban")
    }

    const [board, setBoard] = useState (["","","","","","","","",""])
    const handle_play = (index) =>{
        let newboard = [...board];
        newboard[index] = "X";
        setBoard(newboard)
    }
    return (
    <div>
        {show ? <Box1 old={8} name={"le meo"}  handle_click={handle_click}/>:""}
        <button onClick={()=> setShow(!show)}>Toggle mount</button>
        <div className="game">
            {board.map((value, key)=>{
                return(
                    <Boxgame value={board[key]} handle_play = {handle_play} index = {key}/>
                )
            })}
        </div>
    </div>

    );
}
export default App1;