

function Tours(props){
    return (<main>
       {
         props.data.map((location)=>{
            return(
                <div key={location.id}>
                  <img src={location.image} alt="photo1" />
                  <p>{location.name}</p>
                  <hr/>
                </div>
            )
         })
       }
    </main>)
}

export default Tours