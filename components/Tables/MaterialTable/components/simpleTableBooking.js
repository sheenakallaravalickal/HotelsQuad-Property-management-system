import React from 'react';
import { Table, TableBody, TableFooter, TableRow, TableHead, TableCell } from '@material-ui/core';
import { Grid } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';

const SimpleTableBooking = ({ tablehead, tablebody, className }) => {
  return (
    <Grid className='tableResponsive'>
      <Table
        className={`tableWrapper ${className ? className : ''}`}>
        <TableHead>
          <TableRow>
            {tablehead.map(item => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tablebody.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1} </TableCell>
              {/* <TableCell>
                                <img className="imgAvatar" src={item.image} alt="" />
                            </TableCell> */}
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                {item.status && <span className={`badge 
                                                ${
            item.status === 'arrived' && 'badge-default' ||
                                    item.status === 'departed' && 'badge-danger' ||
                                    item.status === 'confirmed' && 'badge-success' ||
                                    item.status === 'pending' && 'badge-pend'
            }
                                                `}>
                  {item.status}
                </span>}
              </TableCell>
        <TableCell>
       <Link to="/edit-booking"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 30 }}>
        <EditIcon />
      </Fab> </Link>
      <Fab color="secondary" aria-label="delete" size="small">
        <DeleteIcon />
      </Fab> 
            {/* <Icon className="fa fa-pencil" color="primary" />     <Icon className="fa fa-trash" color="primary" /> */}
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
}
export default SimpleTableBooking