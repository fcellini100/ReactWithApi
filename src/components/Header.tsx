import dancingJesus from '../assets/images/dancing_jesus.gif';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-[#85b8c8] text-center py-6 px-5 md:px-20">
      <img className="h-24 md:h-40 mb-4 md:mb-0 order-first md:order-none obnoxious-hover" src={dancingJesus} alt="Dancing Jesus" />
      <Dropdown />
    </div>
  );
};

export default Header;
