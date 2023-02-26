import React, { useEffect ,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
export default function ViewPlayers() {

    const [player,setPlayer]=useState({
        name:"",
        country:"",
        franchise:""
    })
    const{id}=useParams();
    useEffect(()=>{
     loadPlayers()
    },[]);
    const loadPlayers=async ()=>{
        const result=await axios.get(`http://localhost:8080/players/${id}`)
        setPlayer(result.data)
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-3 shadow'>
           <h2 className='text-center m-4'>View Players</h2>
           <div className='card'>
            <div className='card-header'>
                Details of Player id: {player.id}
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Player Name:  </b>
                        {player.name}
                    </li>
                    <li className='list-group-item'>
                        <b>Country:  </b>
                        {player.country}
                    </li>
                    <li className='list-group-item'>
                        <b>Franchise:  </b>
                        {player.franchise}
                    </li>
                </ul>
            </div>
           </div>
            <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
        </div>
     </div>
    </div>
  );
}
