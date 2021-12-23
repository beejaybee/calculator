import { ACTIONS } from "./App";

const DigitButton = ({dispatch, digit}) => (
    <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
)

export default DigitButton;