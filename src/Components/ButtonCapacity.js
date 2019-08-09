import React from 'react';
import connect from "react-redux/es/connect/connect";
import {hitMonster, hitBack} from "../actions"


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hitMonster: hit => dispatch(hitMonster(5)),
        hitBack: hit => dispatch(hitBack({hit: 5, target: ownProps.player.id }))
    };
};

const ButtonCapacityConnect = ({hitMonster, hitBack}) => {
    const combat = () => {
        hitMonster();
        hitBack();
        console.log('aie !')
    };
    return (
        <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
            hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )
};

// const ButtonCapacity =  connect(null, mapDispatchToProps)(ButtonCapacityConnect);
// export default ButtonCapacity;

export default connect( null, mapDispatchToProps )(ButtonCapacityConnect);