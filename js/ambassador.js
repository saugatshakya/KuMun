const form = document.querySelector('#ambassador');


//function renderUsers(doc) {
//    let name = document.createElement('span');
//
//    li.setAttribute('data-id',doc.id);
//    name.textContent =doc.data().name
//
//    li.appendChild(name);
//    
//    userslist.appendChild(li);
//}

//db.collection('users').get().then((snapshot)=> {
//    snapshot.docs.forEach(doc => {
//        renderUsers(doc);
//    })
//})

const upload = async () => await db.collection('ambassadors').add({
    fname: form.first_name.value,
    lname: form.last_name.value,
    email: form.your_email.value,
    code: form.code.value,
    phone: form.phone.value,
    dob: form.dob.value,
    age: form.age.value,
    zip: form.zip.value,
    Ncountry: form.ncountry.value,
    Nprovience: form.nprovince.value,
    Ndistrict: form.ndistrict.value,
    Ncity: form.ncity.value,
    Rcountry: form.rcountry.value,
    Rprovience: form.rprovince.value,
    Rdistrict: form.rdistrict.value,
    Rcity: form.rcity.value,
    university: form.university.value,
    level: form.study.value,
    Q1: form.q1.value,
    Q2: form.q2.value,
    Q3: form.q3.value,
    Q4: form.q4.value,
    Q5: form.q5.value,
    Q6: form.q6.value,
})

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    upload();
})