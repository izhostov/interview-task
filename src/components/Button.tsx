import React from 'react';
import './Button.scss';

const Button = (props: any) => {
  return (
		<button
			onSubmit={props.sumbit}
			className='custom-button'
			style={{ backgroundColor: props.color }}>
			{props.label}
		</button>
  );
};

export default Button;
