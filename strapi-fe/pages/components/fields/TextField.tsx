import { FunctionComponent } from 'react';
import { FormData } from '../../api/form';

const getRandomId = () => Math.floor(Math.random() * 1000);

const TextField: FunctionComponent<{ field: FormData }> = ({ field }) => {
  return (
    <div>
      <label>{field.attributes.label}: </label>
      <select>
        {field.attributes.options.split(';').map((option: string) => (
          <option key={getRandomId()} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TextField;
