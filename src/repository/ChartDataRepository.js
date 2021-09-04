import axios from 'axios';

export async function getCpuUsages() {
    const response = await axios.get(
        `/api/cpu/list/20`
    );
    return response.data;
}

export async function getCpuUsage(logTime) {
    const response = await axios.get(
        `/api/cpu/time/${logTime}`
    );


    return response.data;
}