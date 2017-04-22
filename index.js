
let url = "https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json"
let data =[];
let yaddress = []
let zaddress = []
let country = []
let xaddress = []
let imag = []
Plotly.d3.json(url, function(json){
    var link = json['links'];
    var nodes = json['nodes'];
    for (var i =0; i <nodes.length; i++){
        xaddress.push(i)
        yaddress.push(Math.random()* (nodes.length + 1));
        zaddress.push(Math.random()* (nodes.length + 1));
        country.push(nodes[i]['country'])
        imag.push(
            {"source" : "https://flags.fmcdn.net/data/flags/w1160/"+ nodes[i]["code"]+".png",
            "x": i,
            "y": yaddress[yaddress.length - 1],
            "z": zaddress[zaddress.length - 1],
            "sizex": 0.2,
            "sizey": 0.2,}
            )
    }
     for (var i=0; i<link.length; i++){
     let trace = {
        x : [link[i]['source'],link[i]['target']],
        y : [yaddress[link[i]['source']],yaddress[link[i]['target']]],
        z:  [zaddress[link[i]['source']],zaddress[link[i]['target']]],
        ine: {
           width: 3,
        },
        mode: 'lines',
        type: 'scatter3d'
    }
         data.push(trace)
     }
     
     
    let trace = {
        x : xaddress,
        y : yaddress,
        z : zaddress,
        hoverinfo: 'text',
        type: 'scatter3d',
        marker: {size : 1},
        symbol: Plotly.Icons['coffee'],
        text: country
    }
    data.push(trace)

  layout = {
        hovermode:'closest',
        title:'Geographic Networks',
        xaxis:{zeroline:false, title: 'Value A'},
        yaxis:{zeroline:false, title: 'Value B'},
        images: imag,
     };
 
 console.log(imag)
Plotly.plot('graph',data,layout);


})






























//cod.push(nodes[i].code);
       // z.push(Math.random()* (10 - 0 + 1))
       // color.push(Math.floor(Math.random()* (10 - 0 + 1)))
        //let x = link[i].target;
       // tar.push(x)
       // sou.push(link[i]['source']);//