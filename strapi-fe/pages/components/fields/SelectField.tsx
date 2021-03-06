import { FunctionComponent } from 'react';
import { FormData } from '../../api/form';
import InputLabel from '../shared/InputLabel';

const SelectField: FunctionComponent<{ field: FormData }> = ({ field }) => {
  return (
    <div>
      <InputLabel text={field.attributes.label} required={field.attributes.required} />
      <select>
        {field.attributes.options.map((option: string, index: number) => (
          <option key={index} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
