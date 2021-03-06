import React, { Fragment, useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext';

const Search = ({setAlert}) => {
    
    const githubContext = useContext(GithubContext)
    const [text,setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter something','light');
        }
        else{
            githubContext.searchUsers(text);
           setText('');
        }
    }

    const onChange = (e) => {
        setText(e.target.value);
    }
        return (
            <Fragment>
            <form className='form' onSubmit = {onSubmit}>
                <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {githubContext.users.length > 0 && <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>}
            </Fragment>
        )
}

export default Search
