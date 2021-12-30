import { FunctionComponent } from 'react';
import styles from '../../../styles/Shared.module.css';

const InputLabel: FunctionComponent<{ text: string; required: boolean }> = ({ text, required }) => {
  return (
    <label className={styles.label}>
      {text}
      {required && <span>*</span>}:
    </label>
  );
};

export default InputLabel;
