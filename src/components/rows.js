import React from 'react';

let Rows =(props) =>{
	
	return(
		<tr className="rows">
			<th>{props.num}</th>
			<th><a href={`https://www.freecodecamp.com/${props.item.username}`}>{props.item.username}</a></th>
			<th>{props.item.recent}</th>
			<th>{props.item.alltime}</th>
		</tr>
	)
}

export default Rows;