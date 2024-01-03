import axios from 'axios';
import { ShibeParams } from '../models/shibe';

export const fetchImages = (): Promise<string[]> => {
  const url = 'http://shibe.online/api/shibes';
  const params: ShibeParams = {
    count: 100,
  };
  return axios.get(url, { params: params }).then((response) => response.data);
};
