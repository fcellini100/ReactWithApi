import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from './components/ImageList';
import { ShibeParams } from './models/shibe';

function App() {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    fetchData();
    return () => {
      //TODO check what to do with this
    };
  }, []);

  async function fetchData() {
    const url = 'http://shibe.online/api/shibes';
    const params: ShibeParams = {
      count: 100,
    };
    try {
      const response = await axios.get(url, {
        params: params,
      });
      setImages(response.data as string[]);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.error('Error fetching data:', error);
      }
    }
  }
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <div className="bg-blue-100 text-blue-900 text-center py-6 z-50">
        <h1 className="text-2xl font-semibold">Hello there</h1>
      </div>

      <div className="flex-grow overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <ImageList images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
