import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import About from "../pages/About/About";
import Contact from "../pages/static/Contact";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/shop/ProductDetails";
import TermCondition from "../pages/static/Term&Condition";
import Privacy from "../pages/static/Privacy";
import ReturnPolicy from "../pages/static/ReturnPolicy";
import Support from "../pages/static/Support";
import Ticket from "../pages/static/Ticket";
import Faq from "../pages/static/Faq";
import ComingSoon from "../pages/common/ComingSoon";
import Login from "../pages/common/Login";
import Inventory from "../pages/shop/Inventory";
import Orders from "../pages/payment/Orders";
import Shipment from "../pages/payment/Shipment";
import Payment from "../pages/payment/Payment";
import DashboardLayout from "../layout/DashboardLayout";
import ShowError from "../components/common/ShowError";

import AdminRoute from "./AdminRoute";
import AllUser from "../pages/dashboard/user/AllUser";
import NotFound from "../pages/static/NotFound"

import Vendor from "../pages/dashboard/vendor/Vendor";
import VendorRoute from "./VendorRoute";
import AddProduct from "../pages/dashboard/product/AddProduct";
import UserReview from "../pages/dashboard/user/UserReview";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/terms",
        element: <TermCondition />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/return",
        element: <ReturnPolicy />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/inventory/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ShowError />,
    children: [
      {
        path: "/dashboard",
        element: <UserReview />,
      },
      {
        path: "/dashboard/user",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addvendor",
        element: (
          <AdminRoute>
            <Vendor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <VendorRoute>
            <AddProduct />
          </VendorRoute>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound/>,
  },

]);
export default routes;