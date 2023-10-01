// const form=document.getElementById('contact-form');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event){
//     event.preventDefault();
//     const name=document.getElementById('username').value;
//     const password=document.getElementById('password').value;
//     // const checkbox=document.getElementById('checkbox-label'),value;
//     const input=document.querySelectorAll('#username','password');

//     input.forEach(input => {
//         input.value=''
//     });

//     const textarea=document.getElementById(checkbox-label) 
//     textarea.value='';
    
//     alert('Thank You $(name) ') ;
// }
//  <script type="text/javascript"> 
// function handleSubmit(){
//     const name=document.getElementById('username').value;
//     const pass=document.getElementById('password').value;
//     if(name=="")
//     {
//         alert("Please enter username..")
//     }
//     else if(pass=="")
//     {
//         alert("Please enter password..")
//     }
//     else
//     {
//         alert("Welcome "+name)
//     }
// }

//  </script>
function message(){
    const name=document.getElementById('username').value;
    const pass=document.getElementById('password').value;
    if(name=="")
    {
        alert("Please enter username..")
    }
    else if(pass=="")
    {
        alert("Please enter password..")
    }
    else
    {
        alert("Welcome "+name)
    }
}

