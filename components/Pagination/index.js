import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './style.scss';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    const { items } = this.props;
    let { pager } = this.state;
    if (page < 1 || page > pager.totalPages) {
      return;
    }
    pager = this.getPager(items.length, page);
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    this.setState({ pager });
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;

    pageSize = pageSize || this.props.rowShow;

    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage;
    let endPage;
    if (totalPages <= this.props.rowShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 6) {
      startPage = 1;
      endPage = this.props.rowShow;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i,
    );
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  render() {
    const { pager } = this.state;
    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <ul
        className={
          this.props.className
            ? `${this.props.className} paginationWrapper`
            : 'paginationWrapper'
        }
      >
        <li
          className={pager.currentPage === 1 ? 'disabled paginat' : 'paginat'}
        >
          <Button
            disabled={pager.currentPage === 1}
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            <i className="fa fa-angle-left" />
          </Button>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage === page ? 'active' : ''}
          >
            <Button onClick={() => this.setPage(page)}>{page}</Button>
          </li>
        ))}
        <li
          className={
            pager.currentPage === pager.totalPages
              ? 'disabled paginat'
              : 'paginat'
          }
        >
          <Button
            disabled={pager.currentPage === pager.totalPages}
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            <i className="fa fa-angle-right" />
          </Button>
        </li>
      </ul>
    );
  }
}
export default Pagination;
