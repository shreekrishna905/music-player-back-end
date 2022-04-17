let moment = require('moment');
const AccessDenied = require('../errors/AccessDenied')

users = [{username:'shree',password:'$hree',access_token:'',playlist:[{id:1,title:'Numb',release_date:'2010-01-19'},{id:2,title:'Gloden Eye',release_date:'2020-01-01'}]}]

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

    static findPlaylistByUserName(username){
        return users.find(user => user.username ==username)
                    .playlist;
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