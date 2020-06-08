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
                                <hr></hr>
                            </div>
                            <div className="boxTwo">
                                <h3>Recent Activities</h3>
                                <hr></hr>
                            </div>
                            
                            
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <div className="boxThree">
                                <h3>Performance</h3>
                                <hr></hr>
                            </div>

                        <div className="BottomSignature">
                            <h4>EDUNOMICS</h4>
                            <p>contact@edunomics.in</p>
                        </div>
                
                

            </React.Fragment>
        );
    }
}

export default AccountFixBottom;