
// Band-Members Data-------------------------------------

var bandMembers = [
    {
        name: 'Red Moon',
        instrument: 'Vocals',
        bio: "It was what most would call a perfect day.  The sun emblazened it's magnificence on to the landscape below, animals enchantingly sang their songs of joy, a picturesque picnic lunch was strewn across a checkered blanket, and two lovers intertwined below a willow tree.  As the earth and all her creatures were distracted and drenched in euphoria their paradise was being overthrown. A silence grasped the lovers with paranormal force, their lips turned cold as they realized what they had done.  Their act had consumated a creature so vicious and so powerful that when she was born her perfectly pitched cries melted faces and eclipsed the moon with blood.",
        image: "/images/malevolentia-gigs-4.jpeg"
    },
    {
        name: 'Gastrotheca',
        instrument: 'Guitar',
        bio: 'Gastrotheca has been feeding you tasty licks since before Elvis could pick up a rattle.  Yes, he may be the oldest guitar player in the world but when he is done being helped on stage and he sets that tennis ball-bottomed walker aside, you better have your earplugs in because you are about to be headbutted with the loudest rig in history.  We have not determined whether or not this is because he refuses to wear his hearing aids but you, and him for that matter, should consult a physician before he plugs in.',
        image: "/images/guitar-player.jpg"
    },
    {
        name: 'Goliath',
        instrument: 'Bass',
        bio: "Big A** Dude. Big A** Bass. 'Nuff said.",
        image: "/images/malevolentia-gigs-2.jpeg"
    },
    {
        name: 'Shovel Nose',
        instrument: 'Drums',
        bio: "After finishing a quadruple PhD from MIT in nuclear science and engineering Shovel Nose turned his back on academia to pursue his life-long dream of leading a cult. Unfortunately Shovel Nose is brilliant when it comes to nuclear science but an absolute moron when it comes to taxes.  His cult was shut down and he was left to fend for himself against the elements with only 4 doctorate degrees to keep him warm.  It was in this dark, destitute time, filled with rage that Shovel Nose picked up a stick and found his second gift.  He could hit things...with other stuff...repeatedly.  We found him on the side of the highway beating a guardrail with a dead armadillo and we knew he was the drummer we had been searching for.",
        image: "/images/malevolentia-gigs-6.jpeg"
    },
    {
        name: 'Poison Dart',
        instrument: 'Triangle',
        bio: "If history does in fact repeat itself then we can expect that Poison Dart won't be with us for much longer.  Playing the darkest and gnarliest jams the world has ever heard does not come without a price. The Frog Sayeth Croak has become loved and renowned for it's unique sound and that sound is the illustrious and malicious timbre of the triangle, but the band was cursed.  An eternity of triangle players dieing from rare and strange events was placed on the band.  We welcomed Poison Dart to the fold 2 weeks ago.....he's not looking so well, the paranoia is definitely setting in.  Please contact our tour manager if you would like to be placed on the waiting list for future triangle players and maybe YOU can be a part of the history, the legacy, the eternity (well not for you) of the greatest death metal band ever!!!",
        image: "/images/playing-the-triangle.jpg"
    }
];

// ---------------------------------------------------------

// **************************PRINT TO DOM FUNCTION**************************//

function printToDom(input, id){
    document.getElementById(id).innerHTML += input;
}

// ****************************Members DOM String************************

function memberDom (array){
    for(var i=0; i<array.length; i++){
        var item = array[i];
        var string = "<img src='" + item.image + "' width='400px' height='400px'>";
        string += "<h2>" + item.name + "</h2>";
        string += "<h3>" + item.instrument + "</h3>";
        string += "<p>" + item.bio + "</p>";
        printToDom(string, "band-members");
    }
}

memberDom(bandMembers);

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
];

// ******************************* TOUR DOM STRING *******************************//

function tourDomString(array){
    for(var i = 0; i < array.length; i++){
            var details = array[i]
            var tourString = "";
            tourString += "<div class = 'tourCard'>";
            tourString += "<h3>" + details.date + "</h3>";
            tourString += "<h4>" + details.time + "</h4>";
            tourString += "<h4>" + details.city + "</h4>";
            tourString += "<h4>" + details.venue + "</h4>";
            tourString += "</div>";
            tourString += "<a href='#'>" + details.tickets + "</a>";
            printToDom(tourString, 'tour-container');
    }
}
tourDomString(tourArray);

// ***************************PHOTO DATA***************************

var photosArray = [
    {
        date: '08/01/12',
        photoLink: '/images/malevolentia-small-gigs-3.jpg',
        photoCaption: 'Our lily pad at Tin Dog'
    },
    {
        date: '09/19/17',
        photoLink: '/images/malevolentia-small-pose-1.jpg',
        photoCaption: 'Haunting the cemetery'
    },
    {
        date: '08/24/15',
        photoLink: '/images/malevolentia-small-gigs-3.jpg',
        photoCaption: 'Moment in Screechsong at Back Door'
    },
    {
        date: '08/16/16',
        photoLink: '/images/malevolentia-small-pose-4.jpg',
        photoCaption: 'Still of METALMADNESS MAGAZINE'
    },
    {
        date: '09/09/13',
        photoLink: '/images/malevolentia-small-pose-3.jpg',
        photoCaption: "In tunel at late night den Copenhagen"
    },
    {
        date: '08/01/08',
        photoLink: '/images/malevolentia-small-pose-6.jpg',
        photoCaption: "Still for webzine METALMONSTERS"
    }
]
    
// **************************************************************//
