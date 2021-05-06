import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { removeFriend } from '../../actions/forms';

const FriendsList = (props) => {
    const handleOnClick = (friend) => {
        props.removeFriend(friend);
    };

    return (
        <Container>
            <ListGroup style={{ width: '600px', margin: '15px' }}>
                {props.friends.map((friend) => {
                    return (
                        <ListGroup.Item key={friend.id}>
                            <span style={{ float: 'left' }}>
                                {friend.attributes.name + ' - ' + friend.attributes.email}
                            </span>
                            <span style={{ float: 'right' }}>
                                <Button variant="secondary" size="sm" onClick={() => handleOnClick(friend)}>
                                    Add Friend
                                </Button>
                            </span>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </Container>
    );
};

export default connect(null, { removeFriend })(FriendsList);
