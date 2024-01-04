import dancingJesus from '../assets/images/dancing_jesus.gif';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <div className="bg-blue-100 text-blue-900 text-center py-6 z-50 flex flex-row-reverse md:flex-row justify-center md:justify-between gap-5 items-center px-20 flex-wrap">
      <Dropdown />
      <img className="h-40" src={dancingJesus} alt="Dancing Jesus" />
    </div>
  );
};

export default Header;
