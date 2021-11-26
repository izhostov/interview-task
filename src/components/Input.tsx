import React from 'react';
import './Input.scss';

const Input = (props: any) => {
	return (
		<input
			className='custom-input'
			placeholder={props.placeholder}
			style={{
				border: `2px solid ${props.borderColor}`
			}}
			onBlur={props.onBlur}
			value={props.value}
			onChange={props.onChange}></input>
	);
};

export default Input;
