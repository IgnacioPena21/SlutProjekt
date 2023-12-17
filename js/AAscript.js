fetch('https://thesportsdb.com/api/v1/json/3/all_sports.php?id=%22102%22')
.then(res => res.json())
.then(data => {
    console.log(data.sports[0]);

    function Explanation(Futinfo){
        document.getElementById("FutInfo").InnerHTML = `Information about the Football:<br>${Futinfo}`;
    }
    Explanation(data.sports[0].strSportDescription);
} )