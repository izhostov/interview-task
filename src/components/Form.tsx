import React, { useState } from 'react';
import API from '../api/API';
import { FormData } from '../model/FormData';
import { Status } from '../model/enums/Status';
import Button from './Button';
import Input from './Input';
import './Form.scss';

const Form = () => {
	const [borderColor, setBordercolor] = useState('');
    const [status, setStatus] = useState('');

	const [formData, setFormData] = useState(new FormData());

	const random = () => Math.floor(Math.random() * 255);

	const onBlur = () => {
		setBordercolor(`rgb(${random()}, ${random()}, ${random()})`);
	};

	const submit = (e: React.FormEvent) => {
        console.log(formData);
		API.post('form', formData)
			.then((res) => {
				console.log(res.data);
                setStatus(Status.SUCCESS);
			})
			.catch((err) => {setStatus(Status.ERROR)});

        e.preventDefault();
	};

	return (
		<div className="form-wrapper">
			<h2>Enter Data</h2>
			<form onSubmit={submit}>
				<Input
					borderColor={borderColor}
					placeholder='First Name'
					onBlur={onBlur}
					value={formData.firstName}
					onChange={(e: any) =>
						setFormData({ ...formData, firstName: e.target.value })
					}></Input>
				<Input
					borderColor={borderColor}
					placeholder='Last Name'
					onBlur={onBlur}
					value={formData.lastName}
					onChange={(e: any) =>
						setFormData({ ...formData, lastName: e.target.value })
					}></Input>
				<Input
					borderColor={borderColor}
					placeholder='Email'
					onBlur={onBlur}
					value={formData.email}
					onChange={(e: any) =>
						setFormData({ ...formData, email: e.target.value })
					}></Input>

				<Button submit={submit} label='SUBMIT' status={status}></Button>
			</form>
		</div>
	);
};

export default Form;
