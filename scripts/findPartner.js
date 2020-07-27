




findPartner=  () =>{
    
let workoutSelect =document.querySelector('.workoutSelect');
let timeSelect = document.querySelector('.timeSelect');

let partnerList = [
    {name:'Mario',workout: 'Crossfit' , time: '12 AM'},
    {name: 'Lina' ,workout: 'Cardio HIIT' , time: '10 AM'},
    {name: 'Mike' ,workout: 'Yoga' , time: '12 AM'},
    {name: 'Josh' ,workout: 'Crossfit' , time: '12 AM'},
    {name: 'Steve' ,workout: 'Crossfit' , time: '08 PM'},
    {name: 'Karim' ,workout: 'Crossfit' , time: '12 AM'},

]
console.log(timeSelect.value);
    
    partnerList.forEach( e => {
        if ( e.time == timeSelect.value && e.workout == workoutSelect.value ){
            console.log(e.name)
        }else{
            console.log('no match');
        }   
    });
 
 
};

findPartner();

