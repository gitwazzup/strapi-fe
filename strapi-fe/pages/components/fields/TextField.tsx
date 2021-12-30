import { FunctionComponent } from 'react';
import { FormData } from '../../api/form';
import InputLabel from '../shared/InputLabel';

const TextField: FunctionComponent<{ field: FormData }> = ({ field }) => {
  return (
    <div>
      <InputLabel text={field.attributes.label} required={field.attributes.required} />
      <input required={field.attributes.required} type="text" />
    </div>
  );
};

export default TextField;
