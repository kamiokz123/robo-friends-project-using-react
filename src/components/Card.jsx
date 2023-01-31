import React from "react";



const Card= (props)=>{
    return(
        <div className="bg-light-green tc p-card grow dib bw2 br3 pa2 ma2 ">
            <img src={`https://robohash.org/${props.id}`} alt="pic" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}



export default Card;