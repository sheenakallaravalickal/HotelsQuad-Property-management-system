import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Grid, Tabs, Tab, TextField, InputAdornment, MenuItem } from '@material-ui/core';
import messages from './messages';
import './style.scss';

const Card = ({
    title,
    children,
    className,
    value,
    handleChange,
    labels,
    tabMenuClassName,
    tabs,
    indicatorClass,
    search,
    searchValue,
    onChange,
    subtitle,
    name,
    link,
    dropdown,
    dropdownValue
}) => (
        <Grid className={!className ? 'cardWrapper' : `cardWrapper ${className}`}>
            {title && <Grid className={`cardHeader ${link ? 'hasBorderBottom' : ''}`}>
                <div className="cardheaderLeft">
                    <h3>{title}</h3>
                    {subtitle && <span className="subtitle">{subtitle}</span>}
                </div>
                {link && (
                    <div className="seeAll">
                        <Link>{name}</Link>
                    </div>
                )}
                {tabs && (
                    <Tabs
                        className={`cartTabs ${tabMenuClassName}`}
                        value={value}
                        classes={{
                            indicator: `indigator ${indicatorClass}`,
                        }}
                        onChange={handleChange}
                    >
                        {labels.map((label, i) => (
                            <Tab
                                disableRipple
                                disableFocusRipple
                                disableTouchRipple
                                key={i}
                                label={label}
                            />
                        ))}
                    </Tabs>
                )}
                {search && <TextField
                    variant="outlined"
                    placeholder="Search here"
                    name={name}
                    value={searchValue}
                    onChange={onChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <i className="fa fa-search"></i>
                        </InputAdornment>,
                    }}
                />}
                {dropdown && <TextField
                    select
                    className='dropDownSelect'
                    value={dropdownValue}
                    onChange={onChange}
                    SelectProps={{
                        MenuProps: {
                            className: 'dropdownSelectMenu',
                        },
                    }}
                    variant="filled"
                >
                    {dropdown.map((item, i) => (
                        <MenuItem value={item.value} key={i}> {item.name} </MenuItem>
                    ))}
                </TextField>}
            </Grid>}
            {children}
        </Grid>
    );
export default Card;
