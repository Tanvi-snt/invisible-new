<template>
    <section class="project_section-2">
     <div class="container">

         <div class="nft_platform">
           <div class="nft_slider">
              <div class="slider-controls">
                <img src="~/assets/img/next-arrow.png" alt="">
                <img src="~/assets/img/previous-arrow.png" alt="">
              </div>
              <div class="nft_slider_img">
                <img src="~/assets/img/slider-1.png" alt="">
                <img src="~/assets/img/slider-2.png" alt="">
                <img src="~/assets/img/slider-3.png" alt="">
              </div>
              
            </div>
           <div class="nft-content">
             <h2>Collectix NFT platform</h2>
             <p>One of our favorite DeFi projects is an NFT aggregator platform which we built from scratch. We build it from scratch and were responsible for the UX, visuals, animations and development.</p>
             <button>Case study 
                 <img src="~/assets/img/arrow.png" alt="" class="case_arrow" />
             </button>
           </div>

         </div>
     </div>
    </section>
</template>

<script>
export default {
  name: "Project2",
};
</script>

<style scoped>

 .project_section-2 {
       background-color: #19182C;
 }

.nft_platform {
    margin: auto;
    justify-content: space-between;
    display: flex;
    column-gap: 50px;
    max-width: 1110px;
}
 .nft_slider {
   display: flex;
   column-gap: 50px;
 }

 .slider-controls {
     display: flex;
     flex-direction: column;
     row-gap: 10px;
     padding-top: 100px;
 }

 .nft_slider_img {
   display: flex;
   flex-direction: column;
   row-gap: 30px;
 }

 .nft-content {
     align-self: center;
 }

 .nft-content h2 {
    color: #FFFFFF;
    font-size: 36px;
    letter-spacing: -1.5px;
    line-height: 44px;
    font-weight: 600;
    max-width: 330px;
    margin-bottom: 0;
 }

 .nft-content p {
  color: #FFFFFF;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 330px;
  padding-top: 16px;
  padding-bottom: 36px;
  margin-bottom: 0;
 }

 .nft-content button {
    background-color: #AD80FF;
  border-radius: 4px;
  width: 168px;
    color: #FFFFFF;
  font-size: 18px;
  letter-spacing: -0.4px;
  line-height: 22px;
  font-weight: 600;
  padding:15px 0;
  border: none;
 }

 .case_arrow {
     position: relative;
    top: 5px;
    left: 8px;
 }

 @media(min-width:320px) and (max-width:375px) {
   
 }

@media (max-width: 767px) {
    .nft_platform {
      flex-direction: column;
      row-gap: 32px;
    }


.nft_slider {
    column-gap: 22px;
    justify-content: center;
}

.slider-controls  {
    padding-top: 62px;
}

.nft_slider_img {
  width: 80%;
}

.nft-content h2{
    font-size: 28px;
    line-height: 38px;
    text-align: center;
}

.nft-content p {
    font-size: 16px;
    line-height: 26px;
    padding-top: 12px;
    padding-bottom: 28px;
    text-align: center;
}

.nft-content button {
    width: 155px;
    font-size: 16px;
    padding: 12px 0;
    margin: auto;
    display: block;
}

.case_arrow {
    top: 0px;
}

.project_section-2 {
    background-color: #19182C;
    padding-bottom: 35px;
}

}

@media (min-width: 768px) and (max-width: 992px) {
 .nft_slider_img img {
   width: 350px;
 } 

 .nft_platform  {
    column-gap: 32px;
}


.nft_slider  {
    column-gap: 32px;
}

.nft-content p  {
    padding-top: 12px;
    padding-bottom: 30px;
}

.nft-content h2 {
    font-size: 32px;
    line-height: 36px;

}


.case_arrow {
    top: 1px;
}
  
}

@media (min-width: 993px) and (max-width: 1024px) {
  .nft_slider_img img {
     width: 500px;
  }

  .nft_slider_img {
    row-gap: 25px;
  }

  .slider-controls {
    row-gap: 10px;
    padding-top: 80px;
  }

  .nft_slider {
    column-gap: 38px;
  }

  .case_arrow  {
    top: 1px;
  }
}
</style>


