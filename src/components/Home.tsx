import { DropdownProvider } from '../contexts/dropdown/dropdown.provider';
import Content from './Content';
import Header from './Header';

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <DropdownProvider>
        <Header />
        <Content />
      </DropdownProvider>
    </div>
  );
};

export default Home;
