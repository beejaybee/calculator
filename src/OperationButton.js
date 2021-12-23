import { ACTIONS } from "./App";

const OperationButton = ({ dispatch, operation }) => (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
        {operation}
    </button>
)

export default OperationButton