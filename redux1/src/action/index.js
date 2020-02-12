export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:'Rambo'},
            {id:2, name:'Avenger'},
            {id:3, name:'DeathRace'}
        ]
    }
}