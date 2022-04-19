songs = [{id:1,title:'Hold On',releaseDate:'2015-09-08',source:'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'},
{id:2,title:'Poison',releaseDate:'1992-10-32',source:'https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg'},
          {id:3,title:'Vision of Love',releaseDate:'2015-05-15',source:'https://actions.google.com/sounds/v1/alarms/setting_alarm_clock.ogg'},
          {id:4,title:'Nothing Compares 2 U',releaseDate:'2017-10-32',source:'https://actions.google.com/sounds/v1/alarms/radiation_meter.ogg'},
          {id:5,title:'Vogue',releaseDate:'1996-07-32',source:'https://actions.google.com/sounds/v1/animals/animal_bark_and_growl.ogg'},
        ]

module.exports =  class Song {

    constructor(id,title,releaseDate,source){
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.source = source;
    }

    static search(keyword){
        console.log(`Searching a song with keyword: ${keyword}`)
        return songs.filter(song=> song.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    static findAll(){
        return songs;
    }

}