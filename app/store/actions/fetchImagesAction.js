import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE
  } from "../constants";
  
  export const fetchingImagesRequest = () => {
    return {
      type: FETCH_IMAGES_REQUEST,
      isFetching: true
    };
  };
  
  export const fetchingImagesSucces = json => {
    return {
      type: FETCH_IMAGES_SUCCESS,
      isFetching: false,
      payload: json
    };
  };
  
  export const fetchingImagesFailure = error => {
    return {
      type: FETCH_IMAGES_FAILURE,
      isFetching: false,
      payload: error
    };
  };
  
  export const fetchImages = () => async dispatch => {
    dispatch(fetchingImagesRequest());
  
    try {
      const response = await fetch(`https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`);
      const json = await response.json();
      dispatch(fetchingImagesSucces(json));
    } catch (error) {
      dispatch(fetchingImagesFailure(error));
    }
  };
  