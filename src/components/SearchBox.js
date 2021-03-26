import React from "react";
import "../styles/SearchBox.css"

function SearchBox() {

    return (

<div class = "body">

<div class = "searchBox">
    <div class = "row">
        {/* Empty div to center Search box  */}
        <div class = "col-md-5"></div>
        {/* Search box */}
            <div class="form-outline col-md-2">
                <input type="search" id="form1" class="form-control" placeholder="Search"/>
            </div>
        {/* Empty div to center Search box  */}   
        <div class = "col-md-5"></div>
    </div>
</div>

<div class="navbar">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button> 
        <a class="nav-item col-md-2">Image</a>
        <a class="nav-item col-md-3" href="#">Name</a>
        <a class="nav-item col-md-2" href="#">Phone</a>
        <a class="nav-item col-md-2" href="#">Email</a> 
        <a class="nav-item col-md-2" href="#">Disabled</a>

</div>

</div>

        
    )


}

export default SearchBox;