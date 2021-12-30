import { FunctionComponent } from 'react';
import styles from '../../../styles/Shared.module.css';

const InputLabel: FunctionComponent<{ text: string }> = ({ text }) => {
  return <label className={styles.label}>{text}:</label>;
};

export default InputLabel;
