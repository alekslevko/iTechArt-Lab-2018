import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles'; 
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { withStyles, Button }  from '@material-ui/core';

const CountersParent = ({onAddCounterBtnClick, onDeleteCounterBtnClick, onSetDefaultsBtnClick, counterArr, classes}) => {
    return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={() => onAddCounterBtnClick()}><AddIcon /></Button>
            <Button variant="fab" color="secondary" aria-label="Delete" className={classes.button} onClick={() => onDeleteCounterBtnClick()}><DeleteIcon /></Button>
            <Button variant="fab" color="default" className={classes.button} onClick={() => onSetDefaultsBtnClick()}><ThreeSixtyIcon /></Button>
            <div>
                {counterArr}
            </div>
        </div>
    )
} 

CountersParent.propTypes = {
    classes: PropTypes.object.isRequired,
    onAddCounterBtnClick: PropTypes.func,
    onDelCounterBtnClick: PropTypes.func,
    onDefaultCounterBtnClick: PropTypes.func,
    counters: PropTypes.array
}

export default withStyles(styles)(CountersParent);