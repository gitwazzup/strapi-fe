import { FunctionComponent, SyntheticEvent } from 'react';
import { APIResponse, getContent } from '../api/request';

const Form: FunctionComponent = () => {
  const submitHandler = (event: SyntheticEvent): void => {
    event.preventDefault();
    console.log('submit!');
  };

  getContent('request').then((response: APIResponse) => console.log(response.data));

  return (
    <form onSubmit={submitHandler}>
      <p>An input</p>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
