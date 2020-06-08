import React, {Component} from 'react';
import { Menu, Button } from 'semantic-ui-react';
import AccountHeader from './AccountHeader';
import AccountFixBottom from './AccountFixBottom';
import { NavLink } from 'react-router-dom';
class AccountSideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                
        

                
                    <div className="columnn leftt">
                        
                            <NavLink activeClassName="sideBarActive" to="/home" className="sideBarNavLink"><h1>Home</h1></NavLink>
                            <NavLink activeClassName="sideBarActive" to="/sessions" className="sideBarNavLink"><h1>Sessions</h1></NavLink>
                            <NavLink activeClassName="sideBarActive" to="/downloads" className="sideBarNavLink"><h1>Downloads</h1></NavLink>
                            <NavLink activeClassName="sideBarActive" to="/home" className="sideBarNavLink"><h1>Settings</h1></NavLink>
                            <NavLink activeClassName="sideBarActive" to="/home" className="sideBarNavLink"><h1>About</h1></NavLink>
                            
                
                        
                    </div>
                    
                

            </React.Fragment>
        );
    }
}

export default AccountSideBar;