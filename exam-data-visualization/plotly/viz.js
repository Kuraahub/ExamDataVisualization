// Fetch the data from the JSON file
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        console.log("ok")
        return response.json();
    })
    .then(data => {
        if (Array.isArray(data)) {
            run_visualization(data);
        } else {
            console.log("pas bon format")
            throw new Error('Data is not in the expected format');
        }
    })
    .catch(error => console.error('Error loading or processing data:', error));

function run_visualization(data) {
    console.log(data)

    const top30Countries = sortByCountryPopulation(data)

    console.log(top30Countries)

    const labels = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);

    //pour avoir la même chose que sur la photo du sujet :
    labels.reverse();
    populations.reverse();

    console.log(labels)
    console.log(populations)
    const trace = {
        x: labels,
        y: populations,
        type: 'bar',
        marker: {
            color: 'rgba(75, 192, 192, 0.2)',
            line: {
                color: 'rgba(75, 192, 192, 1)',
                width: 1
            }
        }
    };
    
    const layout = {
        title: 'Data distribution of countries population',
        xaxis: {
            title: 'Country'
        },
        yaxis: {
            title: 'Population',
            rangemode: 'tozero'
        },
        legend: {
            x: 0,
            y: 1.0,
            bgcolor: 'rgba(255, 255, 255, 0)',
            bordercolor: 'rgba(255, 255, 255, 0)'
        }
    };
    Plotly.newPlot('data-viz', [trace], layout);
    
}
    function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population > value.population ? -1 : 1);
    const top30Countries = [];
    for (let i = 0; i < Math.min(data.length, 30); i++) {
        top30Countries.push(data[i]);
    }
    return top30Countries;
}