import React,{Component} from 'react';

class Form extends Component{
	constructor(props){
		super(props);
		this.state={data:''};

		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({
			data:event.target.value 
		});
	}
	handleSubmit(e){
		alert('A name was submit:'+this.state.data);
		e.preventDefault();
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					name:
					<input type="text" value={this.state.data} onChange={this.handleChange} />
				</label>
				<input type="submit" vlue="submit" />
			</form>
			);
	}
}

export default Form;