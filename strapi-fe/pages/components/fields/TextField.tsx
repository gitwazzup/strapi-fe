import { FunctionComponent } from 'react';
import { FormData } from '../../api/form';

const TextField: FunctionComponent<{ field: FormData }> = ({ field }) => {
  return (
    <div>
      <label>{field.attributes.label}: </label>
      <input required={field.attributes.required} type="text" />
    </div>
  );
};

export default TextField;
