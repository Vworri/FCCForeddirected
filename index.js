
let url = "https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json"
let data =[];
let yaddress = []
let zaddress = []
let country = []
let xaddress = []
Plotly.d3.json(url, function(json){
    var link = json['links'];
    var nodes = json['nodes'];
    for (var i =0; i <nodes.length; i++){
        xaddress.push(i)
        yaddress.push(Math.random()* (nodes.length + 1));
        zaddress.push(Math.random()* (nodes.length + 1));
        country.push(nodes[i]['country'])
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
        //mode: 'markers',
        symbol: Plotly.Icons['coffee'],
        text: country
    }
    data.push(trace)

  layout = {
        hovermode:'closest',
        title:'Geographic Networks',
        xaxis:{zeroline:false, title: 'Value A'},
        yaxis:{zeroline:false, title: 'Value B'}
     };
     
    trace.on('plotly_hover', function(data){
        var point = data.points[0],
                       newAnnotation = {
                         x: point.xaxis.d2l(point.x),
                         y: point.yaxis.d2l(point.y),
                         arrowhead: 6,
                         ax: 0,
                         ay: -80,
                         bgcolor: 'rgba(255, 255, 255, 0.9)',
                         arrowcolor: point.fullData.marker.color,
                         font: {size:12},
                         bordercolor: point.fullData.marker.color,
                         borderwidth: 3,
                         borderpad: 4,
                         text: '<i>Some text will be added here...</i><br>',
                         pointNum: point.pointNumber
                       },
                       newImage = {
                         source: "<Path to some valid image>",
                         xref: "x",
                         yref: "y",
                         x: point.xaxis.d2l(point.x),
                         y: point.yaxis.d2l(point.y),
                         sizex: point.xaxis.d2l(point.x)/36000,
                         sizey: 10,
                         xanchor: "left",
                         yanchor: "bottom",
                         pointNum: point.pointNumber
                       },
                       divid = document.getElementById('plantTimeseries'),
                       newIndex = (divid.layout.annotations || []).length;
                       console.log(newIndex);
                   // delete instead if clicked twice
                   if(newIndex) {
                     var foundCopy = false;
                     divid.layout.annotations.forEach(function(ann, sameIndex) {
                       if(ann.pointNum === newAnnotation.pointNum ) {
                         Plotly.relayout('plantTimeseries', 'annotations[' + sameIndex + ']', 'remove');
                         Plotly.relayout('plantTimeseries', 'images[' + sameIndex + ']', 'remove');
                         foundCopy = true;
                         console.log(divid.layout.annotations.length);
                       }
                     });
                     if(foundCopy){
                       return;
                     }
                   }
                  Plotly.relayout('plantTimeseries', 'annotations[' + newIndex + ']', newAnnotation);
                  Plotly.relayout('plantTimeseries', 'images[' + newIndex + ']', newImage);
                  console.log(divid.layout.annotations.length);
                 }
               }
             });
    })
   
Plotly.plot('graph',data,layout);


})






























//cod.push(nodes[i].code);
       // z.push(Math.random()* (10 - 0 + 1))
       // color.push(Math.floor(Math.random()* (10 - 0 + 1)))
        //let x = link[i].target;
       // tar.push(x)
       // sou.push(link[i]['source']);//