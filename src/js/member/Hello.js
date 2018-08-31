import React from 'react';
import 'whatwg-fetch';

// Parent Component
class Hello extends React.Component {
	constructor(){
		super(...arguments);
		this.state = {
			mans:[]
		};
	}

	componentDidMount(){
        console.log("aaaaaaaaaaaaa");
		fetch('/man',{
			method: 'get',
			dataType: 'json',
			headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
		})
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({mans: responseData});
		})
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
	}
	render() {
		let mans = this.state.mans.map( (man) => {
			return <Guy
					name={man.MEM_INFO_ID}
					age={man.MEM_EMAIL}
                    />
		});

		return (
			<div>
				<h1>CalyFactory Developers</h1>
				<ul>
					<li>
							22233355
						{mans}
					</li>
				</ul>
			</div>
		);
	}
}

// Child Component
class Guy extends React.Component {
	render() {
		return (
			<li>
				{this.props.name}, age is {this.props.age}. create time : {this.props.createDateTime}
			</li>
		);
	}
}
export default Hello;