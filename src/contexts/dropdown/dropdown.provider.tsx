import { FC, ReactNode, useState } from 'react';
import { DropdownContext } from './dropdown.context';
import { ImageOption } from '../../models/shibe';

interface DropdownProviderProps {
  children: ReactNode;
}

export const DropdownProvider: FC<DropdownProviderProps> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<ImageOption>(ImageOption.SHIBES);

  return <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>{children}</DropdownContext.Provider>;
};
