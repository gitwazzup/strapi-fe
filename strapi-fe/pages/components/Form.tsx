import { FunctionComponent, SyntheticEvent, Fragment } from 'react';
import { APIResponse, getContent, postContent, authenticateUser } from '../api/request';

const Form: FunctionComponent = () => {
  const submitHandler = (event: SyntheticEvent): void => {
    event.preventDefault();
    const name = event.target[0].value;
    const body = event.target[1].value;
    postContent('request', { name, body }).then((response) => console.log(response));
  };

  const logRequests = (event: SyntheticEvent): void => {
    getContent('request').then((response) => console.log(response));
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <p>An input</p>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="body" id="body" placeholder="Body" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={logRequests}>get requests</button>
    </Fragment>
  );
};

export default Form;
