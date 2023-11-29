// //1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// //Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
        var result = JSON.parse(request.responseText);
        
        var filteredCountries = result.filter(country => country.region === "Asia")
       .map((filteredCountries)=>filteredCountries.name.common)
         var a = filteredCountries.forEach((elem)=>{
               console.log(elem)
         })
        //console.log(filteredCountries);
    
}

// // 2.Get all the countries with a population of less than 2 lakhs using Filter function
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    var pop = result1.filter(element =>element.population<200000)
    .map((element)=>element.name.common)
    pop.forEach(ele=> {
      console.log(ele)
    })
    
    
}


// //3.Print the following details name, capital, flag using forEach function
var requestt = new XMLHttpRequest();
requestt.open("GET", "https://restcountries.com/v3.1/all");
requestt.send();

requestt.onload = function () {
    var resultt = JSON.parse(requestt.response);
         resultt.forEach(element => {
        console.log(`CountryName:${element.name.common}`);
        console.log(`Capital:${element.capital[0]}`); 
        console.log(`Flag:${element.flags.png}`);
    });
};


// //4.Print the total population of countries using reduce function


var reques = new XMLHttpRequest();
reques.open("GET", "https://restcountries.com/v3.1/all");

reques.send();
reques.onload = function () {
    var resul = JSON.parse(reques.response);
    var value=0;
    var totalPopulation = resul.reduce((acc, country) => acc + country.population,value);
      

    console.log(`Total population of countries:${totalPopulation}`);
}


//5.Print the country which uses US Dollars as currenc
var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
    var res = JSON.parse(req.response);
    var currency = res.filter((element) => element.currencies)
    var cur = currency.map((dol)=>dol.currencies)
     var a = cur.filter((doller)=>doller.USD)

    console.log(a)
      
};



