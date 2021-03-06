/**
 * Created by akash on 13/06/16.
 */

import React, {Component} from 'react'

export default class Sidebar extends Component {
    render(){
        return(
            <div className="main-sidebar">
                <div className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="../../../node_modules/admin-lte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Mahavir Electronics</p>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
        <span className="input-group-btn">
          <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
        </span>
                        </div>
                    </form>

                    <ul className="sidebar-menu">
                        <li className="header">HEADER</li>
                        <li className="active"><a href="#"><span>Link</span></a></li>
                        <li><a href="#"><span>Another Link</span></a></li>
                        <li className="treeview">
                            <a href="#"><span>Multilevel</span> <i className="fa fa-angle-left pull-right"></i></a>
                            <ul className="treeview-menu">
                                <li><a href="#">Link in level 2</a></li>
                                <li><a href="#">Link in level 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    )
    }
}