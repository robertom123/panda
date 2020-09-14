import React from 'react'
import Drop from './Dropdown/Drop'
class Nav extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
                <div className = "main-nav">
                    <div className = "nav-logo">
                        <a href = "https://www.google.com">
                            <img src = "Images/panda.png" alt = "panda"/>
                        </a>
                    </div>
                    <div className = "nav-tabs dropdown">
                        <a className = " dropdownbtn" href = "#food">Our Food</a>
                        <div className = "dropdown-content">
                        <Drop/>
                        </div>

                    </div>
                    <div className = "nav-tabs">
                        <a href = "#food">Our Location</a>
                    </div>
                    <div className = "nav-tabs">
                        <a href = "#food">Our Family Story</a>
                    </div>
                    <div className = "nav-tabs" style = {{float:"right"}}>
                        <button className = "nav-button"><a >ORDER now </a></button>
                    </div>
                    <div className = "nav-tabs" style = {{float:"right"}}>
                        <a href = "#food">Gift Card</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Nav;