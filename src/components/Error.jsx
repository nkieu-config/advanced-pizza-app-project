import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>💩 Something went wrong! 👻</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Error;

// The useRouteError() hook is used to access the error object that was thrown by the route.
