import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 3;

  const generatePageNumbers = () => {
    if (totalPages <= pagesToShow) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (startPage > 1) {
      pages.push(1, "...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      pages.push("...", totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        className={`${
          currentPage === 1
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-primary-main text-white"
        } px-2 py-1 rounded-lg mr-2`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <div className="inline-flex gap-1 items-center">
        {generatePageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() =>
              onPageChange(typeof page === "number" ? page : currentPage)
            }
            className={`${
              typeof page === "number" && currentPage === page
                ? "bg-primary-main text-white"
                : "bg-gray-300 text-gray-700"
            } px-2 py-1 rounded-lg`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-primary-main text-white"
        } px-2 py-1 rounded-lg ml-2`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
