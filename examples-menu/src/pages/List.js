import React from 'react'
import ExampleTile from "./../components/ExampleTile";

let examples = require('../examples.json');

function List() {

    const listItems = examples.map((d, idx) => <ExampleTile key={idx} index={idx} example={d} />);

    console.log(listItems);

    return (
        <div>
            <h1>This is the listing page</h1>
            <div>
                {listItems}
            </div>
        </div>
    );
}

export default List;
