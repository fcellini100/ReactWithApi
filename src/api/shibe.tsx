import axios from 'axios';
import { ShibeParams } from '../models/shibe';

export const fetchImages = (type: string): Promise<string[]> => {
  const url = `http://shibe.online/api/${type}`;
  const params: ShibeParams = {
    count: 100,
  };
  return axios.get(url, { params: params }).then((response) => response.data);
};
