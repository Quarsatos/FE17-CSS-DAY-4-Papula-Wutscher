// Navbar

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  
  // Responsive Nav
  
  var width = document.documentElement.clientWidth;
  
  console.log (width);
  
  function openNav(){
  if (width > 600){ 
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    else  { 
        document.getElementById("mySidenav").style.width = "100%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("mySidenav").classList.remove("sidenav");
        document.getElementById("mySidenav").classList.add("sidenavmob");
  }
  };