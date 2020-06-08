import React, {Component} from 'react';
import { Menu, Button, Breadcrumb, Dropdown } from 'semantic-ui-react';
import AccountHeader from './AccountHeader';
import AccountFixBottom from './AccountFixBottom';
import AccountSideBar from './AccountSideBar';
import { Switch, Route, Link } from 'react-router-dom';
class AccountSessionsComponent extends Component {
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
                
                       
            <Dropdown text='Select Class' pointing className='link item'>
      <Dropdown.Menu>
        
        <Dropdown.Item>
          <Dropdown text='11th'>
            <Dropdown.Menu>
              <Dropdown.Item>
                  <Dropdown text='Physics'>
                      <Dropdown.Menu>
                          <Dropdown.Item> Physical World and Measurement</Dropdown.Item>
                          <Dropdown.Item>Kinematics</Dropdown.Item>
                          <Dropdown.Item>Laws of Motion</Dropdown.Item>
                          <Dropdown.Item>Work, Energy and Power </Dropdown.Item>
                          <Dropdown.Item> Motion of System of Particles and Rigid Body </Dropdown.Item>
                          <Dropdown.Item>Gravitation</Dropdown.Item>
                          <Dropdown.Item>Properties of Bulk Matter</Dropdown.Item>
                          <Dropdown.Item>Thermodynamics</Dropdown.Item>
                          <Dropdown.Item>Behaviour of Perfect Gas and Kinetic Theory </Dropdown.Item>
                          <Dropdown.Item>Oscillations and Waves </Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Dropdown.Item>

              <Dropdown.Item>
                  <Dropdown text='Mathematics'>
                      <Dropdown.Menu>
                          <Dropdown.Item>Sets</Dropdown.Item>
                          <Dropdown.Item>Relations and Functions</Dropdown.Item>
                          <Dropdown.Item>Trigonometric Functions</Dropdown.Item>
                          <Dropdown.Item>Principle of Mathematical Induction</Dropdown.Item>
                          <Dropdown.Item>Complex Numbers and Quadratic Equations</Dropdown.Item>
                          <Dropdown.Item>Linear Inequalities</Dropdown.Item>
                          <Dropdown.Item>Permutations and Combinations</Dropdown.Item>
                          <Dropdown.Item>Binomial Theorem</Dropdown.Item>
                          <Dropdown.Item>Sequence and Series</Dropdown.Item>
                          <Dropdown.Item>Straight Lines</Dropdown.Item>
                          <Dropdown.Item>Conic Sections</Dropdown.Item>
                          <Dropdown.Item>Introduction to Three-dimensional Geometry</Dropdown.Item>
                          <Dropdown.Item> Limits and Derivatives</Dropdown.Item>
                          <Dropdown.Item>Mathematical Reasoning</Dropdown.Item>
                          <Dropdown.Item>Statistics</Dropdown.Item>
                          <Dropdown.Item>Probability</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>


        <Dropdown.Item>
          <Dropdown text='12th'>
            <Dropdown.Menu>
              <Dropdown.Item>
                  <Dropdown text='Physics'>
                      <Dropdown.Menu>
                          <Dropdown.Item> Physical World and Measurement</Dropdown.Item>
                          <Dropdown.Item>Kinematics</Dropdown.Item>
                          <Dropdown.Item>Laws of Motion</Dropdown.Item>
                          <Dropdown.Item>Work, Energy and Power </Dropdown.Item>
                          <Dropdown.Item> Motion of System of Particles and Rigid Body </Dropdown.Item>
                          <Dropdown.Item>Gravitation</Dropdown.Item>
                          <Dropdown.Item>Properties of Bulk Matter</Dropdown.Item>
                          <Dropdown.Item>Thermodynamics</Dropdown.Item>
                          <Dropdown.Item>Behaviour of Perfect Gas and Kinetic Theory </Dropdown.Item>
                          <Dropdown.Item>Oscillations and Waves </Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Dropdown.Item>

              <Dropdown.Item>
                  <Dropdown text='Mathematics'>
                      <Dropdown.Menu>
                      <Dropdown.Item>Sets</Dropdown.Item>
                          <Dropdown.Item>Relations and Functions</Dropdown.Item>
                          <Dropdown.Item>Trigonometric Functions</Dropdown.Item>
                          <Dropdown.Item>Principle of Mathematical Induction</Dropdown.Item>
                          <Dropdown.Item>Complex Numbers and Quadratic Equations</Dropdown.Item>
                          <Dropdown.Item>Linear Inequalities</Dropdown.Item>
                          <Dropdown.Item>Permutations and Combinations</Dropdown.Item>
                          <Dropdown.Item>Binomial Theorem</Dropdown.Item>
                          <Dropdown.Item>Sequence and Series</Dropdown.Item>
                          <Dropdown.Item>Straight Lines</Dropdown.Item>
                          <Dropdown.Item>Conic Sections</Dropdown.Item>
                          <Dropdown.Item>Introduction to Three-dimensional Geometry</Dropdown.Item>
                          <Dropdown.Item> Limits and Derivatives</Dropdown.Item>
                          <Dropdown.Item>Mathematical Reasoning</Dropdown.Item>
                          <Dropdown.Item>Statistics</Dropdown.Item>
                          <Dropdown.Item>Probability</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


        </React.Fragment>

                        

                        

                        
                    

             

            
        );
    }
}

export default AccountSessionsComponent;