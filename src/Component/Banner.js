import react from 'react'

import * as React from 'react';

export default function  Banner() { 
 
  return (
    <>  
     <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/slide_01.jpg" class="d-block w-100" alt="img1"/>
    </div>
    <div class="carousel-item">
      <img src="./images/slide_02.jpg" class="d-block w-100" alt="img2"/>
    </div>
    <div class="carousel-item">
      <img src="./images/slide_03.jpg" class="d-block w-100" alt="img3"/>
    </div>
  </div>
</div>      </>

  );
}



