import React, { createContext, useContext } from 'react';
import { ImageOption } from '../../models/shibe';

interface DropdownContextProps {
  selectedOption: ImageOption;
  setSelectedOption: React.Dispatch<React.SetStateAction<ImageOption>>;
}

export const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
