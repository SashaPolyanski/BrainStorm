import React, { FC, useState } from 'react';

import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

type PaginationType = {
  totalCount: number;
  pageSize: number;
  onChangePageHandler: (page: number) => void;
};

const Pagination = ({ totalCount, pageSize, onChangePageHandler }: PaginationType) => {
  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <ReactPaginate
        className={s.main}
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={e => onChangePageHandler(e.selected + 1)}
        pageRangeDisplayed={5}
      />
    </div>
  );
};

export default Pagination;
