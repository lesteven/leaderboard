import React,{Component} from 'react';
import Rows from './rows'

class Table extends Component{
	constructor(){
		super();
		this.thirtyStatus = this.thirtyStatus.bind(this);
		this.allStatus = this.allStatus.bind(this);
		this.state={
			allStatus:false
		}
	}
	thirtyStatus(){
		this.setState({allStatus:false,tcolor:'orange',acolor:'white'});
	}
	allStatus(){
		this.setState({allStatus:true,acolor:'orange',tcolor:'white'});
	}

	render(){
		const newItems = this.props.items;

		const itemRows = newItems.thirty.map((it,index)=>{
			return <Rows item={it} key={index} num={index+1}/>
		});

		const itemRows2 = newItems.all.map((it,index)=>{
			return <Rows item={it} key={index} num={index+1}/>
		});
	return(
		<div>
		<table>
		<thead className="header">
			<tr>
				<th colSpan="4">FCC Leaderboad</th>
			</tr>
			<tr>
				<th>#</th>
				<th id="name">Camper Name</th>
				<th id="thirty" onClick={this.thirtyStatus} style={{color:this.state.tcolor}}>Points in past 30 days</th>
				<th id="allTime" onClick={this.allStatus} style={{color:this.state.acolor}}>All time points</th>
			</tr>
		</thead>
		<tbody>
			{this.state.allStatus?itemRows2 : itemRows}
		</tbody>
		</table>
		</div>
	)	
	}

}

export default Table;