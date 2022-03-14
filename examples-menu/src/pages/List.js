import React from 'react'
import ExampleTile from "./../components/ExampleTile";

let examples = require('../examples.json');

function List() {

    const listItems = Object.keys(examples).map((d, idx) => <ExampleTile key={d} urlKey={d} example={examples[d]} />);

    return (
        <div className="pageWrapper contentContainer">
            <h1 className="listHeading">Token Negotiator Examples</h1>
            <div className="listContainer">
                {listItems}
            </div>
        </div>
    );
}

export default List;
