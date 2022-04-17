
songs = [{id:1,title:'Hold On',releaseDate:'2015-09-08',source:'hold-on.mp3'},
          {id:2,title:'Poison',releaseDate:'1992-10-32',source:'poison.mp3'},
          {id:3,title:'Vision of Love',releaseDate:'2015-05-15',source:'vision.mp3'},
          {id:4,title:'Nothing Compares 2 U',releaseDate:'2017-10-32',source:'nothing.mp3'},
          {id:5,title:'Vogue',releaseDate:'1996-07-32',source:'vogue.mp3'},
        ]

module.export =  class Song {

    constructor(id,title,releaseDate,source){
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.source = source;
    }

    static search(keyword){
        return songs.filter(song=> song.title.toLowerCase().includes(keyword.toLowerCase()));
    }

}