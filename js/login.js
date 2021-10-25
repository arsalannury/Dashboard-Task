const usernameEl = document.getElementById('login__username');
const passwordEl = document.getElementById('login__password');

const users = getLsUsers();

function login(){
    const userValue = usernameEl.value;
    const passValue = passwordEl.value;

    let user = users.find(u => u.username === userValue);
    
    if(userValue === 'admin'){
        if(!user){
            if(passValue === 'admin'){
                window.location.href = "./Users.html"
            }
            else{
                document.getElementById("loginError").innerHTML="Admin's password is incorrect";
            }
        }
        else{
            if(passValue === user.password){
                window.location.href = "./Users.html"
            }
            else{
                document.getElementById("loginError").innerHTML="Admin's password is incorrect";
            }

        }
        
    }
    else if(user && user.password === passValue){
        window.location.href = "./Users.html"
    }else{
        document.getElementById("loginError").innerHTML="The username or password is incorrect";
    }
    
    

}