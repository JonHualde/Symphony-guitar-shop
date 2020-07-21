import React from 'react';

import UserLayout from '../HOC/user.js'
import Button from '../utils/button.js'


const UserDashboard = () => {
    return (
        <UserLayout>
            <div>
                <div className='user_nfo_panel'>
                    <h1>User information</h1>
                    <div>
                        <span>Name</span>
                        <span>Lastname</span>
                        <span>Email</span>
                    </div>
                    <Button 
                        type='default'
                        title='Edit account info'
                        linkTo='/user/profile'
                    />
                </div>

                <div className='user_nfo_panel'>
                    <h1>Purchase history</h1>
                    <div className='user_product_block_wrapper'>
                        History
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default UserDashboard;