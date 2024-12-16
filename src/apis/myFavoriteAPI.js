/* src/apis/myFavoriteAPI.js */
/* 마이페이지 즐겨찾기; MyDepositPage, MyInstallmentPage */

import axios from 'axios';
import { PATH } from 'src/utils/path';


const getSessionToken = () => {
    // return localStorage.getItem('sessionToken'); 
    // 그냥 토큰키 넣어서 함.
    return "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwiY2F0ZWdvcnkiOiJhY2Nlc3MiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDc3MjQ1LCJleHAiOjE3MzQxNjM2NDV9.t2-TjsJ4_5NaBRkWh6ozjjlo9PQv-Hx6Tzf607uwSuo";
  };



const getFavorite= async () => {
    const response = await axios.get(`${PATH.SERVER}/api/favorite/getFavorite`, { 
        headers : { 'Authorization' : `Bearer ${getSessionToken()}`}
        // 예금인지 적금인지도 보내야 함
      });
      return response.data.result;
};

const searchFavorite= async () => {
    const response = await axios.get(`${PATH.SERVER}/api/favorite/searchFavorite`, { 
        headers : { 'Authorization' : `Bearer ${getSessionToken()}`}
      });
      return response.data.result;
};

const deleteFavorite= async () => {
    const response = await axios.get(`${PATH.SERVER}/api/favorite/deleteFavorite`, { 
        headers : { 'Authorization' : `Bearer ${getSessionToken()}`}
      });
      return response.data.result;
};




export { getFavorite, searchFavorite, deleteFavorite };
