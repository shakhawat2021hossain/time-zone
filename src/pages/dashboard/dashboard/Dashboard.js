import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Orders from "../orders/Orders";
import Button from "@mui/material/Button";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../makeAdmin/MakeAdmin";
import AddReview from "../addReview/AddReview";
import DashboardHome from "../dashboardHome/DashboardHome";
import AddProduct from "../addProduct/AddProduct";
import Home from "../../home/home/Home";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";
import Pay from "../pay/Pay";
import AllOrders from "../allorders/AllOrders";
import ManageProducts from "../manageProducts/ManageProducts";

const drawerWidth = 180;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut, user } = useAuth();

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="text-center drawer">
      <Toolbar />
      <Divider />

      <Link to="/home">
        <Button color="inherit">Home</Button>
      </Link>
      <br />
      <Link to={`${url}/orders`}>
        <Button color="inherit">Orders</Button>
      </Link>
      <br />
      <Link to={`${url}/addReview`}>
        <Button color="inherit">Make Review</Button>
      </Link>
      <Link to={`${url}/pay`}>
        <Button color="inherit">Payment</Button>
      </Link>

      {admin && (
        <div>
          <Link to={`${url}/addProduct`}>
            <Button color="inherit">Add Product</Button>
          </Link>
          <br />
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/allOrders`}>
            <Button color="inherit">Manage Orders</Button>
          </Link>
          <Link to={`${url}/allProducts`}>
            <Button color="inherit">Manage Products</Button>
          </Link>
        </div>
      )}
      <Divider />
      {user?.email && <Button onClick={logOut}>Log Out</Button>}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path={`${path}/orders`}>
            <Orders></Orders>
          </Route>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/allOrders`}>
            <AllOrders></AllOrders>
          </Route>
          <Route path={`${path}/allProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
