import axios from 'axios';

export const REGISTER_DEV  = "REGISTER_DEV";

export const registerDev = developer => dispatch => {
  console.log('ACTION FILE', developer);
}