import './card-list.styles.css'
import Card from '../card/Card.component'
const CardList = ({newMonsters}) =>{
        return (
            <div className="card-list">
                {newMonsters.map((monster) => {
                  const {name, email, id} = monster
            return (
              // #2 after initialization of monsters this render function will run
              <Card key={id} name={name} email={email} id={id}/>
            );
          })} 
            </div>
        )
    }

export default CardList