import React, {Component} from 'react';
import { Menu, Button } from 'semantic-ui-react';
class AccountHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Menu size='tiny'>
                    <Menu.Item name='Welcome to Edunomics' />
                    <Menu.Menu position='right'>
            
                        <Menu.Item>
                            <Button primary>Logout</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

            </React.Fragment>
        );
    }
}

export default AccountHeader;