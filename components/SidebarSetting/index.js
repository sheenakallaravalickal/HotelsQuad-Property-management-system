import React, { useState } from 'react';
import { Grid, Button, FormControlLabel, Switch } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ScrollArea from 'react-scrollbar';
import './style.scss';

 // images
 import analytucs from 'images/demo/analytics.jpg';
// import salsem from 'images/demo/sales-monitoring.jpg';
// //import adcamp from 'images/demo/ad-campaign.jpg';
// import evntm from 'images/demo/event-management.jpg';
// import helpdsk from 'images/demo/help-desk-management.jpg';

 const demos = [
   {
     name: 'Analytics',
     link: '/dashboard',
     image: analytucs,
     id: 1,
   },
 ];

const SidebarSetting = ({
  open,
  setSidebarSetting,
  collapsable_menu,
  top_menu,
  squared_card,
  block_shadow,
  handleChange,
}) => (
    <Grid className={open ? 'sidebarSettingWrap open' : 'sidebarSettingWrap'}>
      <Button
        disableTouchRipple
        onClick={() => setSidebarSetting(false)}
        className="closeBtn">
        <i className="icofont-close-line"></i>
      </Button>
      <h2>Theme Customizer</h2>
      <p>This customizer allows you to see the different variations of the EasyDev. Create your own visual style for every project you do!</p>
      <ul className="colupsSidebarMenu">
        <li>
          <FormControlLabel
            className="switchStyle"
            control={<Switch
              className="switch"
              checked={collapsable_menu}
              onChange={handleChange('collapsable_menu')} value='collapsable_menu'
            />}
            label="Collapsed Menu"
          />
        </li>
        <li>
          <FormControlLabel
            className="switchStyle"
            control={<Switch
              className="switch"
              checked={top_menu}
              onChange={handleChange('top_menu')} value='top_menu'
            />}
            label="Top Menu"
          />
        </li>
        <li>
          <FormControlLabel
            className="switchStyle"
            control={<Switch
              className="switch"
              checked={squared_card}
              onChange={handleChange('squared_card')} value='squared_card'
            />}
            label="Squared Card Box"
          />
        </li>
        <li>
          <FormControlLabel
            className="switchStyle"
            control={<Switch
              className="switch"
              checked={block_shadow}
              onChange={handleChange('block_shadow')} value='block_shadow'
            />}
            label="Block's Shadows"
          />
        </li>
      </ul>
      <div className="settingSidebarDemo">
        <h3>Layouts</h3>
        <ScrollArea
          speed={1}
          className="scrollbarArea"
          contentClassName="scrollbarContent"
          horizontal={false}
        >
          <ul className="demoLinks">
            {demos.map((item, i) => (
              <li key={i}>
                <Link to={item.link}>
                  <h4>{item.name}</h4>
                  <img src={item.image} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </Grid>
  )

export default SidebarSetting;
