import React from 'react'
import {Link} from "react-router-dom";

class ExampleTile extends React.Component {


    render() {

        return <div className="listTile">
            <Link to={"/details/" + this.props.index}>
                <div>
                    <img src={this.props.example.thumbUrl} alt="Example thumbnail"/>
                </div>
                <h3 className="tileTitle" dangerouslySetInnerHTML={{__html: this.props.example.name.replace("(", "<br/>(")}}/>
            </Link>
        </div>;
    }
}

export default ExampleTile;