import { FunctionComponent, SyntheticEvent, Fragment, useRef, RefObject } from 'react';
import { getContent, postContent } from '../api/request';

const Form: FunctionComponent = () => {
  const nameRef = useRef<HTMLInputElement>(new HTMLInputElement());
  const bodyRef = useRef<HTMLInputElement>(new HTMLInputElement());

  const submitHandler = (event: SyntheticEvent): void => {
    event.preventDefault();

    if (isValidRef(nameRef) && isValidRef(bodyRef)) {
      const name: string = nameRef.current.value;
      const body: string = bodyRef.current.value;
      postContent('request', { name, body }).then((response) => console.log(response.data.data));
    }
  };

  const isValidRef = (ref: RefObject<HTMLInputElement>): boolean =>
    !!ref?.current?.value && ref.current.value !== '';

  const logRequests = (event: SyntheticEvent): void => {
    event.preventDefault();
    getContent('request').then((response) => console.log(response));
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

export default Form;
