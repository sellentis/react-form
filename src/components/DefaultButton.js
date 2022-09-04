import React from 'react';
import Button from '@mui/material/Button';

const DefaultButton = ({buttonText, ...props}) => {
	return (
		<Button
			variant="contained"
			{...props}
		>
			{buttonText}
		</Button>
	);
};

export default DefaultButton;
