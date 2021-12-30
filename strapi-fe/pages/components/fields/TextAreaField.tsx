import { FunctionComponent } from 'react';
import { FormData } from '../../api/form';

const TextAreaField: FunctionComponent<{ field: FormData }> = ({ field }) => {
  return (
    <div>
      <label>{field.attributes.label}: </label>
      <textarea></textarea>
    </div>
  );
};

export default TextAreaField;
