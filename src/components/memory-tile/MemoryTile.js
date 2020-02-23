import React from 'react';
import './MemoryTile.scss';

/*
Needed features:
- Must have two "sides"
  - Plain side
  - Bug side
    - Must know which side is shown
    - Use class change to show either side (css animation?) 
      - Use prop to end class with type of bug
- Must have semi-unique ID shared only with its match
*/

const MemoryTile = props => (
    <div class="memory-tile">
        {props.bug}
    </div>
);

export default MemoryTile;