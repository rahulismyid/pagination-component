import React, { useState } from 'react';
import {
  StyledH1,
  StyledUl,
  StyledButton,
  StyledEllipsis,
  StyledContainer,
  StyledPaginationContainer,
} from './pagination-styled-components';

// Pagination component
const Pagination = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const generatePageNumbers = () => {
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    if (totalPages <= maxVisiblePages) {
      return [...Array(totalPages).keys()].map((number) => number + 1);
    } else {
      const startPage = Math.max(currentPage - halfVisiblePages, 1);
      const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

      let pageNumbers = [];

      if (startPage > 1) {
        pageNumbers.push(
          <StyledButton key={1} onClick={() => handlePageClick(1)}>
            1
          </StyledButton>,
          <StyledEllipsis key={'ellipsis1'}>...</StyledEllipsis>
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <StyledButton
            key={i}
            onClick={() => handlePageClick(i)}
            className={currentPage === i ? 'active' : ''}
          >
            {i}
          </StyledButton>
        );
      }

      if (endPage < totalPages) {
        pageNumbers.push(
          <StyledEllipsis key={'ellipsis2'}>...</StyledEllipsis>,
          <StyledButton
            key={totalPages}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </StyledButton>
        );
      }

      return pageNumbers;
    }
  };

  return (
    <StyledPaginationContainer>
      <StyledH1>Pagination Component</StyledH1>
      <StyledUl>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </StyledUl>

      <StyledContainer>
        <StyledButton
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </StyledButton>

        {generatePageNumbers()}

        <StyledButton
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </StyledButton>
      </StyledContainer>
    </StyledPaginationContainer>
  );
};

export default Pagination;
