import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    CLEAR_USERS,
    SET_LOADING
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async (text) =>{

        setLoading(); 
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
          client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
          dispatch({
              type: SEARCH_USERS,
              payload: res.data.items
          })
      }


      const clearUsers = () => {

        dispatch({
            type: CLEAR_USERS
        })
      }
    
     const setLoading = () =>dispatch({type:SET_LOADING});

    return <GithubContext.Provider
        value = {{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers
            
        }}>

        {props.children}

        </GithubContext.Provider>


}

export default GithubState;