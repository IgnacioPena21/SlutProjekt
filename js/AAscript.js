fetch('https://thesportsdb.com/api/v1/json/3/all_sports.php?id=%22102%22')
.then(res => res.json())
.then(data => {
    console.log(data);
    function Explanation(Futinfo){
        document.getElementById("FutInfo").innerHTML = `Information about the Football:<br>${Futinfo}`;

    }
    Explanation(data.sports[0].strSportDescription);
} )
//https://thesportsdb.com/api/v1/json/3/searchloves.php?u=zag
/*fetch('https://thesportsdb.com/api/v1/json/3/lookupplayer.php?id=34145938')
.then(res => res.json())
.then(data2 => {
    console.log(data2);

 //   function RandPlayer(Player){
       // console.log(`This is your Player: ${Player}`);
    //}
    //RandPlayer(data.players[Math.random() * 221])
})*/

const url = 'https://soccer-football-info.p.rapidapi.com/players/list/?c=all&p=1';

fetch(url, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c28506c129msh794c084428304a7p1b5d2fjsnd7640ec146f0',
    'X-RapidAPI-Host': 'soccer-football-info.p.rapidapi.com'
  }
})
  .then(response => response.json())
  .then(data => {
    //console.log(data.result[Math.floor(Math.random() * 25)].name);
    function RandPlayer(Player){
        document.getElementById("player").innerHtml = (`Your Player is ${Player}`);
        
    }
   var btn = document.getElementById("button");
    btn.addEventListener("click" , RandPlayer(data.result[Math.random() * 25].name), {

    });

  })