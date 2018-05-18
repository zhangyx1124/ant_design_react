import React,{Component} from 'react';

class Clock extends Component{
	constructor(props){
		super(props);
		this.state={
			date:new Date()
		}
	}
	componentDidMount(){
		this.timeID=setInterval(()=>this.tick(), 1000);
	}
	componentWillUnmount(){
		clearInterval(this.timeID);
	}

	tick(){
		this.setState({
			date:new Date()
		});
	}
	render(){
		return (
			<h2>now time is:{this.state.date.toLocaleTimeString()}.</h2>
			);
	}
}
export default Clock;