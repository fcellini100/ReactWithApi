import Content from './Content';
import Header from './Header';

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Header />
      <Content />
    </div>
  );
};

export default Home;
