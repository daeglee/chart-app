import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default function SimpleSelect() {
    const classes = useStyles();
    const [selectValue, setSelectValue] = React.useState('');

    const handleChange = (event) => {
        setSelectValue(event.target.value);
    };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={selectValue}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={0}>
                        <em>real time</em>
                    </MenuItem>
                    <MenuItem value={1}>minute</MenuItem>
                    <MenuItem value={2}>hour</MenuItem>
                    <MenuItem value={3}>day</MenuItem>
                    <MenuItem value={4}>month</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
