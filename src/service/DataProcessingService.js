import {useDataContext, useDispatchContext} from "../context/ChartDataContext";
import {useEffect, useRef} from "react";
import {getCpuUsage, getCpuUsages} from "../repository/ChartDataRepository";
import {useInterval} from "../util/useInterval";


export function DataProcessingService(){
    const state = useDataContext();
    const dispatch = useDispatchContext();

    const fetchData = () => {
        getCpuUsages().then(
            (result) =>{
                dispatch(result);
            }

        );
    };
    useEffect(() => {
        fetchData();
    }, []);
    useInterval(async () => {
        const value = state[state.length - 1].logTime;

        getCpuUsage(value).then( (result) =>
            dispatch((prevState) => [...prevState, result].slice(1))
        );

    }, 1000);

    return(
        <div/>
    );
}