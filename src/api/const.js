import { md5 } from 'js-md5';

const password = 'Valantis';
const date = new Date().toISOString().slice(0, 10).split('-').join('');
const data = `${password}_${date}`;

export const token = md5(data).toString();
export const URL_API = 'https://api.valantis.store:41000';

// https://api.valantis.store:41000/
// http://api.valantis.store:40000/
