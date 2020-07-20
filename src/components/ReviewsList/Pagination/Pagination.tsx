import React, { ChangeEvent, MouseEvent } from "react";
import { PaginationContainer, Button, Select } from "./Pagination.styles";

type PaginationProps = {
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleOnClick: (event: MouseEvent<HTMLButtonElement>) => void;
  currentPage: number;
  maxPage: number;
};

const Pagination = ({
  handleOnChange,
  handleOnClick,
  currentPage,
  maxPage,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <Button onClick={handleOnClick} disabled={currentPage === 1}>
        Prev
      </Button>
      <Select value={currentPage} onChange={handleOnChange}>
        {[...Array(maxPage)].map((p, index) => {
          return <option key={`option${index}`}>{index + 1}</option>;
        })}
      </Select>
      <Button onClick={handleOnClick} disabled={currentPage === maxPage}>
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
