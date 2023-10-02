import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='error-page'>
      <h1>Oops!</h1>
      {error.status==404 ? <p>Not Found Bitch</p> : <p>Something else cooking bitch!</p>}
    </div>
  );
}

export default ErrorPage