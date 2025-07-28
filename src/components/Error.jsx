import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
      <h1 className="text-xl font-bold text-red-500">Something went wrong!</h1>
      <p className="mb-4 text-stone-600">{error.data || error.message}</p>
      <LinkButton to="-1>">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;

// The useRouteError() hook is used to access the error object that was thrown by the route.
