# Belly Button Diversity

## Task

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

	Use sample_values as the values for the bar chart.

	Use otu_ids as the labels for the bar chart.

	Use otu_labels as the hovertext for the chart.

3. Create a bubble chart that displays each sample.

	Use otu_ids for the x values.

	Use sample_values for the y values.

	Use sample_values for the marker size.

	Use otu_ids for the marker colors.

	Use otu_labels for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. 

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

## Description

I started this assignment by referring to the html and json files provided with starter code files to determine what information was required. I defined the url for where the data was being pulled. I initialized the setup for the bar chart and console logged the data from the previously defined url. I filtered the data, prepared it for processing, and plotting. Specified to show the first 10 results for the bar chart and reversed the data to account for Plotly's defaults. I created the trace object, data array, and layout and used plotly to create the bar graph. I used the same process for creating the bubble chart following the instructions above. I initialized the data for the drop down menu, fetched the JSON data, filtered the data, cleared out the existing info, and added the key and value pairing for the demographic information. I then added the function for the when the option was changed on the dashboard. I initialized the dashboard startup. Gave a method for handling the drop down menu, populated the contents of the drop down menu, read the current data given the selection, displayed the charts and the demographic information associated with that selection.

## References

How to create horizontal bar graph and bubble chart
https://plotly.com/javascript/
