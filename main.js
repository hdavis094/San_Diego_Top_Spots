
    
$.getJSON('data.json').done(function(data) {
    
    data.forEach(function(place) {
        const tableRow = `
        <tr>
            <td>${place.name}</td>
            <td>${place.description}</td>
            <td><a href="https://www.google.com/maps?q=${place.location[0]},${place.location[1]}" target="_blank"><button class="map-button">Open in Google Maps</button></a></td>
        </tr>
        `;
        $("#places-table").append(tableRow);

    });
});
    


