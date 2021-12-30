import { FunctionComponent, useEffect, useState } from 'react';
import { FormAPIReponse, FormAttributes, getForm } from '../api/form';

const StrapiForm: FunctionComponent = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getForm('form').then((fieldData: FormAPIReponse) => {
      setFields(fieldData.data);
    });
  }, [setFields]);

  const getRandomId = () => Math.floor(Math.random() * 1000);

  return (
    <div>
      <h1>Strapi generated form</h1>
      <form>
        {fields &&
          fields.map((field: { attributes: FormAttributes }) => {
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
                        <option key={getRandomId()} value={option.toLowerCase}>
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
