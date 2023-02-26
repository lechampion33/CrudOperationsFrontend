import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom'
export default function Home() {
  const{id}=useParams();
    const[Players,setPlayers]=useState([]);
    useEffect(()=>{
       loadlPlayers(); 
    },[]);
    const loadlPlayers=async()=>{
       const result=await axios.get("http://localhost:8080/getPlayers");
       setPlayers(result.data);
    };
    const deletePlayers=async(id)=>{
      await axios.delete(`http://localhost:8080/players/${id}`);
      loadlPlayers();
    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Player Name</th>
      <th scope="col">Country</th>
      <th scope="col">Franchise</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
        {Players.map((players,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{players.name}</td>
            <td>{players.country}</td>
            <td>{players.franchise}</td>
            <td>
                <Link className="btn btn-primary mx-2" 
                    to={`/viewplayer/${players.id}`}>View</Link>
                <Link className="btn btn-outline-primary mx-2" to={`/editplayers/${players.id}`}>Update</Link>
                <button className="btn btn-danger mx-2" onClick={()=>deletePlayers(players.id)}>Delete</button>
            </td>
          </tr>
        ))
    }
    
          </tbody>
         </table>
        </div>
      
    </div>
  );
}
