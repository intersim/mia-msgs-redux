import React, { Component } from 'react';

const Form = () => (
	<div className="col col-6 pr3">
		<h1>Send Mia a Message!</h1>
		<form>
			<div>
				<label htmlFor="email">Email</label>
				<input type="text" name="email" />
			</div>

			<div>
				<label htmlFor="text">Text</label>
				<input type="text" name="text" />
			</div><br />

			<button type="Submit">Submit</button>
		</form>
	</div>
)


export default Form;