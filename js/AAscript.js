//Med detta fetch har jag använt en API för att kunna hämta imformation om fotboll
//Jag ville använda den för andra funktioner men den är tyvärr mycket begränsad
//för några listor
fetch('https://thesportsdb.com/api/v1/json/3/all_sports.php?id=%22102%22')
.then(res => res.json())
.then(data => {
    console.log(data);
    function Explanation(Futinfo){
        document.getElementById("FutInfo").innerHTML = `<h2><b>Information about the Football:</b></h2><br>${Futinfo}`;

    }
    Explanation(data.sports[0].strSportDescription);
} )
//Den här fetch har jag försökt att förenkla lite från den som fanns när jag ville hämta API key 
//Med den jag vill fetch:a namn på några fotboll spelare och när användare trycker en knapp 
//ska den retunera en random spelare.
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

  function RandPlayer(Player){
    document.getElementById("player").innerText = (`Your Player is ${Player}`);
  }
  
  function Letsgo(){
  document.getElementById("button").onclick = function() {
    RandPlayer(data.result[Math.floor(Math.random() * 25)].name);
  }
  }
  Letsgo()
  })