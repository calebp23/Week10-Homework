// JSON file paths
var graph1 = "bubble.json";
var graph2 = "w9.json"; // Example for the second graph

// Embed the first graph (bubble chart)
vegaEmbed("#bar_chart", graph1).then(function(result) {
    console.log("First graph loaded");
}).catch(console.error);

// Embed the second graph (line chart)
vegaEmbed("#line_chart", graph2).then(function(result) {
    console.log("Second graph loaded");
}).catch(console.error);
