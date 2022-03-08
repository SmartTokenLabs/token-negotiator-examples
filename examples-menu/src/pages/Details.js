import React from 'react';
import {Link, useParams} from "react-router-dom";

let examples = require('../examples.json');

function Details() {

    const params = useParams();

    if (!params.id){
        document.location.href = "/";
        return null;
    }

    let id = parseInt(params.id);

    if (isNaN(id) && !isFinite(id) || !examples[id]){
        document.location.href = "/";
        return null;
    }

    let example = examples[id];

    let nextId = id+1 < examples.length ? id+1 : 0;
    let lastId = id-1 < 0 ? examples.length - 1 : id-1;

    return (
        <div>
        <Link to={"/details/" + lastId} className="backButton">
            <img src="/images/icons-arrow-left.svg" alt="Previous" />
        </Link>
        <Link to={"/details/" + nextId} className="nextButton">
            <img src="/images/icons-arrow-left.svg" alt="Next" />
        </Link>
        <div className="pageWrapper contentContainer">
            <div className="detailsContainer">
                <div className="detailsImage">
                    <img src={example.imageUrl} alt="Example" />
                </div>
                <div className="detailsInfo">
                    <div>
                        <label>Name</label>
                        <h2>{example.name}</h2>
                    </div>
                    <div>
                        <label>Technology</label>
                        <p>{example.technology}</p>
                    </div>
                    <div>
                        <label>When?</label>
                        <p>{example.published}</p>
                    </div>
                    <div>
                        <label>Description</label>
                        <p>{example.description}</p>
                    </div>
                    <div className="detailsActions">
                        <a href="#">
                            <button className="button primary">View Demo</button>
                        </a>
                        <a href="#">
                            <button className="button">View on Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Details;