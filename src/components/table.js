import React from 'react';
import Rows from './rows'

let Table = (props)=>{
	console.log('props',props.items)

	const itemRows = props.items.thirty.map((it,index)=>{
		return <Rows item={it} key={index} num={index+1}/>
	});

	const itemRows2 = props.items.all.map((it,index)=>{
		return <Rows item={it} key={index} num={index+1}/>
	});

	return(
		<div>
		<table>
		<thead>
			<tr>
				<th colSpan="4">FCC Leaderboad</th>
			</tr>
			<tr>
				<th>#</th>
				<th id="name">Camper Name</th>
				<th id="thirty">Points in past 30 days</th>
				<th id="allTime">All time points</th>
			</tr>
		</thead>
		<tbody>
		{itemRows2}
		</tbody>
		</table>
		</div>
	)
}

export default Table;