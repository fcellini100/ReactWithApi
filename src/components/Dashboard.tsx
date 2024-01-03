import axios from 'axios';
import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await axios.get('https://api.example.com/data', {
          cancelToken: source.token,
        });
        console.log(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error fetching data:', error);
        }
      }
    }

    fetchData();

    return () => {
      //TODO check what to do with this

      source.cancel();
    };
  }, []);

  return <div>Test</div>;
};

export default Dashboard;
