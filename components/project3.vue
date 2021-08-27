<template>
    <section class="project_section-3">
     <div class="container">
        <div class="project_wrap_section">
            <h1>Projects under the wraps</h1>
        </div>
         
        <div class="project_wrap_img">
            <div class="project-swap-img">
                <img src="~/assets/img/project-wrap1.png" alt="">
            </div>
            <div>
                <img src="~/assets/img/project-wrap2.png" alt="" class="project-wrap2 project-ruby">
                <img src="~/assets/img/project-wrap3.png" alt="" class="project-ruby">
                <img src="~/assets/img/project-wrap4.png" alt="" class="project-wrap4">
            </div>
        </div>

 
     </div>
    </section>
</template>

<script>
export default {
  name: "Project3",
};
</script>

<style scoped>

 .project_section-3 {
     background-color: #21203A;
     padding-top: 150px;
     padding-bottom: 102px;
 }

 .project_wrap_section h1 {
  color: #FFFFFF;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  text-align: center;
  font-weight: 600;
  padding-bottom: 96px;
  margin-bottom: 0;
 }

 .project_wrap_img {
     display: flex;
    max-width: 1110px;
    margin: auto;
    column-gap: 30px;
 }

  .project_wrap_img img.project-wrap4 {
      padding-top: 30px;
  }

  .project_wrap_img img.project-wrap2 {
      padding-right: 22px;
  }

  @media(min-width:320px) and (max-width:375px) {
      .project_wrap_section h1 {
    font-size: 32px !important;
    line-height: 42px !important;
    padding-bottom: 28px !important;
    }

    .project-swap-img img, .project_wrap_img img.project-wrap4, img.project-ruby {
    width: 70%  !important;
  
}
  }

@media (max-width: 767px) {
      .project_wrap_img  {
        flex-direction: column;
        row-gap: 24px;
  }


    .project-swap-img img {
         width: 80%;
         margin: auto;
         display: block;
    }

    .project_wrap_img img.project-wrap4 {
         width: 80%;
         display: block;
         margin: auto;
         padding-top: 0;
      }

    .project_wrap_section h1 {
        font-size: 42px;
        line-height: 48px;
        text-align: center;
        padding-bottom: 35px;
    }

    img.project-ruby {
        width: 80%;
        display:block;
        margin: auto;
    }

    .project_wrap_img img.project-wrap2  {
        padding-right: 0;
    }


    .project_section-3  {
        padding-top: 80px;
        padding-bottom: 72px;
    }
}

  
@media (min-width: 768px) and (max-width: 992px) {
   
.project_section-3{
    padding-top: 100px;
    padding-bottom: 72px;
}

.project_wrap_section h1 {
    font-size: 38px;
    line-height: 42px;
    padding-bottom: 58px;
}

.project-swap-img img {
        width: 340px;
}

img.project-ruby {
        width: 160px;
}

.project_wrap_img img.project-wrap4 {
    padding-top: 15px;
    width: 330px;
}

.project_wrap_img img.project-wrap2 {
    padding-right: 14px;
}
}






@media (min-width: 993px) and (max-width: 1024px) {
     .project_wrap_section h1 {
    font-size: 48px;
    line-height: 52px;
    padding-bottom: 64px;
    }

    .project_section-3 {
    padding-top: 105px;
    padding-bottom: 80px;
    }

    .project-swap-img img {
        width: 465px;
    }

    img.project-ruby {
            width: 220px;
    }

    .project_wrap_img img.project-wrap2 {
    padding-right: 20px;
    }

    .project_wrap_img img.project-wrap4 {
    padding-top: 20px;
    width: 450px;
}
}

</style>


