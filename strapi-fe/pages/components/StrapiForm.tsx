import { FunctionComponent, useEffect, useState } from 'react';
import { FormAPIReponse, FormData, FormType, getForm } from '../api/form';
import SelectField from './fields/SelectField';
import TextAreaField from './fields/TextAreaField';
import TextField from './fields/TextField';

const StrapiForm: FunctionComponent = () => {
  const [fields, setFields] = useState<FormData[] | null>([]);

  useEffect(() => {
    getForm('form').then((fieldData: FormAPIReponse) => setFields(fieldData.data));
  }, [setFields]);

  return (
    <div>
      <h1>Strapi generated form</h1>
      <form>
        {fields &&
          fields.map((field: FormData) => {
            switch (field.attributes.type) {
              case FormType.TEXT:
                return <TextField field={field} />;
              case FormType.SELECT:
                return <SelectField field={field} />;
              case FormType.TEXT_AREA:
                return <TextAreaField field={field} />;
              default:
                return <p>no type match!</p>;
            }
          })}
      </form>
    </div>
  );
};

export default StrapiForm;
