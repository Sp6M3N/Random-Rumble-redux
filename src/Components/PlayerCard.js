import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import connect from "react-redux/es/connect/connect";

const mapStateToProps = (state, ownProps) => {
    return {props: ownProps}
};

const PlayerConnect = ({ props }) => {
    if(props.player.pv >= 0){
    return (
        <div key={props.player.id} className="col-sm-3 card center" id={`joueur${props.player.id}`}>
            <div className="card-body text-center">
                <h5 className="card-title">{props.player.name}</h5>
                <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={props.player.mana} pvMax={props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div >
                        <ButtonCapacity player={props.player} />
                        <ButtonCapacity player={props.player} />
                        <ButtonCapacity player={props.player} />
                        <ButtonCapacity player={props.player} />
                    </div>
                </div >
            </div >
        </div >
    )}else{
        return (
            <div key={props.player.id} className="col-sm-3 card center" id={`joueur${props.player.id}`}>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.player.name}</h5>
                    <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={props.player.mana} pvMax={props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="row ">
                        <div className="card-body text-center">
                            You died
                        </div>
                    </div >
                </div >
            </div >
        )}
}

const PlayerCard = connect(mapStateToProps)(PlayerConnect);


export default PlayerCard;