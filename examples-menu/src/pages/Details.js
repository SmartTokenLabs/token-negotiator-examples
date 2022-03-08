import React from 'react';
import {Link, useParams} from "react-router-dom";

let examples = require('../examples.json');

function Details() {

    let params = useParams();

    let id = parseInt(params.id);
    let example = examples[id];

    let nextId = id+1 < examples.length ? id+1 : 0;
    let lastId = id-1 < 0 ? examples.length - 1 : id-1;

    console.log(example);

    return (
        <div>
            <h1>This is the details page</h1>
            <h3>{example.name}</h3>
            <Link to={"/details/" + lastId}>Previous</Link>
            <Link to={"/details/" + nextId}>Next</Link>
        </div>
    );
}

export default Details;