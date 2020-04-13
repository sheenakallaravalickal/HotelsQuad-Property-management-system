import React from 'react';
import { Switch, Route } from 'react-router-dom';
import messages from 'components/SidebarNav/messages';
import { injectIntl } from 'react-intl';

// Private components
import PrivateRoute from 'containers/_PrivateRoute';
import PublicRoute from 'containers/_PublicRoute';

// dashboard
import DashboardAnalytic from 'containers/Dashboard/Analytic/Loadable';

// forms
import InputComponent from 'components/Forms/InputComponent/Loadable';
import FormUpload from 'components/Forms/FormUpload/Loadable';

// special featured
import ChatApp from 'containers/SpecialFeatured/ChatApp/Loadable';
import Inbox from 'containers/SpecialFeatured/Inbox/Loadable';
import ContactList from 'containers/SpecialFeatured/ContactList/Loadable';
import TextEditorComponent from 'containers/SpecialFeatured/TextEditorComponent/Loadable';
import EventCalendarComponent from 'containers/SpecialFeatured/EventCalendarComponent/Loadable';

// table
import MaterialTable from 'components/Tables/MaterialTable/Loadable';

// charts
import ReChart from 'components/Chart/ReChart/Loadable';

// pages
import AddRooms from 'containers/Pages/AddRooms/Loadable';
import ViewRooms from 'containers/Pages/ViewRooms/Loadable';
import EditRooms from 'containers/Pages/EditRooms/Loadable';

import AddBooking from 'containers/Pages/AddBooking/Loadable';
import ViewBooking from 'containers/Pages/ViewBooking/Loadable';
import EditBooking from 'containers/Pages/EditBooking/Loadable';

import ViewInventory from 'containers/Pages/ViewInventory/Loadable';
import AddItem from 'containers/Pages/AddItem/Loadable';
import EditItem from 'containers/Pages/EditItem/Loadable';


import ProfilePage from 'containers/Pages/ProfilePage/Loadable';
import Login from 'containers/Pages/Login/Loadable';
import Signup from 'containers/Pages/Signup/Loadable';
import ForgotPassword from 'containers/Pages/ForgotPassword/Loadable';

// notfound
import NotfoundPage from 'components/NotfoundPage/Loadable';
import NotfoundPage505 from 'components/NotfoundPage505/Loadable';
import dashboardMessages from './messages';

const Routes = props => (
  <Switch>
    {/* dashboard  start */}
    <PrivateRoute
      exact
      path="/dashboard"
      title="Dashboard"
      component={DashboardAnalytic}
    />
    {/* dashboard  end */}

    {/* special featured start */}
    <PrivateRoute
      exact
      path="/contact-list"
      title={props.intl.formatMessage({ ...messages.contactlist })}
      component={ContactList}
    />
    <PrivateRoute
      exact
      path="/chat"
      title={props.intl.formatMessage({ ...messages.chat })}
      component={ChatApp}
    />
    <PrivateRoute
      exact
      path="/inbox"
      title={props.intl.formatMessage({ ...messages.inbox })}
      component={Inbox}
    />
    <PrivateRoute
      exact
      path="/event-calendar"
      title={props.intl.formatMessage({ ...messages.eventcalendar })}
      component={EventCalendarComponent}
    />
     <PrivateRoute
      exact
      path="/texteditor"
      title="Texteditor"
      component={TextEditorComponent}
    />
    {/* special featured end */}

    {/* pages start */}
    <PrivateRoute
      exact
      path="/add-rooms"
      title="Add Rooms"
      component={AddRooms}
    />
    <PrivateRoute
      exact
      path="/view-rooms"
      title="View Rooms"
      component={ViewRooms}
    />
    <PrivateRoute
      exact
      path="/edit-rooms"
      title="Edit Rooms"
      component={EditRooms}
    />

    <PrivateRoute
      exact
      path="/add-booking"
      title="Add Booking"
      component={AddBooking}
    />
     <PrivateRoute
      exact
      path="/view-booking"
      title="View Booking"
      component={ViewBooking}
    />
     <PrivateRoute
      exact
      path="/edit-booking"
      title="Edit Booking"
      component={EditBooking}
    />
    <PrivateRoute
      exact
      path="/add-item"
      title="Add Item"
      component={AddItem}
    />
    <PrivateRoute
      exact
      path="/view-inventory"
      title="View Inventory"
      component={ViewInventory}
    />
    <PrivateRoute
      exact
      path="/edit-item"
      title="Edit Item"
      component={EditItem}
    />
    <PrivateRoute
      exact
      path="/profile"
      title={props.intl.formatMessage({ ...messages.profile })}
      component={ProfilePage}
    />
    {/* pages end */}

    {/* forms start */}
    <PrivateRoute
      exact
      path="/inputfild"
      title={props.intl.formatMessage({ ...messages.inputfild })}
      component={InputComponent}
    />
    <PrivateRoute
      exact
      path="/file-upload"
      title={props.intl.formatMessage({ ...messages.fileupload })}
      component={FormUpload}
    />
    {/* forms start */}

    {/* table start */}
    <PrivateRoute
      exact
      path="/material-table"
      title={props.intl.formatMessage({ ...messages.materialtable })}
      component={MaterialTable}
    />
    {/* tables start */}

    {/* chart start */}
    <PrivateRoute
      exact
      path="/rechart"
      title={props.intl.formatMessage({ ...messages.rechart })}
      component={ReChart}
    />
    {/* chart end */}

    {/* public route components  */}
    <PublicRoute exact path="/" component={Login} />
    <PublicRoute exact path="/signup" component={Signup} />
    <PublicRoute exact path="/recover-password" component={ForgotPassword} />
    <PublicRoute exact path="/505" component={NotfoundPage505} />
    <Route component={NotfoundPage} />
  </Switch>
);
export default injectIntl(Routes);
