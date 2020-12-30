import React, { useState } from "react";

// import './App.css';

function How() {
  
  return (
    <div className="how">
        <h1>How HotDraw Pickr Randomly Selects a Winner</h1>

        <h2>Free to use. <a className="inline" href="https://github.com/BeachBumJosh/HotDraw-Random-Name-Picker" target="_blank">Public source code.</a> Fully Random.</h2>

        <div className="card">
            <p>The code under the bonnet</p>
            <a href="https://css-tricks.com/snippets/javascript/select-random-item-array/"><code>const winner = entries[Math.floor(Math.random()*entries.length)];</code></a>
            <a href="https://www.w3schools.com/js/js_random.asp" target="_blank">Documentation on Random for the web.</a>
        </div>
        
        <div className="card">
            <p>Some other important information</p>

            <ul>
                <li>
                    <p>No data is stored in any way. If you refresh the page, everything is deleted.</p>
                </li>
                <li>
                    <p>In no way is the list altered or adjusted from what has been entered.</p>
                </li>
                <li>
                    <p>The slider of names will repeat once it comes to the end of the list.</p>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default How;
