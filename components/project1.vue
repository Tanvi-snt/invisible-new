<template>
    <section class="project_section">
     <div class="container">
         <div class="project_wrapper">
            <h1>What we’ve built recently</h1>

            <div class="img-box">
              <img src="~/assets/img/project-img.png" alt="" class="project-img">
            </div>
            <h4>Smokescreen</h4>
         </div>
         

 
     </div>
    </section>
</template>

<script>
export default {
  name: "Project1",
};
</script>

<style scoped>

 .project_section {
       background-color: #21203A;
       padding-top: 80px;
       padding-bottom: 100px;
 }

 .project_wrapper h1 {
    color: #FFFFFF;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 0;
 }

 .img-box {
  background-color: #2A284B;
  border-radius: 8px;
  max-width: 1110px;
  height: 500px;
  margin: auto;
  margin-top: 75px;
  margin-bottom: 23px;
  position: relative;
 }

 .project_wrapper h4 {
   color: #FFFFFF;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
  max-width: 1110px;
  margin: auto;


 }

 img.project-img {
   position: absolute;
   bottom: 0;
   right: 0;
 }

 .nft_slider {
   display: flex;
 }

 .nft_slider_img {
   display: flex;
   flex-direction: column;
 }

@media (width:320px) {
  .img-box {
    height: 150px !important;
  }
}

@media(min-width:320px) and (max-width:375px) {
  .project_wrapper h1 {
    font-size: 32px !important;
    line-height: 42px !important;
  }

  .img-box {
    height: 175px !important;
    margin-top: 42px !important;
  }

  img.project-img {
    padding-left: 35px !important;
  }

  .project_wrapper h4 {
    font-size: 18px !important;
    line-height: 24px !important;
  
}
}


@media (min-width: 525px) and (max-width: 767px) {
  .img-box  {
     height: 245px !important;

  }
}

@media (max-width: 767px) {
  .project_section  {
    padding-top: 48px;
    padding-bottom: 70px;
}

  .project_wrapper h1 {
    font-size: 42px;
    line-height: 50px;
  
  }

  img.project-img {
    width: 100%;
    padding-left: 50px;
  }

  .img-box  {
    height: 200px;
    margin-top: 56px;
    margin-bottom: 18px;
}
}


@media (min-width: 768px) and (max-width: 992px) {
    .project_section {
    padding-top: 46px;
    padding-bottom: 68px;
}


.img-box {
    height: 320px;
    margin-top: 42px;
    margin-bottom: 20px;
}

.project_wrapper h1 {
    font-size: 38px;
    line-height: 32px;

  }


img.project-img{
    width: 92%;
  }


.project_wrapper h4  {
    font-size: 20px;
    line-height: 28px;
}
}

 @media (min-width: 993px) and (max-width: 1024px) {


.project_section  {
    padding-top: 58px;
    padding-bottom: 78px;
  }

  .project_wrapper h1  {
    font-size: 48px;
    line-height: 52px;
  
  }

    img.project-img  {
    width: 92%;
  }


.img-box {
    height: 425px;
    margin-top: 54px;
    margin-bottom: 23px;
  }
 }

</style>


