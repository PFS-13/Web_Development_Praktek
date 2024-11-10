import React from 'react';
import '../../../css/detail-page.css'
const Actor = (actor) => {
    const result = actor.actor
    return result.map((data,i) => {  
        return <div key={i}>
         <div className="media-element">
               <img src={data.link_photo} alt=""/>
               <p className="title">{data.actor_name}</p>
         </div>
        </div>
    })

};

export default Actor;
