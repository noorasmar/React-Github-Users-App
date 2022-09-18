import CardUser from '../CardUser';
import './style.css'

function UsersList({users}) {
    return ( 
        <div className='container'>
            {users.slice(0, 20).map((el)=>{
                return <CardUser key={el.id} data={el}/>
            })}
        </div>
    );
}

export default UsersList;