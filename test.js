


let x = [3,3,3,3]
let y= [1,2,4,5]
let z = [10,8,4,6]

let trace = {
        x : x,
        y : y,
        z: z,
        hoverinfo: 'none',
        ine: {
           width: 3,
        },
        mode: 'lines',
        type: 'scatter'}
        
Plotly.newPlot("graph",[trace]);