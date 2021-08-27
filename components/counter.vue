<template>
<div>
   <section class="counter_section">
    <div class="container">
          <div class="counter_inner_Section">
            <div>
              <h1>300+</h1>
              <p>Projects</p>
            </div>
            <div>
              <h1>32</h1>
              <p>Countries</p>
            </div>
            <div>
              <h1>12</h1>
              <p>Years in business</p>
            </div>
            <div>
              <h1>40+</h1>
              <p>Teammates</p>
            </div>

          </div>
    </div>
  </section> 
  <section class="slide-share_section">
      <div class="container">
        <client-only>
          <carousel v-bind="options">
            <slide v-for="i in 3" :key="i">
              <div class="slide_wrapper">
                <div class="slide_content">
                  <div>
                    <h1>Gaurav Gupta</h1>
                    <p>SlideShare</p>
                  </div>

                  <h2>
                    A friendly chilled out guy who is an easy fit to any early
                    stage startup. He designs and codes like a pro! In short, he
                    knows his stuff.
                  </h2>

                  <div class="slider_controls">
                    <img src="~/assets/img/next.png" alt="" />
                    <img src="~/assets/img/prev.png" alt="" />
                  </div>
                </div>
                <div class="slider_img">
                  <img src="~/assets/img/slide2.png" alt="" class="slide" />
                  <img src="~/assets/img/slider1.png" alt="" />
                </div>
              </div>
            </slide>
          </carousel>
        </client-only>
      </div>
    </section>
</div>
 

</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        paginationEnabled: false,
        autoplay: true,
      },
    };
  },
}
</script>


<style scoped>

.counter_section{
    background-color: #21203A;
    padding:100px 0;
}

.counter_inner_Section {
  display: flex;
  justify-content: space-around;
}

.counter_inner_Section h1 {
   color: #FFFFFF;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  text-align: center;
  font-weight: 600;
  padding-bottom: 10px;
  margin-bottom: 0;
}

.counter_inner_Section p {
    color: #FFFFFF;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  text-align: center;
  margin-bottom: 0;
}

.slide_wrapper {
  display: flex;
  justify-content: space-between;
}

.slide-share_section {
     background-color: #21203A;
    padding:100px 0;
}

.slide_content h1 {
    color: #FFFFFF;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
  padding-bottom: 6px;
  margin-bottom: 0;
}

.slide_content p {
   color: #FFFFFF;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 20px;
  opacity: 0.5;
  margin-bottom: 0;
}

.slide_content h2 {
   color: #FFFFFF;
  font-size: 36px;
  letter-spacing: -1.5px;
  line-height: 44px;
  max-width: 540px;
  font-weight: 600;
  padding-top: 148px;
  padding-bottom: 126px;
  margin-bottom: 0;
}

.slider_img {
  display: flex;
  column-gap: 30px;
}

.slider_controls img {
      background-color: #2A284B;
    border-radius: 100%;
    padding: 6px;
    margin-right: 10px;
}

@media (min-width: 320px) and (max-width: 375px) {
  .slide_wrapper {
    overflow: hidden;
  }

  .counter_inner_Section p {
    max-width: 70px;
}
}

@media (max-width: 767px) {

.counter_section {
    padding: 52px 0;
}


.counter_inner_Section h1 {
    font-size: 32px;
    letter-spacing: -1.4px;
    line-height: 42px;
    padding-bottom: 8px;
}
.counter_inner_Section p{
    font-size: 16px;
    line-height: 26px;
}

.slide-share_section {
    padding: 54px 0;
  }

  .slide_content h2 {
    font-size: 28px;
    line-height: 38px;
    max-width: 376px;
    padding-top: 52px;
    padding-bottom: 30px;
}

.slide_wrapper {
  flex-direction: column; 
  align-items: center;

}

.slider_img img.slide {
  max-width: 300px;
}


.slider_img {
    column-gap: 20px;
}
.slide_content {
  padding-bottom: 25px;
}

.slider_img img {
  height: 500px;
}


}

@media (min-width: 768px) and (max-width: 992px) {
  .slide_content h2 {
    font-size: 28px;
    line-height: 38px;
    max-width: 358px;
    padding-top: 115px;
    
}

.slide_wrapper {
     column-gap: 22px;
}

.slider_img  {
    width: 315px;
    column-gap: 16px;

}

.slide-share_section  {
    padding: 65px 0;
    overflow: hidden;
}

.slider_img img.slide {
  width: 285px;
}


.counter_inner_Section h1 {
    font-size: 42px;
    letter-spacing: 0.6px;
    line-height: 48px;
}

.counter_section  {
    padding: 65px 0;
}



}


@media (min-width: 993px) and (max-width: 1024px) {

.counter_section {
    padding: 68px 0;
  }

.counter_inner_Section h1 {
    font-size: 48px;
    line-height: 52px;

  }
  .slider_img {
    width: 500px;
  }

  .slide_wrapper {
    column-gap: 42px;
}

.slide_content h2 {
    font-size: 32px;
    line-height: 42px;
    max-width: 362px;
    padding-top: 105px;
   
  }

  .slide-share_section {
    padding: 65px 0;
    overflow: hidden;

  }
}

@media (min-width: 1025px) and (max-width: 1199px) {

  .slider_img img.slide {
    width: 100%;
  }

  .counter_section {
    padding: 75px 0;
}


.counter_inner_Section h1{
    font-size: 48px;
    letter-spacing: -1.4px;
    line-height: 52px;
    
}


.slide-share_section {
    padding: 70px 0;
    overflow: hidden;
    
}
.slide_wrapper {
    column-gap: 20px;
}


.slide_content h2 {
    font-size: 32px;
    line-height: 44px;
    padding-top: 125px;
    padding-bottom: 110px;
}

}

</style>