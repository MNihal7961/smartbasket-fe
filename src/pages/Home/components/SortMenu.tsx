import React from "react";

interface SortMenuProps {
  onSortChange: (sort: string) => void;
  selectedSort: string;
}

const sortOptions = [
  "The most popular",
  "Newest",
  "Increasing price",
  "Decreasing price",
  "No. reviews",
  "Discount %",
];

const SortMenu: React.FC<SortMenuProps> = ({ onSortChange, selectedSort }) => {
  return (
    <div
      id="dropdownSort1"
      className="z-50 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
      data-popper-placement="bottom"
    >
      <ul
        className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
        aria-labelledby="sortDropdownButton"
      >
        {sortOptions.map((option) => (
          <li key={option}>
            <button
              type="button"
              className={`group inline-flex w-full items-center rounded-md px-3 py-2 text-sm ${selectedSort === option ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"}`}
              onClick={() => onSortChange(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortMenu; 