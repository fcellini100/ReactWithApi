import React, { useState } from 'react';
import { ImageOption } from '../models/shibe';
import { useDropdown } from '../contexts/dropdown/dropdown.context';

const Dropdown: React.FC = () => {
  const [selected, setSelected] = useState<ImageOption>(ImageOption.SHIBES);
  const { setSelectedOption } = useDropdown();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ImageOption;
    setSelected(value);
    setSelectedOption(value);
  };

  const formatOption = (option: string) => {
    return option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
  };

  return (
    <div className="w-full max-w-sm">
      <select
        value={selected}
        onChange={handleChange}
        className="w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {Object.values(ImageOption).map((option) => (
          <option key={option} value={option}>
            {formatOption(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
