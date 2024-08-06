import React, { Component } from 'react';
import labelImage from '../assets/label1.jpg';

class Mainpage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
        <div> 
            <img src={labelImage} alt='Mainpage' className='labelimage'/>
            <h1>Welcome to the Label</h1>
            
        </div>
    );
    }
}
 
export default Mainpage;