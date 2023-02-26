import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate,Link, useParams } from 'react-router-dom';
export default function EditPlayers() {
  let navigate=useNavigate();
  const{id}=useParams();
  const[player,setPlayer]=useState({
    "name":"",
    "country":"",
    "franchise":""
  });
  const{name,country,franchise}=player
  const onInputChange=(e)=>{
  setPlayer({...player,[e.target.name]:e.target.value});
  };
  const onSubmit=async(e)=>{
   e.preventDefault();
   await axios.put(`http://localhost:8080/players/${id}`,player);
   navigate("/");
  };
  useEffect(()=>{
    loadPlayers();
  },[]);
  const loadPlayers=async()=>{
    const result=await axios.get(`http://localhost:8080/players/${id}`)
    setPlayer(result.data)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-3 shadow'>
           <h2 className='text-center m-4'>Update Players</h2>
           <form onSubmit={(e)=>onSubmit(e)}>
           <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>
              Player Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter Player Name'
              name='name'
              value={name}
              onChange={(e)=>onInputChange(e)}
              />
           </div>
           <div className='mb-3'>
            <label htmlFor='Country' className='form-label'>
              Player Country
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter Player Country'
              name='country'
              value={country}
              onChange={(e)=>onInputChange(e)}
              />
           </div>
           <div className='mb-3'>
            <label htmlFor='Franchise' className='form-label'>
              Franchise Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter Player Franchise'
              name='franchise'
              value={franchise}
              onChange={(e)=>onInputChange(e)}
              />
           </div>
           <button type="submit" className="btn btn-outline-primary">Submit</button>
           <Link type="submit" className="btn btn-outline-danger mx-2" to='/'>Go Back</Link>
           </form>
        </div>
      </div>
      
    </div>
  )
}
