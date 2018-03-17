
// **************************PRINT TO DOM FUNCTION**************************//

function printToDom(input, id){
    document.getElementById(id).innerHTML += input;
}
// ***************************TOUR DATA***************************

var tourArray = [
    {
        date: '08/01/18',
        time: '9:00pm',
        city: 'Nashville',
        venue: "Santa's Pub",
        tickets: 'Tickets'
    },
    {
        date: '08/16/18',
        time: '8:30pm',
        city: 'Knoxville',
        venue: "Back Door Tavern",
        tickets: 'Tickets'
    },
    {
        date: '08/24/18',
        time: '9:15pm',
        city: 'Bristol',
        venue: "O'Mainnin's Pub",
        tickets: 'Tickets'
    },
    {
        date: '09/09/18',
        time: '8:00pm',
        city: 'Memphis',
        venue: "Lamplighter Lounge",
        tickets: 'Tickets'
    },
    {
        date: '09/19/18',
        time: '9:00pm',
        city: 'Nashville',
        venue: "Tin Dog Tavern",
        tickets: 'Tickets'
    }
]

// ******************************* TOUR DOM STRING *******************************//

function tourDomString(array){
    // loop through the tour array
    for(var i = 0; i < array.length; i++){
        var tourDetails = array[i];
        // then loop through each index of tour array
        for(var j = 0; j < tourDetails.length; j++){
            var tourString = "";
            tourString += "<div class='tourCard'>";
            tourString += "<h3>" + tourDetails[j].date + "</h3>";
            tourString += "<h4>" + tourDetails.time[j] + "</h4>";
            tourString += "<h4>" + tourDetails.city[j] + "</h4>";
            tourString += "<h4>" + tourDetails.venue[j] + "</h4>";
            // domString += "<a href='#'>" + tourDetails.tickets + "</a>";
            tourString += "</div>";
        }
        console.log(tourString);
    }
    printToDom(tourString, tour-container);
}
