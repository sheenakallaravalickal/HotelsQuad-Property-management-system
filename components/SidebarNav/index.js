import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { Grid, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './style.scss';

// images
 import ana from 'images/icons/sidebar/dashboard/ana.svg';
 import anaH from 'images/icons/sidebar/dashboard/ana-h.svg';
 import ui from 'images/icons/sidebar/ui.svg';
 import uiH from 'images/icons/sidebar/ui-h.svg';
 import form from 'images/icons/sidebar/form.svg';
 import formH from 'images/icons/sidebar/form-h.svg';
 import pricing from 'images/icons/sidebar/new/pricing.svg';
 import pricingH from 'images/icons/sidebar/new/pricing-h.svg';
 import fontawesome from 'images/icons/sidebar/new/fontawesome.svg';
 import fontawesomeH from 'images/icons/sidebar/new/fontawesome-h.svg';

// images
import logo from 'images/logo.png';
import smallLogo from 'images/small-logo.png';
import messages from './messages';

const SidebarNav = props => {
  const navigations = [
    {
      name: 'Dashboard',
      icon: ana,
      iconHover: anaH,
      id: 11031,
      menus: [
        {
          name: 'Frontdesk',
          link: '/dashboard',
          id: 59681,
        },
      ],
    },
    {
      name: 'Booking',
      id: 41728,
      icon: ui,
      iconHover: uiH,
      menus: [
        {
          name: 'Add Booking',
          link: '/add-booking',
          id: 1234,
        },
        {
          name: 'View Booking',
          link: '/view-booking',
          id: 1235,
        },
        {
          name: 'Edit Booking',
          link: '/edit-booking',
          id: 1236,
        },
      ],
    },
    {
      name: 'Rooms',
      icon: pricing,
      iconHover: pricingH,
      id: 5464145555522,
      menus: [
        {
          name: 'Add Rooms',
          link: '/add-rooms',
          id: 1231,
        },
        {
          name: 'View Rooms',
          link: '/view-rooms',
          id: 1232,
        },
        {
          name: 'Edit Rooms',
          link: '/edit-rooms',
          id: 1233,
        },
      ],
    },
    {
      name: 'Booking Chart',
      id: 70153,
      icon: form,
      iconHover: formH,
      menus: [],
    },
    {
      name: 'Inventory',
      id: 92394,
      icon: fontawesome,
      iconHover: fontawesomeH,
      menus: [
        {
          name: 'Add Item',
          link: '/add-item',
          id: 6661,
        },
        {
          name: 'View Inventory',
          link: '/view-inventory',
          id: 6662,
        },
        {
          name: 'Edit Item',
          link: '/edit-item',
          id: 6663,
        },
      ],
    },
  ];

  const [parent_expanded, setParentExpanded] = useState('1');
  const parent_handleChange = panel => (event, new_parent_expanded) => {
    setParentExpanded(new_parent_expanded ? panel : false);
    setExpanded(false);
  };

  const [expanded, setExpanded] = useState('1');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid className="sidebarMainWrapper">
      <div onClick={props.colupsMenuHandler} className="colupsMenuSidebar">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-bars fa-w-14 fa-fw"
        >
          <path
            fill="currentColor"
            d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
          />
        </svg>
      </div>
      <div className="sidebarWrap">
        <div className="logo">
          <NavLink to="/dashboard">
            <img className="normal" src={logo} alt="" />
            <img className="colupsLogo" src={smallLogo} alt="" />
          </NavLink>
        </div>
        <Grid className="sidebarMenu">
          <PerfectScrollbar>
            {navigations.map(nav => (
              <Fragment key={nav.id}>
                <ExpansionPanel
                  classes={{
                    root: 'navItems',
                    expanded: 'navItemsExpanded',
                  }}
                  square
                  expanded={parent_expanded === nav.id}
                  onChange={parent_handleChange(nav.id)}
                >
                  <ExpansionPanelSummary
                    classes={{
                      root: 'navItemsText',
                      expanded: 'navItemsTextExpanded',
                      expandIcon: 'navItemsTextIcon',
                      content: 'navItemsTextContent',
                    }}
                    expandIcon={<i className="fa fa-angle-down" />}
                  >
                    <span className="icon">
                      <img className="normal" src={nav.icon} alt="" />
                      <img className="hover" src={nav.iconHover} alt="" />
                    </span>
                    <span className="name">{nav.name}</span>
                  </ExpansionPanelSummary>
                  <ul className="submenu">
                    {nav.menus.map((menu, i) => (
                      <li key={menu.id}>
                        {menu.link ? (
                          <NavLink
                            className="navItem"
                            activeClassName="active"
                            exact
                            onClick={window.scrollTo(0, 0)}
                            to={menu.link}
                          >
                            <span className="name">{menu.name}</span>
                            {menu.value && (
                              <span
                                style={{ background: menu.color }}
                                className="value"
                              >
                                {menu.value}
                              </span>
                            )}
                          </NavLink>
                        ) : (
                          <ExpansionPanel
                            classes={{
                              root: 'navItems',
                              expanded: 'navItemsExpanded',
                            }}
                            square
                            expanded={expanded === menu.id}
                            onChange={handleChange(menu.id)}
                          >
                            <ExpansionPanelSummary
                              classes={{
                                root: 'navItemsText',
                                expanded: 'navItemsTextExpanded',
                                expandIcon: 'navItemsTextIcon',
                                content: 'navItemsTextContent',
                              }}
                              expandIcon={<i className="fa fa-angle-down" />}
                            >
                              <span className="name">{menu.name}</span>
                            </ExpansionPanelSummary>
                            <ul className="thirdmenuItems">
                              {menu.submenus.map((submenu, i) => (
                                <li key={i}>
                                  <NavLink
                                    onClick={window.scrollTo(0, 0)}
                                    activeClassName="active"
                                    exact
                                    to={submenu.link}
                                  >
                                    {submenu.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </ExpansionPanel>
                        )}
                      </li>
                    ))}
                  </ul>
                </ExpansionPanel>
              </Fragment>
            ))}
          </PerfectScrollbar>
        </Grid>
      </div>
    </Grid>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(SidebarNav));
