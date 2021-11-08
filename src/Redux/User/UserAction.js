import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "./UserType";
import axios from 'axios';
import WebService from "../../Utility/WebService";


export const fetchUsersRequest =()=>
{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess =users=>
{
    return{
        type:FETCH_USERS_SUCCESS ,
        payload: users
    }
}

export const fetchUsersFailure =error=>
{
    return{
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUser = ()=>{
    debugger;
return async (dispatch)=>{
    debugger;

 dispatch(fetchUsersRequest);
 try {
    debugger;

    let action = "posts";
    let response = await WebService.get(action);
    if (response) {
        dispatch(fetchUsersSuccess(response))
    }
  } catch (error) {
      dispatch(fetchUsersFailure(error))
  }
}
}