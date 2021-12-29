import { FunctionComponent, useEffect, useState } from 'react';
import { getContent } from '../api/request';
import styles from '../../styles/Form.module.css';

const StrapiForm: FunctionComponent = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getContent('form').then((fields) => {
      setFields(fields.data);
    });
  }, []);

  return (
    <div>
      <h1>Strapi generated form</h1>
      <form>
        {fields &&
          fields.map((field) => {
            switch (field.attributes.type) {
              case 'text':
                return (
                  <div>
                    <label>{field.attributes.label}: </label>
                    <input required={field.attributes.required} type="text" />
                  </div>
                );
              case 'select':
                return (
                  <div>
                    <label>{field.attributes.label}: </label>
                    <select>
                      {field.attributes.options.split(';').map((option: string) => (
                        <option key={option.toLowerCase} value={option.toLowerCase}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              case 'textarea':
                return (
                  <div>
                    <label>{field.attributes.label}: </label>
                    <textarea></textarea>
                  </div>
                );
              default:
                return <p>no type match!</p>;
            }
          })}
      </form>
    </div>
  );
};

export default StrapiForm;
