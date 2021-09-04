import {useEffect, useState} from 'react'
import {
    AreaChart,
    CartesianGrid,
    YAxis,
    Tooltip,
    Area,
    XAxis,
    ResponsiveContainer
} from "recharts";
import SimpleSelect from "../widget/SimpleSelect";
import {useDataContext} from "../context/ChartDataContext";
import {format, toDate} from "date-fns";
import {ko} from "date-fns/locale";

function RealTimeAreaChart() {

    const [chartTitle] = useState('CPU Usage');
    const data = useDataContext();

    useEffect(() => {
        console.log()
    }, [data]);

    return (
        <>
            <div>
                <h2>
                    {chartTitle}
                </h2>
            </div>
            <SimpleSelect />
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}/>
                            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3"/>
                    <YAxis dataKey="cpuusage"/>
                    <Tooltip/>
                    <Area dataKey="cpuusage" stroke="#2451B7" fill="url(#color)" isAnimationActive={false}/>

                    <XAxis
                        dataKey="logTime"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(str) => {
                            const date = toDate(str * 1000);

                            if (date.getSeconds() % 5 === 0) {
                                return format(date, "do, HH:mo:so", {locale: ko});
                            }
                            return "";
                        }}
                    />

                    <YAxis
                        datakey="cpuusage"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        domain={[0,100]}
                        tickFormatter={(number) => number}
                    />

                    <Tooltip/>

                    <CartesianGrid opacity={0.1} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}

export default RealTimeAreaChart;
