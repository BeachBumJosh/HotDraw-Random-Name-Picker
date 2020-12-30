import React, { useState } from "react";
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddNames from './components/form/index';
import NameSlider from './components/slider/index';
import ImageSlider from './components/images/index';
import How from './components/how/index';

import './App.scss';

function App() {
  const [names, setNames] = useState([]);
  const [winner, setWinner] = useState();
  const [compName, setCompName] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [imgs, setImgs] = useState([]);

  console.log('App names = ', names);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setImgs(prevArray => [...prevArray, imgUrl]);
      setImgUrl('');
      return;
    }
  }


  return (
    <div className="App">
      <header className="">

        <div className="header-wrap">
          <div className="header-left">
            <a href="https://hotdraw.co.uk" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/staging-ac5f0.appspot.com/o/icons%2FnewHotDrawLogoOpt.png?alt=media&token=9eebd585-e459-4046-ab80-4a07267eae62" className="logo" alt="logo" /></a>
            <h1>Random Name Picker</h1>
          </div>

          <div className="header-right">
            {/* <h1>{compName ? compName : 'Competition Name'}</h1> */}
            <input type="text" onChange={(e) => setCompName(e.target.value)} value={compName} placeholder="Prize Name..." />
            <input className="url" type="url" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl ? 'Image added!' : ''} placeholder="Image Url..." onKeyDown={handleKeyDown} />
          </div>
        </div>
    
        <Router>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/form">Add Entries</Link>
              </li>
              <li><Link to="/slider">Names</Link></li>

              <li><Link to="/how">How it Works</Link></li>              
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/form">
              <AddNames addNames={(e) => setNames(e)} />
            </Route>
            <Route path="/slider">
              <NameSlider entries={names} updateWinner={(e) => setWinner(e)} compName={compName} />
            </Route>
            <Route path="/how">
              <How />
            </Route>
          </Switch>

          {imgs.length ? <ImageSlider images={imgs} /> : ''}
        </div>
      </Router>
      </header>
      {compName ? <div className="comp-name">
        <h1>{compName}</h1>
      </div> : ''}
    </div>
  );
}

export default App;
