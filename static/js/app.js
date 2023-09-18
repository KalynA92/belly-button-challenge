// Define a variable for the URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Initialize bar graph, fetch JSON data, and console log it
function CreateBar(sample) {
    console.log(`CreateBar(${sample})`);
    
    d3.json(url).then(function(data) {
        console.log(data);

        // Filter the data
        let samples = data.samples;
        let sampleData = samples.filter(s => s.id == sample);
        let results = sampleData[0];
        
        // Fetch data for plotting
        let otu_ids = results.otu_ids;
        let otu_labels = results.otu_labels;
        let sample_values = results.sample_values;

        // Process data for plotting
        let yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

        //Create a trace object
        let trace1 = {
            x: sample_values.slice(0,10).reverse(),
            y: yticks,
            type: 'bar',
            text: otu_labels.slice(0,10).reverse(),
            orientation: 'h'
        };

        // Place trace data into an array
        let traceArray1 = [trace1];

        // Create the layout object
        let traceLayout1 = {
            title: 'Top 10 OTUs Present'
        };

        // Use Plotly to create the graph
        Plotly.newPlot('bar', traceArray1, traceLayout1);
    })
}

// Initialize bubble chart, fetch JSON data, and console log it
function CreateBubble(sample) {
    console.log(`CreateBubble(${sample})`);
    
    d3.json(url).then(function(data) {
        console.log(data);

        // Filter the data
        let samples = data.samples;
        let sampleData = samples.filter(s => s.id == sample);
        let results = sampleData[0];
        
        // Fetch data for plotting
        let otu_ids = results.otu_ids;
        let otu_labels = results.otu_labels;
        let sample_values = results.sample_values;

        // Create a trace object
        let trace2 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        }

        // Place trace data into an array
        let traceArray2 = [trace2];

        // Create the layout object
        let traceLayout2 = {
            title: 'Bacteria per Sample',
            hovermode: 'closest',
            xaxis: {title: "OTU ID"},
        };

        //Use Plotly to create the chart
        Plotly.newPlot('bubble', traceArray2, traceLayout2);
    })
}

// Initialize data for drop down menu, fetch JSON data, and cosole log it
function SelectMetaData(sample) {
    console.log(`SelectMetaData(${sample})`);

    d3.json(url).then(function(data) {
        let metadata = data.metadata;
        console.log(metadata);

        // Filter the data
        let results = metadata.filter(meta => meta.id == sample)[0];
        let demo = d3.select('#sample-metadata');

        // Clear out exisiting demographic information
        demo.html('');

        //Add the key and the value to the demographic window on dashboard
        Object.entries(results).forEach(([key, value]) => {
            demo.append('h6').text(`${key}: ${value}`);
        });
    });
}

// Function for when data is changed on dashboard
function optionChanged(sample) {
    console.log(`optionChanged, new value: ${sample}`);

    CreateBar(sample);
    CreateBubble(sample);
    SelectMetaData(sample);
} 

// Initializa the dashboard
function init() {

    // Get a handle to the drop down menu
    let selector = d3.select('#selDataset');

    d3.json(url).then(function(data) {

        let sampleName = data.names;

        // Populate the drop down menu
        for (let i = 0; i < sampleName.length; i++) {
            let sample = sampleName[i];
            selector.append('option').text(sample).property('value', sample);
        };

        // Read the current sample in the drop down menu
        let sampleOne = selector.property('value');
        console.log(`sampleOne = ${sampleOne}`);

        // Display bar graph for selected option
        CreateBar(sampleOne);

        // Display bubble chart for selected option
        CreateBubble(sampleOne);

        // Show metadata for selected option
        SelectMetaData(sampleOne);

    });




}

init();