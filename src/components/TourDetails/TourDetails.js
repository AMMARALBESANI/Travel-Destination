import { useParams } from "react-router-dom"
import { useState } from "react"
function TourDetail(props){
const[showMore,setShowMore]=useState(false);
 
 const {id}=useParams();

    return(
        <section>
            <div className="containerimg" >
            {props.data.filter(place=>place.name===id).map((ele)=>{
               return(<div className="placeimg" key={ele.id}>
                <img src={ele.image} alt="place"/>
                <div>
                <p>{showMore? ele.info:`${ele.info.substring(0,320)}`}</p>
                <button onClick={()=> setShowMore(!showMore)}>
                    {showMore?"show less":"show more"}
                </button>
                </div>

               </div>) 
            })
            
            }
         
            </div>
        
        </section>
    )
}
export default TourDetail