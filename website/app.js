/* Global Variables */
// Personal API Key for OpenWeatherMap API && base URL for get temp through zipCode
const apiKey ='&appid=a682611dfd2b961f09c69e54fc36148f&units=metric';
const baseURL ='https://api.openweathermap.org/data/2.5/weather?zip=';
//Global elements needed through this project
let zipCode = document.querySelector('#zip');
let feelings = document.querySelector('#feelings');
let temprature = document.querySelector('#temp');
let theDate = document.querySelector('#date');
let content = document.querySelector('#content');
let generate = document.querySelector('#generate');
// for testing
console.log(zipCode,feelings, temprature,theDate,content,generate);

/* function for doing an action when user click the 
   generate button.
 */
 function doAction(){
    generate.addEventListener('click',async function(){
        /* function for Createing a new 
        date instance dynamically with JS.
        */
        try{
            function createDate(){
                let d = new Date();
                let month = d.getMonth()+1;
                let day = d.getDate();
                let year = d.getFullYear();
                let newDate = month +'.'+ day +'.'+ year;
                return newDate 
            }
            // for testing createDate function
            console.log("current date is"+ createDate());
        }catch(error){
            console.log('there is an error in the createDate function',error)
        }
        /* function for getting temprature 
        from remote server */
        async function getTemp(){
            let zipCodeValue =zipCode.value;
            console.log("user enter zip ="+ zipCodeValue);
            let response = await fetch(baseURL+zipCodeValue+apiKey);
            let tempData = await response.json();
            let temp = tempData.main.temp;
            console.log("temp ="+temp);
            return temp
        }
        // for testing getTemp function
        try{
            console.log('get temp method='+await getTemp());
        }catch{
            console.log("there is an error in the getTemp function", error);
        }
        /* function for posting temprature, 
        date & feelings to  the local server */
        async function postData(){
            let date =createDate();
            let feeling =feelings.value;
            let temp =  await getTemp();
            console.log(date , feeling,temp);
            await fetch('http://localhost:3300/postData',{
                method:'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers:{'content-type':'application/json'},
                body:JSON.stringify({temp,date, feeling})
            });
        }
        // for testing postData function
        try{
            let a=await postData();
            console.log("postData"+ a);
        }catch{
            console.log('there is an error in the postData function',error);
        }
        /* function for getting all data temprature, 
        date & feelings from  the local server */
        async function getData(){
            let response = await fetch('http://localhost:3300/getAllData');
            let allData = await response.json();
            return allData
        }
        // for testing getData function
        try{
            console.log(await getData());
        }catch{
            console.log('there is an error in the getData function',error);
        }
        /* function for generate UI by adding temprature, 
        date & feelings to front end */
        async function generateUI(){
            try{
              let allData=await getData();
              let a=  temprature.innerHTML = 'temprature: '+ Math.round(allData.temp)+ ' degrees';
              let b=  theDate.innerHTML ='Date: '+ allData.date;
              let c=  content.innerHTML = 'feelings: '+allData.feeling;
              console.log(a,b,c);
            }catch(error){
                console.log('there is an error in the generateUI function',error)
            }
            }
             // for testing
             console.log(generateUI());
       
        });
}
// calling the main function
doAction();

 