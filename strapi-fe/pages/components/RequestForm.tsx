import { FunctionComponent, SyntheticEvent, Fragment, useRef } from 'react';
import { getContent, postContent, RequestAPIResponse } from '../api/request';

const RequestForm: FunctionComponent = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: SyntheticEvent): void => {
    event.preventDefault();
    const name: string | undefined = nameRef?.current?.value;
    const body: string | undefined = bodyRef?.current?.value;

    if (name && name !== '' && body && body !== '') {
      postContent('request', { name, body }).then((response) => console.log(response.data.data));
    }
  };

  const logRequests = (event: SyntheticEvent): void => {
    event.preventDefault();
    getContent('request').then((response: RequestAPIResponse) => console.log(response));
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <p>An input</p>
        <input type="text" name="name" id="name" placeholder="Name" ref={nameRef} />
        <input type="text" name="body" id="body" placeholder="Body" ref={bodyRef} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={logRequests}>get requests</button>
    </Fragment>
  );
};

export default RequestForm;
