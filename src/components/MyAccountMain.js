import React, {Component} from 'react';
import { Menu, Button, } from 'semantic-ui-react';
import AccountHeader from './AccountHeader';
import AccountFixBottom from './AccountFixBottom';
import AccountSideBar from './AccountSideBar';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AccountHomeComponent from './AccountHomeComponent';
import AccountSessionsComponent from './AccountSessionsComponent';
import AccountDownloadsComponent from './AccountDownloadsComponent';
class MyAccountMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <AccountHeader />
        

                <div className="roww">
                    <AccountSideBar />

                    <div className="columnn rightt">
                    

                        <div className="topChangeContent">
                        <Switch>
                            <Route path="/home" component={AccountHomeComponent} />
                            <Route path="/sessions" component={AccountSessionsComponent} />
                            <Route path="/downloads" component={AccountDownloadsComponent} />
                            <Redirect to="/home" />
                        </Switch>
                        </div>

                        <AccountFixBottom />
                    </div>

                    
                </div>

            </React.Fragment>
        );
    }
}

export default MyAccountMain;