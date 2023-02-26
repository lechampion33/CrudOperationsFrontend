import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function AddPlayers() {
  let navigate = useNavigate()
  const [player, setPlayer] = useState({
    name: "",
    country: "",
    franchise: ""
  });
  const { name, country, franchise } = player;
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!country.trim()) {
      errors.country = "Country is required";
      isValid = false;
    }

    if (!franchise.trim()) {
      errors.franchise = "Franchise is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const onInputChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      await axios.post("http://localhost:8080/players", player);
      navigate('/');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-3 shadow'>
          <h2 className='text-center m-4'>Add Players</h2>
          <form onSubmit={(e) => onSubmit(e)}>
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
                onChange={(e) => onInputChange(e)}
              />
              {errors.name && (
                <span className='text-danger'>{errors.name}</span>
              )}
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
                onChange={(e) => onInputChange(e)}
              />
              {errors.country && (
                <span className='text-danger'>{errors.country}</span>
              )}
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
                onChange={(e) => onInputChange(e)}
              />
              {errors.franchise && (
                <span className='text-danger'>{errors.franchise}</span>
              )}
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link
              type="submit"
              className="btn btn-outline-danger mx-2"
              to='/'
            >
              Go Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
