import React from 'react';

function UserItems (props) {

        const {avatar_url, html_url, login} = props.user;

        return (
            <div className= 'card text-center'>
                <img src={avatar_url} alt='' className='round-img' style = {{width: '60px'}} />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className = 'btn btn-dark btn-small my-1' >More</a>
                </div>
            </div>
        )
    }

export default UserItems
