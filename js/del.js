const form = document.querySelector('#del');
var ImgUrl;
var Images = [];
var reader0;
var CvUrl;
var Cvs = [];
var reader1;

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

const upload = async () => await db.collection('delegates').add({
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

    Known: form.MUN.value,
    Part: form.part.value,
    MunExperience: form.experience.value,
    known: form.know.value,
    info: form.name.value,
    council: form.council.value,
    country: form.country.value,
    expectation: form.expectation.value,
    photo: ImgUrl,
    cv: CvUrl
})

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    var input = document.createElement('input');
    if(reader0 == null|| reader1 == null){
        alert("Attachment required");
    }
    else {
        upload();
    }
})


document.getElementById("uploadCv").onclick = function(e) {
    if(reader1 == null){
        alert("Attachment required");
    }
    else {
        var uploadCv = firebase.storage().ref('Cvs/'+form.first_name.value+form.phone.value+".pdf").put(Cvs[0]);
        uploadCv.on('state_changed',function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById('progress').innerHTML = 'Upload'+progress +"%"; 
        },
        function(error){
            alert('error in registering')
        },
        function(){
            uploadCv.snapshot.ref.getDownloadURL().then(function(url){
                CvUrl = url;
            });
        }
        );
    }
}


document.getElementById("uploadImage").onclick = function(e) {
    if(reader0 == null){
        alert("Attachment required");
    }
    else {
        var uploadImage = firebase.storage().ref('Images/'+form.first_name.value+form.phone.value+".png").put(Images[0]);
        uploadImage.on('state_changed',function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById('progress').innerHTML = 'Upload'+progress +"%"; 
        },
        function(error){
            alert('error in registering')
        },
        function(){
            uploadImage.snapshot.ref.getDownloadURL().then(function(url){
                ImgUrl = url;
            });
        }
        );
    }
}


document.getElementById("photo").onclick = function(e) {
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        Images = e.target.files;
        reader0 = new FileReader();
        reader0.onload = function() {
            document.getElementById('image').src = reader0.result;
        }
        reader0.readAsDataURL(Images[0]);
    }
    input.click();
}

document.getElementById("cv").onclick = function(e) {
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        Cvs = e.target.files;
        reader1 = new FileReader();
        reader1.readAsDataURL(Cvs[0]);
    }
    input.click();
}