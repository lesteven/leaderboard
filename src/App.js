import React, { Component } from 'react';
import Table from './components/table';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			thirty:[],
			all:[]
		};
	}

	componentDidMount(){
		fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
		.then(response => response.json())
		.then(json=>{
			this.setState({
				thirty:json
			})	
		})
		fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
		.then(response => response.json())
		.then(json=>{
			this.setState({
				all:json
			})
		})
	}
  render() {
	if(!this.state.thirty) return <p>Loading...</p>
    return (
      <div className="App">
      	<Table items={this.state}/>
      </div>
    );
  }
}

export default App;
