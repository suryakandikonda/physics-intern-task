import React, {Component} from 'react';
import { Menu, Button } from 'semantic-ui-react';
import AccountHeader from './AccountHeader';
class AccountFixBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                
                    
                        <div className="bottomFixContent">
                            <div className="boxOne">
                                <h3>Topics Covered</h3>
                            </div>
                            <div className="boxTwo">
                                <h3>Topics Covered</h3>
                            </div>
                        </div>
                
                

            </React.Fragment>
        );
    }
}

export default AccountFixBottom;