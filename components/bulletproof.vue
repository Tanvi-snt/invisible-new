<template>
  <section class="bullet-main-section">
    <img src="~/assets/img/blue.png" alt="" class="blue-wave" />
    <div class="bullet-section">
      <div class="container">
        <h1>Bulletproof UX for digital products</h1>
        <p>
          We help brands create products with incredible user experience, top of
          the line visual designs backed by copious amounts of analytics.
        </p>
        <div class="bullet-inner-section">
          <div class="header-bullet">
            <div class="triangle">
              <img
                src="~/assets/img/triangle.png"
                alt=""
                class="triangle-icon"
              />
            </div>

            <span>View showreel</span>
          </div>

          <div class="header-bullet">
            <div class="arrow">
              <img src="~/assets/img/arrow.png" alt="" class="arrow-icon" />
            </div>

            <span>Read More</span>
          </div>
        </div>
        <div class="bullet-img">
          <img src="~/assets/img/browser.png" alt="" />
          <img src="~/assets/img/slideshare.png" alt="" />
          <img src="~/assets/img/housing.png" alt="" />
          <img src="~/assets/img/oyo.png" alt="" />
        </div>
      </div>
      <img src="~/assets/img/stroke.png" alt="" class="stroke" />
    </div>
  </section>
</template>


<script>
export default {
  name: "Bulletproof",
};
</script>

<style scoped>
img.stroke {
  position: absolute;
  bottom: 0;
  left: -100px;
  z-index: -1;
}

img.blue-wave {
  position: absolute;
  z-index: 1;
  right: 290px;
  top: -104px;
}

.bullet-section {
  background-color: #21203a;
  padding-top: 122px;
  padding-bottom: 71px;
  position: relative;
  clip-path: polygon(0 0, 70% 0, 70% 100%, 0% 100%);
}

h1 {
  color: #ffffff;
  font-size: 72px;
  letter-spacing: -3px;
  line-height: 80px;
  max-width: 660px;
  font-weight: 600;
  margin-bottom: 0;
}

p {
  color: #ffffff;
  font-size: 20px;
  letter-spacing: -0.4px;
  line-height: 28px;
  opacity: 0.5;
  max-width: 466px;
  padding-top: 16px;
  padding-bottom: 44px;
  margin-bottom: 0;
}

.bullet-inner-section {
  display: flex;
  max-width: 330px;
  justify-content: space-between;
  padding-bottom: 191px;
}

.header-bullet {
  display: flex;
  align-items: center;
}

.bullet-inner-section span {
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 19px;
  font-weight: 600;
  color: #ffffff;
  padding-left: 11px;
}

.triangle {
  background-color: #ad80ff;
  border-radius: 20px;
  width: 50px;
  height: 32px;
  position: relative;
}

.triangle-icon {
  position: absolute;
  top: 10px;
  left: 22px;
}

.arrow {
  background-color: #ee3465;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  position: relative;
}

.arrow-icon {
  position: absolute;
  top: 5px;
  left: 5px;
}

.bullet-img img {
  margin-right: 50px;
}

.bullet-main-section {
  background-color: #2a284b;
  position: relative;
}

@media (min-width: 320px) and (max-width: 375px) {
  .bullet-inner-section span {
    font-size: 14px !important;
    line-height: 16px !important;
    padding-left: 8px !important;
  }

  .bullet-img img {
    width: 125px !important;
  }

  .bullet-img img:last-child {
    width: 65px !important;
  }
  h1 {
    font-size: 28px !important;
    line-height: 38px !important;
    max-width: 265px !important;
  }

  .triangle-icon {
    top: 8px !important;
    left: 18px !important;
  }

  .triangle {
    width: 42px !important;
    height: 28px !important;
  }
}

@media (max-width: 767px) {
  img.blue-wave {
    display: none;
  }

  .bullet-section {
    clip-path: none;
  }

  h1 {
    font-size: 32px;
    letter-spacing: -2px;
    line-height: 42px;
    max-width: 300px;
    margin: auto;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    max-width: 330px;
    margin: auto;
    text-align: center;
    padding-bottom: 28px;
  }

  .bullet-section {
    padding-top: 58px;
    padding-bottom: 48px;
  }

  .bullet-inner-section {
    max-width: 310px;
    padding-bottom: 100px;
    margin: auto;
  }

  .bullet-img {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    row-gap: 20px;
    align-items: center;
  }

  .bullet-img img {
    margin-right: 0;
    width: 150px;
  }
  .bullet-img img:last-child {
    width: 80px;
  }

  img.stroke {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  img.blue-wave {
     right: 67px;
    top: -86px;
    width: 342px;
  }

  h1 {
    font-size: 48px;
    line-height: 54px;
    max-width: 450px;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    max-width: 435px;
    padding-top: 16px;
    padding-bottom: 27px;
  }

  .bullet-inner-section {
    padding-bottom: 120px;
  }

  .bullet-section {
    padding-top: 80px;
    padding-bottom: 50px;
    clip-path: polygon(0 0, 71% 0, 71% 100%, 0% 100%);
  }

  .bullet-img img {
    margin-right: 22px;
    width: 110px;
  }
  .bullet-img img:last-child {
    width: 80px;
  }

  img.stroke {
    max-width: 100%;
  }
}

@media (min-width: 993px) and (max-width: 1024px) {
  img.stroke {
    max-width: 100%;
  }

  img.blue-wave {
    right: 82px;
    top: -88px;
    width: 515px;
  }

  h1 {
    font-size: 52px;
    letter-spacing: -2px;
    line-height: 62px;
    max-width: 520px;
  }

  .bullet-section {
    padding-top: 82px;
    padding-bottom: 65px;
    clip-path: polygon(0 0, 70% 0, 71% 100%, 0% 100%);
  }

  p {
    font-size: 18px;
    line-height: 28px;
    max-width: 440px;
    padding-bottom: 30px;
  }

  .bullet-inner-section {
    padding-bottom: 150px;
  }
}

@media (min-width: 1025px) and (max-width: 1199px) {
 img.blue-wave{
    right: 78px;
    top: -103px;
    width: 535px;
}

h1 {
    font-size: 58px;
    line-height: 72px;
    max-width: 610px;
  
}

.bullet-section {
    padding-top: 85px;
 
}
img.stroke {
    width: 100%;
}


.bullet-inner-section {
    padding-bottom: 140px;
}


.bullet-img img {
    margin-right: 35px;
}

.bullet-img img {
  width: 150px;
}
.bullet-img img:last-child {
    width: 60px;
  }
}
</style>
