import React from "react";
import "../App.css"
import NavBar from "../components/NavBar";
const backgroundStyle = {

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    backgroundImage: `url('/GeiselNight.jpg')`,

}

class Departments extends React.Component{
    render(){
        return(
            <body style={backgroundStyle}>
            <div>
                <NavBar/>
            </div>
            <div className= 'container'>
                <h1>Departments feature coming Soon</h1>
                <h2>Designed by Team San Diego</h2>
            </div>
            </body>
        );
    }
}

export default Departments;