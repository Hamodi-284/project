function sidebar(){
    let sidebar = document.querySelector(".sidebar");
    let sidebarSmall = document.querySelector(".sidebar-small");
    if(sidebar.style.display === "none"){
        sidebar.style.display = "flex";
        sidebarSmall.style.display = "none";

    }

    else{
        sidebar.style.display = "none";
        sidebarSmall.style.display = "flex";
    }

}


