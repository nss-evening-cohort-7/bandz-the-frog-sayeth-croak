
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

// ***************************PHOTO DATA***************************

var photosArray = [
    {
        date: '08/01/12',
        photoLink: 'images/malevolentia-small-gigs-3.jpg',
        photoCaption: 'Our lily pad at Tin Dog'
    },
    {
        date: '09/19/17',
        photoLink: 'images/malevolentia-small-pose-1.jpg',
        photoCaption: 'Haunting the cemetery'
    },
    {
        date: '08/24/15',
        photoLink: 'images/malevolentia-small-gigs-3.jpg',
        photoCaption: 'Moment in Screechsong at Back Door'
    },
    {
        date: '08/16/16',
        photoLink: 'images/malevolentia-small-pose-4.jpg',
        photoCaption: 'Still of METALMADNESS MAGAZINE'
    },
    {
        date: '09/09/13',
        photoLink: 'images/malevolentia-small-pose-3.jpg',
        photoCaption: "In tunel at late night den Copenhagen"
    },
    {
        date: '08/01/08',
        photoLink: 'images/malevolentia-small-pose-6.jpg',
        photoCaption: "Still for website METALMONSTERS"
    }
]
    


// **************************************************************//
