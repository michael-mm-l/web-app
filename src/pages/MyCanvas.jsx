import React from 'react'
import Header from '../components/header';
import { Number} from '../components/number'


export default class MyCanvas extends React.Component { 
   
    constructor(props) { 
        super(props)
        this.state = {
            x: 100,
            y: 100,
        }
    }

    componentDidMount() { 
        this.draw(this.state.x,this.state.y,5);
    }
    draw(x, y,r) { 
        let mcanvas  = document.getElementById("mycanvas");
        let context = mcanvas.getContext("2d");
        for (let index = 0; index < Number.length; index++) {
            const num = Number[index];
            for (let i = 0; i < num.length; i++) {
                for (let j = 0; j < num[i].length; j++) {
                    const value = num[i][j];
                    if (value === 1) { 
                        // context.clearRect(0, 0, 1000, 800);
                        context.fillStyle = '#000000';
                        context.beginPath();
                        context.arc( j*(2*r+2)+y,i*(2*r+2)+x, r, 0, Math.PI * 2, false);
                        context.closePath();
                        context.stroke();
                        
                    }
                }   
            }

            y = y + 80;
            
        }
        
    }

    move() { 
    }

    render() { 
        return (
            <div>
                <Header />
                <button onClick='move'>移动</button>
                <canvas id='mycanvas' width='1000' height='800'/>
            </div>
        )
    }

}