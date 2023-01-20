






// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function
function reviewApp(){
    console.log('This is my review app')
}

function run() {
    reviewApp();
    console.log('This is my code')

   
       
// const BASE_API =("https://ghibliapi.onrender.com")
const URL_API = ("https://ghibliapi.onrender.com/films")
const PEOPLE_API = ("https://ghibliapi.onrender.com/people")
    
     fetch(URL_API)
     .then(res => res.json())
     .then((json)=> {
        for (let e of json){
            
             const option = new Option(e.title, e.title);
          
             let dropdown = document.getElementById('title')       
            // let newOption = (e.title)
    option.textContent = (e.title)
    option.value = (e.id)
    dropdown.append(option)
   
    
    dropdown.addEventListener('change', (event)=> {
        event.preventDefault()

        const chosenID = event.target.value
        
        let info = document.getElementById('display-info') 

        for(let movie of json){
            if (chosenID === movie.id) {
                info.textContent = " "
                const h3 = document.createElement('h3')
                h3.textContent = (movie.title);
                info.prepend(h3);

                const p1 = document.createElement('p');
                p1.textContent = movie.release_date;
                info.append(p1)

                const p2 = document.createElement('p')
                p2.textContent = movie.description;
                info.append(p2)

            }

        }

        
      
        
        let peopleButton = document.getElementById('show-people')
        let peopleNames = document.querySelector('ol')
    
     
      peopleButton.addEventListener("click", (event)=> {
        event.preventDefault()


        
        fetch(PEOPLE_API)
        .then((response)=>response.json())
        .then((people)=> {
            
            people.innerHTML = " "
            for(let person of people) {
                for(let film of person.films){
                    if(film === `${URL_API}${chosenID}`){
                        let personList = document.createElement('li')
                        personList.textContent = person.name
                        peopleNames.append(personList)
                    }
                }
               
            }
        
        })
      

      })
            
     
    })
    // console.log(PEOPLE_API)
}
getReviews(json)
     })
     .catch((error)=>{
        console.log(error);
     })
     const displayData = (data)=> {
        console.log(data);
     }
     const displayError = (error)=> {
        console.log(error)
     }

     }
    
     
     let reviewForm =document.querySelector('form')
     let ul = document.querySelector('ul')

     function getReviews(json) {
        reviewForm.addEventListener('submit', (event)=> {
            event.preventDefault();
            let reviewInput =document.getElementById('review').value;
            if (dropdown.value === ""){
                alert('Please select a movie first!');
            }else{
                let movie =json.find((movie) => movie.id === dropdown.value);
                let li = document.createElement('li');
                li.innerHTML =`<strong>${movie.title}:</strong>${reviewInput}`;
                ul.append(li)
            }   
     
    
        })
    }
           
     

  
   
    
      
      
  

  

  

    
    
      

 // Add code you want to run on page load here
     

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched
     
setTimeout(run, 1000);
