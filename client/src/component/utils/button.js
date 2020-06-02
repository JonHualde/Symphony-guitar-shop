import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = ( props ) => {
    console.log(props, "props here");
    const buttons = () => {
        let template = '';

        switch(props.type){
            case "default": 
                template = 
                <Link to={props.linkTo} className="link_default" {...props.addStyles}> 
                    {props.title} 
                </Link>
            break;
            default:
                template = '';
        }

        return template;
    }


    return (
        <div className='my_link'>
            {buttons()}
        </div>
    );
};

export default MyButton;