import "./Demon.css";
export default function Demon(props){
    return(
        <>
            <div className="head">   
            <div >Name :  {props.name}</div>   
            <div >id : {props.id}</div>   
            <div > Age: {props.age}</div>
            </div>
        </>
    )

}