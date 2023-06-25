import React, { Component } from 'react'
import Cookies from 'js-cookie'
class Logout extends Component {
    constructor(props) {
        super(props);
        Cookies.remove('isLoggedIn');
        Cookies.remove('id');
        window.location = '/';
    }
}
export default Logout