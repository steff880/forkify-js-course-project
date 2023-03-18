import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

// this function will return a Promise which will reject after a certain amount of time. This is done to prevent the fetch method from runnig forever if iternet connetion is slow
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // specify that the data is going to be in json format
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    // display message returned from server if there is a problem with fetching data from API
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// export const getJSON = async function (url) {};

// export const sendJSON = async function (url, uploadData) {
//   try {
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//     const data = await res.json();
//     // display message returned from server if there is a problem with fetching data from API
//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
