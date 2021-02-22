import axios from 'axios';
import { PROD } from '../constants/ActionTypes';

export default axios.create({
  baseURL: `${PROD}`,

});
