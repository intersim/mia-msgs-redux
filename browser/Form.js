import React, { Component } from 'react';

const Form = props => (
	<div className="col col-6 pr3">
		<h1>Send Mia a Message!</h1>
		<form onSubmit={props.handleSubmit}>
			<div>
				<label htmlFor="email">Email</label>
				<input onChange={props.handleChange} type="text" name="email" value={props.emailVal} />
			</div>

			<div>
				<label htmlFor="text">Text</label>
				<input onChange={props.handleChange} type="text" name="text" value={props.textVal} />
			</div><br />

			<button type="Submit">Submit</button>
		</form>
	</div>
)


export default Form;