export default
    {

        name :'Jordan Vang',
        headerTagline: ['I am a Software Designer'],
        contactEmail:'jordanvang8@gmail.com',
        abouttext: "Experience: Completed the U of M 3 months full-stack course, learning languages like React, MySql, CSS, HTML, MongoDB, JavaScript, Express, Node. Was enlisted in the Marines Corp for 5 years as a Avionics Tech.  ",        
        
        // aboutImage:

    //    ShowAboutImage:true,//true or false (Change Here)

       projects:[
           {
            id: 1,
            title:'WhaleWatcher', 
             imageSrc: require("./img/Screenshot (19).png"),
             url:'https://jordan763.github.io/Whale_Tracker/'
            },
            {
                id: 2,
                title: 'CreditCrocs',
                imageSrc: require("./img/Screenshot (27).png"),
                url: 'https://hungry-croconaw.herokuapp.com/'
            },
            { 
                id: 3,
                title: 'AllAboutCars',
                imageSrc: require("./img/Screenshot (26).png"),
                url: 'https://newnewnewnewnew.herokuapp.com/'
            },
        ],
        social: [
            {   name:'Github',
                url:'https://github.com/jordan763'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/jordan-vang-0736ba196/'
            },
        ]
    }