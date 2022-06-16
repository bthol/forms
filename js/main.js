console.log("JS connected");
const userForm = document.forms.userform;
const userFormName = document.forms.userform.username.value;

userForm.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log(userFormName);
});