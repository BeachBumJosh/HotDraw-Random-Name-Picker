import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

// import './App.css';

function AddNames({addNames, compName}) {
  const [names, setNames] = useState([]);
  const [added, setAdded] = useState(false);

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    
    const input = names;
    const nameArr = input.split(/\n/g);
    
    addNames(nameArr);

    alert(`Names have been added!`);

    history.push('/slider')

  }

  

  return (
    <div className="form">
        <form onSubmit={(e) => submitForm(e)}>
            <label htmlFor="names">
                Add {compName} Entrants
            </label>

            <textarea 
                name="names" 
                id="namesInput"
                type="text"
                col="5" 
                row="6"
                onChange={(e) => setNames(e.target.value)}
            ></textarea>

            <input type="submit" value="Add Names" />            

        </form>
    </div>
  );
}

export default AddNames;
