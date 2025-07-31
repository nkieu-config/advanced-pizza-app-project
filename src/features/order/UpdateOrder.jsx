import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

function UpdateOrder() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>

      {isSubmitting && <Loader />}
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = {
    priority: true,
  };
  await updateOrder(params.orderId, data);

  return null;
}
