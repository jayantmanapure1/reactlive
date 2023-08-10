import React from "react";

function Error (){
 return (
   <>
      <div class="main_header">

<div class="row">
    <div class="col-md-10 col-12 mx-auto ">
        <div class=" main_header_left align-items-center">
            <figure class="errimg">
                <img src="../img/404.png" alt="Jayant" title="jayantmanapure" class="img-fluid"/>
            </figure>
            <p>Welcome to Jayant Manapure World</p>
            <h1>{{errorMsg}}</h1>
            <a href="/"><button>Go Back</button></a>
        </div>
    </div>

</div>
</div>



   </>
 )
}
export default Error;