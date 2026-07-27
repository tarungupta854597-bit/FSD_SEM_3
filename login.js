    let id={
        "tarun":"12345678",
    };
    const b=document.getElementById("demo");
    let form=document.getElementById("loginform")
    let x=document.getElementById("submit");
    form.addEventListener("submit",login);
    x.addEventListener("mouseover",changecolor)
    x.addEventListener("mouseout",changecolor2);
    function changecolor2()
    {
        x.style.backgroundColor="#FFC8DD"
    }
    function changecolor()
    {
      x.style.backgroundColor="#FFAFCC";
    }
    let demo=document.getElementById("demo");

    function login(event){
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if(id[username]==password)
        {
          demo.innerHTML="password correct";
          demo.style.color=" green" ;
        }
        else
        {
            demo.innerHTML="worng password";
            demo.style.color="red" ;
            demo.style.textAlign="center";
            demo.style
        }
         demo.style.color="red" ;
            demo.style.textAlign="center";
            demo.style.marginRight="20px";

    }

