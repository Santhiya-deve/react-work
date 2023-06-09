import React from 'react'

function Middle() {
    return (
        <div>
          <section className="">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block w-100" src="Images/banner-1.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="Images/banner-1.jpg" alt="Third slide"/>
    </div>
  </div>
</div>

         </section>     
  
         <section className="bg-light" id="about">
           <div className="container">
             <div className="row">
               <div className="col-sm-12 col-md-12">
                  <h3 className="text-center mt-4 text-secondary">Know about us</h3>
                </div>
               </div>
              <div className="row">
                 <p className="mt-4 mb-5">GT Holidays Pvt. Ltd is a subsidiary of Sangam Group of Hotels, one of the biggest hotel chains in south Tamil Nadu. The Sangam Group of Hotels founded in 1968 has for forty years provided impeccable service and outstanding hospitality. It currently has 19 properties in Tamil Nadu. GT Holidays Pvt. Ltd built on this strong foundation aims to provide great customer satisfaction and an exemplary holiday experience. Planning a once in a lifetime holiday or a yearly corporate retreat? No problem! GT Holidays can get you what you want and in the minimal time. One of the best destination management companies in South India, it has the experience and infrastructure to handle any customer demand. In addition to destination management, GT Holidays also plans corporate tours, incentive trips, college/school excursions, business travel, arranges car/railway & hotel bookings and much, much more.</p>
              </div>   
           </div>   
         </section>   
  
         <section className="" id="destinations">   
          <div className="container">
              <div className="row">
               <div className="col-sm-12 col-md-12">
                  <h3 className="text-center mt-4 text-secondary">Favourite Destinations</h3>
                </div>
               </div>
               <div className="row">
                  <div className="col-sm-4 mb-5">
                     <div className="card mt-4">
                        <img className="card-img-top" src="Images/ig-3.jpg" alt=""/>
                        <div className="card-body">
                           <h4 className="card-title text-secondary">Japan</h4>
                           <p className="card-text text-secondary">Best for contemporary culture Tokyo is a city forever reaching into the future, pushing the boundaries of what's possible on densely populated, earthquake-prone land, adding ever taller, sleeker structures</p>
                        </div>
                        <div className="card-footer">
                           <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-4 mb-5">
                     <div className="card mt-4">
                        <img className="card-img-top" src="Images/t-2.jpg" alt=""/>
                        <div className="card-body">
                           <h4 className="card-title text-secondary">Tokyo</h4>
                           <p className="card-text text-secondary">Explore Tokyo’s historical sites, romantic places and some of the other unique places that make this city so special.
Check out our Tokyo tourism guide,our recommendations for famous places.</p>
                        </div>
                        <div className="card-footer">
                           <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-4 mb-5">
                     <div className="card mt-4">
                        <img className="card-img-top" src="Images/t-1.jpg" alt=""/>
                        <div className="card-body">
                           <h4 className="card-title text-secondary">India</h4>
                           <p className="card-text text-secondary"> Ah, it's so hard to choose! What are the best tourist places in India? A lot of the time, it comes down to personal preference. However, some places to visit in India remain  more popular than others.</p>
                        </div>
                        <div className="card-footer">
                           <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
        </section>  
  
  <section className='container'>
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h4 style={{fontStyle:"italic",color:"green"}}>Our services</h4>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>We provide customised travel packages, from luxury India tours, honeymoon tour packages to International destinations, domestic tour packages, weekend getaways from Delhi, Pilgrimage Packages, and Wildlife tours covering the National parks and birds Sanctuaries, Education tours, and Photography tours. It is our job to make your dream come true.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h4 style={{fontStyle:"italic",color:"green"}}>Holiday packages</h4>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>India is a land of beautiful majestic temples and monuments that always beckon us. The mighty Himalayas in the north and the Arabian Sea in the south have always mesmerised us with their beauty. You can explore the beauty of Kashmir and its neighbouring places with our Kashmir Tour packages. One can also avail of the Chardham tour packages for inner peace and tranquillity. The Andaman tour package gives you the best memorable vacation that you can ask for!</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h4 style={{fontStyle:"italic",color:"green"}}>Special offers</h4>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>We offer great discounts and hassle-free hotel bookings, and our holiday packages are made to offer you total satisfaction. We will provide all the facilities from booking hotels to transportation such as mini-coaches, luxury coaches, and cars. We update our offers regularly to make each travel plan special.</p>
      </div>
    </div>
  </div>
</div>
  </section><br></br>

  <section style={{backgroundColor:"pink"}}>
    <div className='container'>
    <h3 style={{fontFamily:"fantasy",padding:"5px"}}>Book your destiny!!!</h3>
            <div class="form-floating mb-3">
           <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Your name</label>
           </div>
           <div class="form-floating mb-3">
           <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Place</label>
           </div>
           <div class="form-floating mb-3">
           <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">No.of.days</label>
           </div>
           <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Email address</label>
           </div>
           <button type="button"  class="btn btn-primary">Submit</button>
    </div>
  </section>
      
     <section className="bg-light mt-5" id="tourist">    
      <div className="container">
       <div className="row text-center">
         <div className="col-sm-12 col-md-12 mb-4">
             <h3 className="text-center mt-4 text-secondary">Tourist Opinions</h3>
          </div>
         <div className="col-md-4">
           <div className="testimonial mb-5">
            <div className="avatar mx-auto">
             <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"/>
           </div>
           <h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
           <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
           <p className="font-weight-normal dark-grey-text">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
             eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
         </div>
       </div>
  
       <div className="col-md-4">
         <div className="testimonial mb-5">
           <div className="avatar mx-auto">
             <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
           </div>
           <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
           <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
           <p className="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
             corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
         </div>
  
       </div>
       <div className="col-md-4">
         <div className="testimonial mb-5">
           <div className="avatar mx-auto">
             <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"/>
           </div>
           <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
           <h6 className="font-weight-bold blue-text my-3">Toursit</h6>
           <p className="font-weight-normal dark-grey-text">
             At vero eos et accusamus et iusto odio dignissimos ducimus qui
             blanditiis praesentium voluptatum deleniti atque corrupti.</p>
         </div>
         </div>
       </div>
     </div> 
    </section> 

    </div>
     );
}

export default Middle