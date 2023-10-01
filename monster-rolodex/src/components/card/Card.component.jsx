const Card = ({name, email, id}) =>{
        return(
            <div key={id} className="card-container">
              <img
                src={`https://robohash.org/${id}?set1=set2&size=180x190`}
                alt={`monster ${id}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
              </div>
        )
    }

export default Card