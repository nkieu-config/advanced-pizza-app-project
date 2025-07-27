import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

// The useNavigation() hook is used to access information about the current navigation state.

// <Outlet /> is used to render the child route of the current route.
