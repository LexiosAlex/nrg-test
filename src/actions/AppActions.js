// Почему redux-thunk?
//1)В вакансии на junior'а не было требования на redux-saga (пруф: https://spb.hh.ru/vacancy/33514471?query=Junior%20frontend)
//2)На собеседовании тоже никто не сказал про redux-saga
//3)Время было ограниченно, я не успел изучить матераил в достаточной мере по redux-saga.(2 дня на тестовое задание)

import getRandomArrayValue from "../helpers/getRandomArrayValue"

export const asyncFetchPosts = subreddit => dispatch => {
  dispatch({ type: "LOADING_SUBREDDIT_POSTS" });
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => {
      return res.json();
    })
    .then(json => {
      dispatch({
        type: "SUBREDDIT_POSTS_LOADED_SUCCESS",
        activePost: getRandomArrayValue(json.data.children)
      });
    })
    .catch(err => {
      dispatch({ type: "SUBREDDIT_POSTS_LOADING_ERROR", err });
    });
};

export const selectSubreddit = (subreddit) => {
  return {
    type: "SELECT_SUBREDDIT",
    subReddit: subreddit,
  }
};

export const deSelectSubreddit = () => {
  return {
    type: "DESELECT_SUBREDDIT"
  }
};
