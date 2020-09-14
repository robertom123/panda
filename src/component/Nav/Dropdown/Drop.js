import React from 'react'


class Drop extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div className = "dropdown-links">
                <a href = "#bowl"><img className = "dropdown-images" src = "Images/bowl.jpg" alt = "bowl"/></a>
                <span>Entree</span>
                <a href = "#bowl"><img className = "dropdown-images"  src = "Images/bowl.jpg" alt = "bowl"/></a>
                <span>Entree</span>
                <a href = "#bowl"><img className = "dropdown-images"  src = "Images/bowl.jpg" alt = "bowl"/></a>
                <span>Entree</span>
            </div>
        )
    }
}

export default Drop