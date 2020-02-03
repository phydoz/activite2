const pwd = document.querySelector('#password');
const mail = document.querySelector('#email');

mail.addEventListener('input', (e)=>{
    const email = e.target.value;
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.length>0) {
        if(email.match(format)) {
            mail.style.borderColor = "green";
        } else {
            mail.style.borderColor = "red";
        }
    } else {
        mail.style.borderColor = "black";
    }    
});
pwd.addEventListener('input', (e)=>{
    const mdp = e.target.value;
    const format = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;

    if(mdp.length>0) {
        if(mdp.match(format)) {
            pwd.style.borderColor = "green";
            console.log("test ici ok")
        } else {
            pwd.style.borderColor = "red";
            console.log("test ici pas ok")
        }
    } else {
        pwd.style.borderColor = "black";
        console.log("test 0 ok")
    }    
});