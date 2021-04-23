const amblist = document.querySelector('#ambassador-list');

function renderAmb(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let age = document.createElement('span');
    let dob = document.createElement('span');
    let num = document.createElement('span');
    let zip = document.createElement('span');
    let university = document.createElement('span');
    let level = document.createElement('span');
    let raddress = document.createElement('span');
    let naddress = document.createElement('span');
    let Q1 = document.createElement('span');
    let Q2 = document.createElement('span');
    let Q3 = document.createElement('span');
    let Q4 = document.createElement('span');
    let Q5 = document.createElement('span');
    let Q6 = document.createElement('span');
    let b = document.createElement('br');


    li.setAttribute('data-id',doc.id);
    name.textContent = "Name: "+doc.data().fname+" "+doc.data().lname;
    email.textContent = "Email: "+doc.data().email;
    age.textContent = "Age: "+doc.data().age;
    num.textContent = "Whatsapp: "+doc.data().code+doc.data().phone;
    dob.textContent = "Date of Birth: "+doc.data().dob;
    zip.textContent = "Zip Code: "+doc.data().zip;
    university.textContent = "Institute: "+doc.data().university;
    level.textContent = "Level: "+doc.data().level;
    naddress.textContent = "Native Address: "+doc.data().Ncity+"-"+doc.data().Ndistrict+"-"+doc.data().Nprovience+"-"+doc.data().Ncountry;
    raddress.textContent = "Residential Address: "+doc.data().Rcity+"-"+doc.data().Rdistrict+"-"+doc.data().Rprovience+"-"+doc.data().Rcountry;
    Q1.textContent = "BRIEFLY LIST DOWN YOUR MUN EXPERIENCES: "+doc.data().Q1;
    Q2.textContent = "HAVE YOU PREVIOUSLY TRAINED OTHER STUDENTS IN MUN BEFORE? IF SO, HOW DID YOU GO ABOUTDOING IT? IF NOT,HOW WOULD YOU DO IT IF GIVEN THE OPPORTUNITY?: "+doc.data().Q2;
    Q3.textContent = "AS AN AMBASSADOR HOW DO YOU EXPECT TO GET THE MAXIMUM DELEGATE FOR SAIMUN?: "+doc.data().Q3;
    Q4.textContent = "HOW CAN YOUR SKILLS MAKE SAIMUN DIFFERENT AND UNIQUE FROM OTHER INTERNATIONAL MUN?: "+doc.data().Q4;
    Q5.textContent = "HOW CAN YOU CONVINCE YOUR DELEGATE FOR SAIMUN AND PROVE ITS UNIQUENESS TO THEM?: "+doc.data().Q5;
    Q6.textContent = "ADDITIONAL COMMENTS(PLEASE ADD SOME ADDITIONAL POINTS WHICH CAN MAKE YOU MORE DESERVING FOR THIS POST IF ANY): "+doc.data().Q6;


    li.appendChild(name);
    li.appendChild(age);
    li.appendChild(dob);
    li.appendChild(b);
    li.appendChild(num);
    li.appendChild(email);
    li.appendChild(zip);
    li.appendChild(b.cloneNode(true));
    li.appendChild(university);
    li.appendChild(level);
    li.appendChild(b.cloneNode(true));
    li.appendChild(naddress);
    li.appendChild(b.cloneNode(true));
    li.appendChild(raddress);
    //li.appendChild(Q1);
    //li.appendChild(Q2);
    //li.appendChild(Q3);
    //li.appendChild(Q4);
    //li.appendChild(Q5);
    //li.appendChild(Q6);

    
    

    amblist.appendChild(li);
}

db.collection("ambassadors").get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAmb(doc);
    });
})