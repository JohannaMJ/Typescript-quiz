import React, { HTMLProps } from 'react';
import styles from './radioButton.module.css';

type RadioButtonProps = {
	children: string;
} & HTMLProps<HTMLInputElement>;

const RadioButton = ({ children, ...props }: RadioButtonProps) => {
	return (
		<label className={styles.container}>
			<input {...props} type='radio' className={styles.input} />
			<span
				className={styles.label}
				dangerouslySetInnerHTML={{ __html: children }}
			></span>
		</label>
	);
};

export default RadioButton;
