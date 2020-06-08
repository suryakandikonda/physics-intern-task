import React, {Component} from 'react';
import { Menu, Button, Breadcrumb } from 'semantic-ui-react';
import AccountHeader from './AccountHeader';
import AccountFixBottom from './AccountFixBottom';
import AccountSideBar from './AccountSideBar';
import { Switch, Route, Link } from 'react-router-dom';
class AccountDownloadsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
                    <React.Fragment>
                        <Breadcrumb>
                <Breadcrumb.Section ><Link to='/home'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Sessions</Breadcrumb.Section>
            </Breadcrumb>

                        <div>
                                <br></br><br></br>
                                <h3>Download Previous years question papers</h3>
                            </div>

                    </React.Fragment>
                       
                           

                        

                        

                        
                    

             

            
        );
    }
}

export default AccountDownloadsComponent;