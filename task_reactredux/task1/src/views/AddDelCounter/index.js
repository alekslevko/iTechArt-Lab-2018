import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles'; 
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { withStyles, Button }  from '@material-ui/core';

const AddDelCounter = ({onAddBtnClick, onDelBtnClick, onDefBtnClick, counters, classes}) => {
    return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={() => onAddBtnClick()}><AddIcon /></Button>
            <Button variant="fab" color="secondary" aria-label="Delete" className={classes.button} onClick={() => onDelBtnClick()}><DeleteIcon /></Button>
            <Button variant="fab" color="default" className={classes.button} onClick={() => onDefBtnClick()}><ThreeSixtyIcon /></Button>
            <div>
                {counters}
            </div>
        </div>
    )
} 

AddDelCounter.propTypes = {
    classes: PropTypes.object.isRequired,
    onAddBtnClick: PropTypes.func,
    onDelBtnClick: PropTypes.func,
    onDefBtnClick: PropTypes.func,
    counters: PropTypes.array
}

export default withStyles(styles)(AddDelCounter);

