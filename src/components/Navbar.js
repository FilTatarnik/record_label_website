import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='navbar'>
                    <a href='#home' className='navbar_item'>Label</a>
                    <a href='#home' className='navbar_item'>Home</a>
                    <a href='#about' className='navbar_item'>About</a>
                    <a href='#artists' className='navbar_item'>Artists</a>
                    <a href='#music' className='navbar_item'>Music</a>
                    <a href='#merch' className='navbar_item'>Merch</a>
                    <a href='#contact' className='navbar_item'>Contact</a>
            </div>
         );
    }
}
 
export default Navbar;