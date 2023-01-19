






// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function


function run(URL_PAGE) {
    
    
// const BASE_API =("https://ghibliapi.onrender.com")
const URL_API = ("https://ghibliapi.onrender.com/films")
    
     fetch(URL_API)
     .then(res => res.json())
     .then(resJson => console.log(resJson));

    
        
     
    

  

  

    
    
    

 // Add code you want to run on page load here
}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

setTimeout(run, 1000);
