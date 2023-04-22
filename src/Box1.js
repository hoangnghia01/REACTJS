function Box1 (props){
    return(
        <div onClick={props.handle_click}>
            <h1>toi ten la {props.name} va tuoi {props.old}</h1>
        </div>
    )
}
export default Box1;