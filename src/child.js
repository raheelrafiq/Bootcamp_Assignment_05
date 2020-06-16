import React, {useContext} from 'react';
import colorContext from './colorContext';
import './App.css';

const Child = (props) => {
    let colorValue = useContext(colorContext)
    return(
        <div>
            <h2>Change Background color with Context API</h2>
            <h2>Background Color is: {colorValue[0]}</h2>

            <button onClick={() => {colorValue[1](colorValue[0] = "Red")}}>Red</button>
            <button onClick={() => {colorValue[1](colorValue[0] = "Green")}}>Green</button>
            <button onClick={() => {colorValue[1](colorValue[0] = "Blue")}}>Blue</button>
        </div>
    )
}
export default Child