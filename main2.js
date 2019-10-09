var contactRef=firebase.database().ref().child("ContactForm");
document.getElementById('displayForm1').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var Name=getInputVal('name');
    var Email=getInputVal('email');
    var Services=getInputVal('service');
    var Subject=getInputVal('subject');

    saveForm(Name,Email,Services,Subject);
    document.getElementById(displayForm1).reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveForm(Name,Email,Services,Subject){
    var newContactref=contactRef.push();
    newContactref.set({
        Name:name,
        Email:email,
        Services:service,
        Subject:subject
    });
}