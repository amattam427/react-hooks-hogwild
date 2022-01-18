import React, {useState} from 'react';

function HogCard({data}){
    //trying to show more info when clicking on the image
    const [showDetails, setShowDetails] = useState(false)
    
    //console.log(data)
    
    //below we are pulling image and name from the data obj
    const {name, image, greased, specialty, weight} = data

    function renderDetails(){
        if (showDetails){
            return (
                <div>
                <ul>
                    <li>{greased?'real greasy':'real dry'}</li>
                    <li>specialty: {specialty}</li>
                    <li> weight: {weight}</li>
                </ul>
            </div>
            )
        } else {
            return (
                <div>
                    <h3>{name}</h3>
                    <img style={{objectFit: 'cover'}} height='200' width='200' src={image}/>
                </div>
            )
        }
    }


    return(
        <div onClick={()=>setShowDetails((prevState)=> !prevState)} className = "ui four wide column">
            {renderDetails()}
        </div>
    )
}


export default HogCard;