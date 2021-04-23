const amblist = document.querySelector('#delegates-list');

function renderAmb(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let age = document.createElement('span');
    let dob = document.createElement('span');
    let num = document.createElement('span');
    let zip = document.createElement('span');
    let university = document.createElement('span');
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
    naddress.textContent = "Native Address: "+doc.data().Ncity+"-"+doc.data().Ndistrict+"-"+doc.data().Nprovience+"-"+doc.data().Ncountry;
    raddress.textContent = "Residential Address: "+doc.data().Rcity+"-"+doc.data().Rdistrict+"-"+doc.data().Rprovience+"-"+doc.data().Rcountry;

    
    li.appendChild(name);
    li.appendChild(age);
    li.appendChild(dob);
    li.appendChild(b);
    li.appendChild(num);
    li.appendChild(email);
    li.appendChild(zip);
    li.appendChild(b.cloneNode(true));
    li.appendChild(university);
    li.appendChild(b.cloneNode(true));
    li.appendChild(naddress);
    li.appendChild(b.cloneNode(true));
    li.appendChild(raddress);

    
    

    amblist.appendChild(li);
}

db.collection("delegates").get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAmb(doc);
    });
})