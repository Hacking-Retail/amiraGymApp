
findPartner=  () =>{
    
    let workoutSelect =document.querySelector('.workoutSelect');
    let timeSelect = document.querySelector('.timeSelect');
    let partnerList = [
        {name:'Mario',workout: 'Crossfit' , time: '12 AM'},
        {name: 'Lina' ,workout: 'Cardio HIIT' , time: '10 AM'},
        {name: 'Mike' ,workout: 'Yoga' , time: '12 AM'},
        {name: 'Josh' ,workout: 'Crossfit' , time: '12 AM'},
        {name: 'Steve' ,workout: 'Cardio HIIT' , time: '10 AM'},
        {name: 'Karim' ,workout: 'Crossfit' , time: '12 AM'},

    ]
    partnerList.forEach( e => {
        if ( e.time == timeSelect.value && e.workout == workoutSelect.value ){
            console.log(e.name)

            document.getElementById('displayPartner').innerHTML +=`
            <div class="card grid-item" style="width: 18rem;">
                <i class="fas fa-user fa-7x"></i>
                <div class="card-body">
                    <h5 class="card-title">${e.name}</h5>
                    <a href="#" class="btn btn-success" id="inviteBtn">Invite</a>
                </div>
            </div>`
        }else{

            // document.getElementById('displayPartner').innerHTML = `
            // <div class="container noPartner">
            //     <i class="fas fa-frown-open fa-7x"></i></br>
            //     <p>Sorry no one is available </p>
            // </div>
            // `

        }
        

    });
 
 
};




document.getElementById('findBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    findPartner();
    document.getElementById('inviteBtn').addEventListener('click', ()=>{
         window.open("confirmInvitation.html")
    });
});




