import { FunctionComponent } from 'react';
import { FormData } from '../../api/form';
import InputLabel from '../shared/InputLabel';

const TextAreaField: FunctionComponent<{ field: FormData }> = ({ field }) => {
  return (
    <div>
      <InputLabel text={field.attributes.label} required={field.attributes.required} />
      <textarea></textarea>
    </div>
  );
};

export default TextAreaField;
