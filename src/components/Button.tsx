import React from 'react';
import './Button.scss';

const Button = (props: any) => {
  return (
		<button
			onSubmit={props.sumbit}
			className={'custom-button ' + props.status}>
			{props.label}
		</button>
  );
};

export default Button;
