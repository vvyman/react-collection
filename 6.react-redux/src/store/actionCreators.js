import axios from 'axios';
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from "./constants.js";

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const incAction = () => ({
  type: INCREMENT,
});

export const decAction = () => ({ type: DECREMENT });

export const changeBannerAction = (banner) => ({ type: CHANGE_BANNER, banner });

export const changeRecommendAction = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommend,
});


// react-thunk 发起异步请求
export const getHomeMultiDataAction = (dispatch, getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannerAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  });
}

// redux-saga
export const fetchHomeMultiDataAction = () => {
 return {type: FETCH_HOME_MULTIDATA}
}