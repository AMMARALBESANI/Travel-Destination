import data from '../../data/db.json'

function Tours(){
    return (<main>
       {
         data.map((location)=>{
            return(
                <div key={location.id}>
                  <img src={location.image} />
                  <p>{location.name}</p>
                </div>
            )
         })
       }
    </main>)
}

export default Tours