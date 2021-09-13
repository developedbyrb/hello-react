import React, { useReducer } from 'react';
import { Button, ButtonGroup, Badge } from 'reactstrap';

const initialState = {
    counter1: 0,
    counter2: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return {
                ...state, counter1: state.counter1 + 1
            };
        case 'decrement1':
            return {
                ...state, counter1: state.counter1 - 1
            };
        case 'increment2':
            return {
                ...state, counter2: state.counter2 + 1
            };
        case 'decrement2':
            return {
                ...state, counter2: state.counter2 - 1
            };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};
function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter1: <Badge color="secondary">{count.counter1}</Badge>
                </Button>
                <Button color="primary" outline>
                    Counter2: <Badge color="secondary">{count.counter2}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button className="inc-btn" color="dark" onClick={() => dispatch({ type: 'increment1' })}>Increament Counter1</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement1' })}>Decrement Counter1</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: 'increment2' })}>Increament Counter2</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement2' })}>Decrement Counter2</Button>
            </ButtonGroup>
            <p></p>
            <Button color="danger" onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
        </div >
    )
}

export default Counter
