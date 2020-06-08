import React, {Component} from 'react';
import { Menu, Button } from 'semantic-ui-react';
import AccountHeader from './AccountHeader';
import AccountFixBottom from './AccountFixBottom';
import AccountSideBar from './AccountSideBar';
import { Switch, Route, Link } from 'react-router-dom';
import Session from '../assets/images/session.png';
import Question from '../assets/images/question.png';
import Download from '../assets/images/download.png';
import Paper from '../assets/images/practice.png';
class AccountHomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
                
                       
                            <div>
                                <br></br><br></br>
                                <div className="HomeBox">
                                    <Link to = '/sessions'>
                                    <div className="HomeBoxContentOne">
                                        <img src={Session} />
                                        <h3>All Interactive Sessions</h3>
                                    </div>
                                    </Link>

                                    <Link to = '/home'>
                                    <div className="HomeBoxContentOne">
                                        <img src={Paper} />
                                        <h3>Practice Questions</h3>
                                    </div>
                                    </Link>
                                    
                                </div>

                                <div className="HomeBoxTwo">
                                    <Link to='/downloads'>
                                    <div className="HomeBoxContentTwo">
                                        <img src={Download} />
                                        <h3>Downloads</h3>
                                    </div>
                                    </Link>

                                    <Link to = '/home'>
                                    <div className="HomeBoxContentTwo">
                                        <img src={Question} />
                                        <h3>Ask Questions</h3>
                                    </div>
                                    </Link>
                                    
                                </div>
                            </div>

                        

                        

                        
                    

             

            
        );
    }
}

export default AccountHomeComponent;