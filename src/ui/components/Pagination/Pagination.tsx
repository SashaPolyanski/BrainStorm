import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

// type PaginationType = {
//   totalCount: number
//   pageSize: number
//   currentPage: number
//   onChangedPage: (n: number) => void
// };

const Pagination = () => {
  const [totalCount, setTotalCount] = useState(50);
  const [packsPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(totalCount / packsPerPage);
  // const changePage = ({ packsPerPage }) => {
  //   setPageNumber(packsPerPage);
  // };
  return (
    <div>
      <ReactPaginate
        className={s.main}
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        pageCount={pageCount}

        // onPageChange={e => onChangePage(e.selected + 1)}
        // pageRangeDisplayed={4}
        // forcePage={currentPage - 1}
        // renderOnZeroPageCount={() => (null)}
      />
    </div>
  );
};

export default Pagination;
