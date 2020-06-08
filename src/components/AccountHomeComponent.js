import React, {Component} from 'react';
import { Menu, Button } from 'semantic-ui-react';
import AccountHeader from './AccountHeader';
import AccountFixBottom from './AccountFixBottom';
import AccountSideBar from './AccountSideBar';
import { Switch, Route } from 'react-router-dom';
class AccountHomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
                
                       
                            <div>
                                <br></br><br></br>
                                <div className="HomeBox">
                                    <div className="HomeBoxContent">
                                        <h3>All Interactive Sessions</h3>
                                        <h3>Practice Questions</h3>
                                        <h3>Downloads</h3>
                                        <h3>Ask Questions</h3>
                                    </div>
                                    
                                </div>
                            </div>

                        

                        

                        
                    

             

            
        );
    }
}

export default AccountHomeComponent;