import React from 'react'
import image from "../assets/1.jpg"
import "./Login.css";
import 'material-symbols';
import { Link } from 'react-router-dom';


function Fileupload() {
    return (
        <div className='login-body'>

            <div class="login">
                <div class="avatar">
                    <img alt='avatar' src={image} />
                </div>

                <h3>Upload File</h3>

                <form class="login-form" id="fomr">

                    <div class="textbox">
                        <input id='file' className='pass' type="file" placeholder="file" />
                    </div>
                    <button type="submit" id='upload'>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                            Upload
                        </Link>
                    </button>
                    <a href="/">Go to home</a>
                </form>
            </div>
        </div>

    )
}

export default Fileupload