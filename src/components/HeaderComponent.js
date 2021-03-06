import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Header, Image, Modal, Button } from 'semantic-ui-react';
import Banner from '../assets/images/banner.jpg';
import SecondImage from '../assets/images/img2.jpg';
import MyAccountMain from './MyAccountMain';

class HeaderComponent extends Component {
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
                        <Modal trigger={<Button>Login</Button>}>
                            <Modal.Header>Login</Modal.Header>
                            <Modal.Content>
                            
                            <Modal.Description>
                            
                            </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <img src={Banner} width="100%" height="100%"/>

                <Container text>
                    <Header as="h3">
                        Whatever your style, travel your way
                    </Header>
                    <p>
                    Proin rutrum nunc eget quam gravida, id dictum augue viverra. In non lectus in ex congue aliquam. Aenean viverra quam at dignissim egestas. In pharetra finibus elit ut tincidunt. Mauris tincidunt ligula et purus commodo, eget finibus odio auctor. Aliquam sit amet auctor sem, quis convallis odio. Curabitur posuere nibh id erat tempus, at consectetur nibh rhoncus. Donec viverra, sem eget accumsan molestie, erat tellus efficitur arcu, vel dapibus libero ex sed sem. Quisque viverra tortor iaculis sagittis aliquet. Cras porttitor scelerisque ante, eu hendrerit nisi pellentesque sit amet.<br></br>
                    </p>
                    <p>
                    Curabitur blandit mi dolor. Phasellus sit amet pellentesque enim, in tincidunt tortor. Proin ornare dolor blandit scelerisque dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar ut nisl id feugiat. Praesent id lectus risus. Aliquam tincidunt rutrum nisi. Quisque ultrices libero ut porttitor semper. Cras a vehicula magna. Sed at leo venenatis, rutrum augue vel, semper sem. Mauris id leo bibendum, ornare libero id, efficitur lectus.<br></br>
                    </p>
                    <p>
                    Curabitur blandit mi dolor. Phasellus sit amet pellentesque enim, in tincidunt tortor. Proin ornare dolor blandit scelerisque dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar ut nisl id feugiat. Praesent id lectus risus. Aliquam tincidunt rutrum nisi. Quisque ultrices libero ut porttitor semper. Cras a vehicula magna. Sed at leo venenatis, rutrum augue vel, semper sem. Mauris id leo bibendum, ornare libero id, efficitur lectus.<br></br>
                    </p>
                    <img src={SecondImage} width="200px" height="200px"/>
                    <p>
                    Proin rutrum nunc eget quam gravida, id dictum augue viverra. In non lectus in ex congue aliquam. Aenean viverra quam at dignissim egestas. In pharetra finibus elit ut tincidunt. Mauris tincidunt ligula et purus commodo, eget finibus odio auctor. Aliquam sit amet auctor sem, quis convallis odio. Curabitur posuere nibh id erat tempus, at consectetur nibh rhoncus. Donec viverra, sem eget accumsan molestie, erat tellus efficitur arcu, vel dapibus libero ex sed sem. Quisque viverra tortor iaculis sagittis aliquet. Cras porttitor scelerisque ante, eu hendrerit nisi pellentesque sit amet.<br></br>
                    </p>
                    <p>
                    Curabitur blandit mi dolor. Phasellus sit amet pellentesque enim, in tincidunt tortor. Proin ornare dolor blandit scelerisque dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar ut nisl id feugiat. Praesent id lectus risus. Aliquam tincidunt rutrum nisi. Quisque ultrices libero ut porttitor semper. Cras a vehicula magna. Sed at leo venenatis, rutrum augue vel, semper sem. Mauris id leo bibendum, ornare libero id, efficitur lectus.<br></br>
                    </p>
                    <p>
                    Curabitur blandit mi dolor. Phasellus sit amet pellentesque enim, in tincidunt tortor. Proin ornare dolor blandit scelerisque dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar ut nisl id feugiat. Praesent id lectus risus. Aliquam tincidunt rutrum nisi. Quisque ultrices libero ut porttitor semper. Cras a vehicula magna. Sed at leo venenatis, rutrum augue vel, semper sem. Mauris id leo bibendum, ornare libero id, efficitur lectus.<br></br>
                    </p>
                </Container>
            </React.Fragment>
        );
    }
}

export default HeaderComponent;