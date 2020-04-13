import React, { useState, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Card from 'components/Card/Loadable'
import Pagination from 'components/Pagination'
import { Grid, Button } from '@material-ui/core'
import SweetAlert from 'sweetalert-react';
import { toast } from 'react-toastify'
import 'sweetalert/dist/sweetalert.css';
import './style.scss'

// json 
import events from 'utils/json/events'


const searchingFor = search => event =>
    event.name.toLowerCase().includes(search.toLowerCase()) || !search;

class EventList extends Component {
    state = {
        search: '',
        pageOfItems: [],
        delete: false,
        suspend: false
    }
    deleteCartHandler = (id) => {
        let userList = this.state.pageOfItems.filter(item => item.id !== id);
        this.setState({
            pageOfItems: userList,
            delete: false
        });
        toast.success('user delete successfully')
    };


    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    deleteModalShow = () => {
        this.setState({
            delete: true
        })
    }
    deleteModalClose = () => {
        this.setState({
            delete: false
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Card
                title="All events list"
                className="basicTable"
                search
                searchValue={this.state.value}
                onChange={this.changeHandler}
                name='search'
            >
                <Grid className="tableResponsive">
                    <table className="tableWrapper tableCenter">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Event Name</th>
                                <th>Schedule</th>
                                <th>Guest</th>
                                <th>Cetagory</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pageOfItems.filter(searchingFor(this.state.search)).map((item, i) => (
                                <tr key={i}>
                                    <td>{item.userId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.schedule}</td>
                                    <td>
                                        <ul className="gestWrap">
                                            {item.gest.map((item, i) => (
                                                <li key={i}>
                                                    <img src={item.image} />
                                                    <Grid className="gestInfo">
                                                        <h4>{item.name}</h4>
                                                        <h5>{item.desig}</h5>
                                                        <span>{item.email}</span>
                                                    </Grid>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>
                                        <span className={
                                            item.cetagory === 'corporate' && 'badge-corporate badge' ||
                                            item.cetagory === 'marketing' && 'badge-marketing badge' ||
                                            item.cetagory === 'client' && 'badge-client badge' ||
                                            item.cetagory === 'others' && 'badge-others badge' ||
                                            item.cetagory === 'toure' && 'badge-toure badge'
                                        }>{item.cetagory}</span>
                                    </td>
                                    <td>
                                        <Button className="actionBtn badge-default"><i className="fa fa-eye"></i></Button>
                                        <Button onClick={this.deleteModalShow} className="actionBtn badge-danger"><i className="fa fa-trash"></i></Button>
                                        <SweetAlert
                                            show={this.state.delete}
                                            title="Delete"
                                            html
                                            text="Do you want to delete ?"
                                            type='error'
                                            onConfirm={() => this.deleteCartHandler(item.id)}
                                            onCancel={this.deleteModalClose}
                                            showCancelButton={true}
                                            showLoaderOnConfirm={true}
                                            confirmButtonText="Delete"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Grid>
                <Pagination
                    rowShow={7}
                    items={events}
                    onChangePage={this.onChangePage}
                    className="textRight mt-30"
                />
            </Card>
        )
    }
}

export default EventList;
