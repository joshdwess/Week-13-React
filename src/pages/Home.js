import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

export default class Home extends Component {
    render() {
        return ( 
           <> 
           <Navbar />, 
           <Login/>
           </>
        )
    }
}