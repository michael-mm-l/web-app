import {React, useEffect} from "react";
import Header from "../components/header";
import {colon, Number} from "../components/number";
import {timeState} from '../atom/atom'
import {useRecoilState} from "recoil";


export default function MyCanvas() {

    const [times, setTimes] = useRecoilState(timeState);
    useEffect(() => {
        draw(100, 100, 5);
        createDateTime();
    })

    const draw = (x, y, r) => {
        let mcanvas = document.getElementById("mycanvas");
        let context = mcanvas.getContext("2d");
        const marge = 80;
        context.clearRect(0, 0, 1000, 800);
        context.strokeStyle = "#1BAAAA";
        context.fillStyle = "#1BAAAA";
        //绘制 时
        for (let index = 0; index < times.hours.length; index++) {
            const num = Number[times.hours[index]];
            drawArc(context, r, num, x, y);
            y = y + marge;
        }
        // 绘制 分割符
        drawArc(context, r, colon, x, y);
        y = y + marge;
        // 绘制 分钟
        for (let index = 0; index < times.minutes.length; index++) {
            const num = Number[times.minutes[index]];
            drawArc(context, r, num, x, y);
            y = y + marge;
        }
        // 绘制分隔符

        drawArc(context, r, colon, x, y);
        y = y + marge;

        // 绘制 秒
        for (let index = 0; index < times.seconds.length; index++) {
            const num = Number[times.seconds[index]];
            drawArc(context, r, num, x, y);
            y = y + marge;
        }
    }


    const createDateTime = () => {
         setInterval(() => {
            let currentDate = new Date();
            let hour = [parseInt(currentDate.getHours() / 10), currentDate.getHours() % 10];
            let minutes = [parseInt(currentDate.getMinutes() / 10), currentDate.getMinutes() % 10];
            let seconds = [parseInt(currentDate.getSeconds() / 10), currentDate.getSeconds() % 10];
            setTimes({
                hours: hour,
                minutes: minutes,
                seconds: seconds,
            });
        }, 2000);
    }

    const drawArc = (context, r, num, x, y) => {
        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < num[i].length; j++) {
                const value = num[i][j];
                if (value === 1) {
                    context.beginPath();
                    context.arc(
                        j * (2 * r + 2) + y,
                        i * (2 * r + 2) + x,
                        r,
                        0,
                        Math.PI * 2,
                        false
                    );
                    context.closePath();
                    context.fill();
                    context.stroke();
                }
            }
        }
    }


    return (
        <div>
            <Header/>
            <canvas id="mycanvas" width="1000" height="1200"/>
        </div>
    );

}

