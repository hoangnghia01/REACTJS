function Boxgame (props){
    return (
        <div className="boxgame" onClick={()=> props.handle_play(props.index)}>
            {props.value}
        </div>
    )
}
export default Boxgame;