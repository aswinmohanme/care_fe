import React, { useState, useCallback } from 'react';
import { Grid, InputLabel, Card, CardHeader, CardContent, Button, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDispatch } from "react-redux";
import moment from 'moment';
import { navigate } from 'hookrouter';
import { Loading } from '../Common/Loading';
import { useAbortableEffect, statusType } from '../../Common/utils';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: 'auto',
    },
}));


export const SampleTestList = (props: any) => {
    const { facilityId, patientId, id } = props;
    const classes = useStyles();
    const dispatch: any = useDispatch();
    const [sampleListData, setSampleListData] = useState([{
        "id": 1,
        "status": "REQUEST_SUBMITTED",
        "result": "POSITIVE",
        "notes": "string",
        "date_of_sample": "2020-03-29T14:22:34Z",
        "date_of_result": "2020-03-29T14:22:34Z",
        "consultation": 0
    },
    {
        "id": 2,
        "status": "REQUEST_SUBMITTED",
        "result": "POSITIVE",
        "notes": "string",
        "date_of_sample": "2020-03-29T14:22:34Z",
        "date_of_result": "2020-03-29T14:22:34Z",
        "consultation": 0
    }
]);
    const [isLoading, setIsLoading] = useState(false);


    if (isLoading) {
        return <Loading />
    }

    return <div>
        <Grid container alignContent="center" justify="center">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
                {sampleListData.map((itemData,idx)=>
                <Card key={`sample-test_${idx}`} style={{marginBottom:'10px'}}>
                    <CardContent>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item xs={11} container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography>
                                        <span className="w3-text-grey">Status:</span> {itemData.status}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        <span className="w3-text-grey">Result:</span> {itemData.result}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        <span className="w3-text-grey">Notes:</span> {itemData.notes}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        <span className="w3-text-grey">Tested on :</span> {moment(itemData.date_of_result).format('lll')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        <span className="w3-text-grey">Result on:</span> {moment(itemData.date_of_result).format('lll')}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    onClick={() => {
                                        navigate(`/facility/${facilityId}/patient/${patientId}/sample-test/${itemData.id}/update`)
                                    }}>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                                </Card>)}
            </Grid>
        </Grid>
    </div>
}