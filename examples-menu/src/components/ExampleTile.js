import React from 'react'
import {Link} from "react-router-dom";

class ExampleTile extends React.Component {


    render() {
        return <Link to={"/details/" + this.props.index}><h1>{this.props.example.name}</h1></Link>;
    }
}

export default ExampleTile;