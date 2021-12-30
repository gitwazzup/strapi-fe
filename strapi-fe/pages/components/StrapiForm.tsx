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
          fields.map((field: FormData, index: number) => {
            switch (field.attributes.type) {
              case FormType.TEXT:
                return <TextField key={index} field={field} />;
              case FormType.SELECT:
                return <SelectField key={index} field={field} />;
              case FormType.TEXT_AREA:
                return <TextAreaField key={index} field={field} />;
              default:
                return <p key={index}>no type match!</p>;
            }
          })}
      </form>
    </div>
  );
};

export default StrapiForm;
