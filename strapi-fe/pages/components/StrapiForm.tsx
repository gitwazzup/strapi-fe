import { FunctionComponent, useEffect, useState } from 'react';
import { FormAPIReponse, FormData, FormType, getForm } from '../api/form';

const StrapiForm: FunctionComponent = () => {
  const [fields, setFields] = useState<FormData[] | null>([]);

  useEffect(() => {
    getForm('form').then((fieldData: FormAPIReponse) => setFields(fieldData.data));
  }, [setFields]);

  const getRandomId = () => Math.floor(Math.random() * 1000);

  return (
    <div>
      <h1>Strapi generated form</h1>
      <form>
        {fields &&
          fields.map((field: FormData) => {
            switch (field.attributes.type) {
              case FormType.TEXT:
                return (
                  <div>
                    <label>{field.attributes.label}: </label>
                    <input required={field.attributes.required} type="text" />
                  </div>
                );
              case FormType.SELECT:
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
              case FormType.TEXT_AREA:
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
