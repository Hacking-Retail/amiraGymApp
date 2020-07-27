let availablePrtner = []
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
<<<<<<< HEAD
            availablePrtner.push(e);
            // document.querySelector('.noPartner').style.visibility = "hidden";
            // document.getElementById('displayPartner').innerHTML +=`
            // <div class="card grid-item" style="width: 18rem;">
            //     <i class="fas fa-user fa-7x"></i>
            //     <div class="card-body">
            //         <h5 class="card-title">${e.name}</h5>
            //         <a href="#" class="btn btn-success" id="inviteBtn">Invite</a>
            //     </div>
            // </div>`
=======
            document.querySelector('.noPartner').style.visibility = "hidden";
            document.getElementById('displayPartner').innerHTML +=`
            <div class="card grid-item" style="width: 18rem;">
                <i class="fas fa-user fa-7x"></i>
                <div class="card-body">
                    <h5 class="card-title">${e.name}</h5>
                    <a href="#" class="btn btn-success inviteBtn">Invite</a>
                </div>
            </div>`
>>>>>>> quoteBranch
        }else{
            console.log('no match found');
            //  document.querySelector('.noPartner').innerHTML = `
            // <div class="container noPartner">
            //     <i class="fas fa-frown-open fa-7x"></i></br>
            //     <p>Sorry no one is available </p>
            // </div>
            // `

        }
    });
 
  
};

updateUI = (array) =>{
    if ( array) {
        document.querySelector('.noPartner').innerHTML= ''
        for (let i=0 ; i < array.length ; i++){
        document.getElementById('displayPartner').innerHTML +=`
        <div class="card grid-item" style="width: 18rem;">
            <i class="fas fa-user fa-7x"></i>
            <div class="card-body">
                <h5 class="card-title">${array[i].name}</h5>
                <a href="#" class="btn btn-success" id="inviteBtn" onclick="invite()">Invite</a>
            </div>
        </div>`
        }
        
    //     document.getElementById('inviteBtn').addEventListener('click', ()=>{
    //         window.open("confirmInvitation.html")
    //    });
    }else{
        document.getElementById('displayPartner').innerHTML ='';
        document.querySelector('.noPartner').innerHTML += `           
                <i class="fas fa-frown-open fa-7x"></i></br>
                <p>Sorry no one is available </p>
            `

    };
   

}




document.getElementById('findBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    findPartner();
<<<<<<< HEAD
    updateUI(availablePrtner)
    console.log(availablePrtner)
    
=======
    let inviteButtons = document.querySelectorAll('.inviteBtn');
    inviteButtons.forEach( btn => {
        btn.addEventListener('click', ()=>{
            window.open("confirmInvitation.html")
       });
    })
    // document.querySelector('.inviteBtn').addEventListener('click', ()=>{
    //      window.open("confirmInvitation.html")
    // });
>>>>>>> quoteBranch
});




