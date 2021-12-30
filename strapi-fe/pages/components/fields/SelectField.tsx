import { FunctionComponent } from 'react';
import { FormData } from '../../api/form';

const SelectField: FunctionComponent<{ field: FormData }> = ({ field }) => {
  return (
    <div>
      <label>{field.attributes.label}: </label>
      <select>
        {field.attributes.options.split(';').map((option: string, index: number) => (
          <option key={index} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
