let moment = require('moment');
const AccessDenied = require('../errors/AccessDenied')

users = [
    {username:'shree',password:'$hree',access_token:'',playlist:[
    {id:1,title:'Hold On',releaseDate:'2015-09-08',source:'hold-on.mp3'},
    {id:2,title:'Poison',releaseDate:'1992-10-32',source:'poison.mp3'}]
    },
    {username:'ashok',password:'@shok',access_token:'',playlist:[
        {id:3,title:'Vision of Love',releaseDate:'2015-05-15',source:'vision.mp3'},
          {id:4,title:'Nothing Compares 2 U',releaseDate:'2017-10-32',source:'nothing.mp3'}]
        },
]

module.exports =  class User {

    constructor(username, password,playlist){
        this.username = username;
        this.password = password;
        this.playlist = playlist;
    }

    static hasAccess(token){
        let index = users.findIndex(user => user.access_token==token);
        if(index >= 0){
            return true;
        }
        return false;
    }

    static addSongToPlaylist(username, song){
        let index = users.findIndex(user => user.username==username);
        if(!User.isSongExist(username,song)){
            users[index].playlist.push(song);
        }
    }

    static isSongExist(username,song){
        let index = users.findIndex(user => user.username==username);
        if(users[index].playlist.findIndex(s => s.id==song.id) >=0){
            console.log(`Song with id:${song.id} already exist in playlist`);
            return true;
        }
        return false;
    }

    static findPlaylistByUserName(username){
        console.log(`Playlist for username:${username}`);
        return users.find(user => user.username ==username)
                    .playlist;
    }

    static findUserByAccessToken(accessToken){
        return users.find(user => user.access_token==accessToken).username;
    }

    static login(username, password){
        let index = users.findIndex(user => user.username==username && user.password == password);
        if(index<0){
            throw new AccessDenied();
        }
        let accessToken = Math.random().toString(36).substring(2,7);
        accessToken+= moment(new Date()).format('YYYYMMDDHHmmss')+username;
        users[index].access_token = accessToken;
        return accessToken;
    }

}