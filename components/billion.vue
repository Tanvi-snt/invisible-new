<template>
  <div class="billion-section">
    <div class="container">
      <div class="billion-flex">
        <div class="card-group">
          <div class="billion-card">
            <div class="billion-card-inner">
              <h3>2 million daily tests</h3>
              <img src="~assets/img/eye.png" alt="" />
            </div>
            <p>80 million registered users</p>
          </div>
          <div class="billion-card">
            <div class="billion-card-inner">
              <h3>Users</h3>
              <img src="~assets/img/user.png" alt="" />
            </div>
            <p>80 million registered users</p>
            <div class="bar-charts">
              <div class="bar1 bar"></div>
              <div class="bar2 bar"></div>
              <div class="bar3 bar"></div>
              <div class="bar4 bar"></div>
              <div class="bar5 bar"></div>
              <div class="bar6 bar"></div>
              <div class="bar7 bar"></div>
              <div class="bar8 bar"></div>
              <div class="bar9 bar"></div>
              <div class="bar10 bar"></div>
            </div>
          </div>
        </div>
        <div class="billion-text">
          <h1>Over a billion people use apps made by us</h1>
          <p>
            We have helped build some of the world’s largest consumer products,
            which have become household brands since then.
          </p>
          <div class="button-case">
            <img src="~/assets/img/case.png" alt="" class="case" />
            <button>Read case studies</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Billion",
};
</script>


<style scoped>
.billion-section {
  background-color: #19182c;
  padding-top: 100px;
  padding-bottom: 100px;
}

.billion-flex {
  display: flex;
  justify-content: space-between;
  /* position: relative;
  left: -150px; */
}

.billion-flex .card-group {
  display: flex;
      position: relative;
    column-gap: 30px;
    left: -160px;
}

.billion-text h1 {
  color: #ffffff;
  font-weight: 600;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  max-width: 570px;
  margin-bottom: 0;
}

.billion-text p {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 445px;
  padding-top: 16px;
  padding-bottom: 36px;
  margin-bottom: 0;
}

.billion-text button {
  background-color: #ad80ff;
  border-radius: 4px;
  width: 250px;
  height: 60px;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
  font-weight: 600;
  padding-left: 14px;
  border: none;
}

.billion-card {
  background-color: #21203a;
  border-radius: 8px;
    width: 300px;
      height: 400px;
  padding: 28px 30px 30px 25px;
}

.billion-card-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.billion-card h3 {
  color: #ffffff;
  font-weight: 600;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  margin-bottom: 0;
}

.bar-charts {
  position: relative;
}

.billion-card p {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  width: 199px;
  padding-top: 5px;
  margin-bottom: 0;
}

.button-case {
  position: relative;
}

img.case {
  position: absolute;
  top: 18px;
  left: 20px;
}

.bar-charts div.bar1 {
  height: 106px;
  position: relative;
  top: 145px;
}

.bar-charts div.bar2 {
  height: 164px;
  position: relative;
  top: 87px;
}

.bar-charts div.bar3 {
  height: 45px;
  position: relative;
  top: 206px;
}
.bar-charts div.bar4 {
  height: 179px;
  position: relative;
  top: 72px;
}
.bar-charts div.bar5 {
  height: 109px;
  position: relative;
  top: 142px;
}

.bar-charts div.bar6 {
  height: 53px;
  position: relative;
  top: 197px;
}

.bar-charts div.bar7 {
  height: 103px;
  position: relative;
  top: 147px;
}

.bar-charts div.bar8 {
  height: 200px;
  position: relative;
  top: 50px;
}

.bar-charts div.bar9 {
  height: 148px;
  position: relative;
  top: 102px;
}

.bar-charts div.bar10 {
  height: 74px;
  position: relative;
  top: 177px;
}

.bar-charts div.bar {
  background-color: #ee3465;
  border-radius: 4px;
  width: 10px;
}

.bar-charts {
  display: flex;
  column-gap: 20px;
}

@media (min-width: 320px) and (max-width: 375px) {
  .billion-card {
    width: 184px !important;
    height: 230px !important;
  }

  img.case {
    width: 20px !important;
    top: 11px !important;
  }

  .billion-text button {
    width: 185px !important;
    height: 46px !important;
    font-size: 16px !important;
    line-height: 25px !important;
  }
  .bar-charts {
    column-gap: 12px;
}
}

@media (min-width: 575px) and (max-width: 767px) {
  .billion-card {
    width: 245px !important;
  }
  .billion-flex .card-group {
    position: static !important;
    margin: auto !important;
  }
  .bar-charts {
    column-gap: 17px !important;
}
}

@media (max-width: 767px) {
  .billion-section {
    padding-top: 56px;
    padding-bottom: 52px;
  }

  .billion-flex {
    flex-direction: column;
    position: static;
  }

  .button-case {
    width: max-content;
    margin: auto;
  }
  .billion-text {
    padding-top: 35px;
  }

  img.case {
    width: 22px;
    top: 13px;
    left: 8px;
  }

  .billion-text h1 {
    font-size: 28px;
    line-height: 38px;
    margin: auto;
    max-width: 250px;
    text-align: center;
  }

  .billion-text p {
    font-size: 16px;
    line-height: 26px;
    max-width: 445px;
    padding-top: 16px;
    padding-bottom: 24px;
    text-align: center;
    margin: auto;
  }

  .billion-text button {
    width: 200px;
    height: 50px;
    font-size: 18px;
    line-height: 28px;
    padding-left: 20px;
    margin: auto;
    display: block;
  }

  .billion-flex .card-group {
    column-gap: 20px;
    position: relative;
    left: -100px;
  }
  .billion-card {
    width: 300px;
    height: 290px;
    padding: 23px 18px 24px 18px;
  }

  .billion-card h3 {
    font-size: 16px;
    line-height: 25px;
  }
  .billion-card p {
    font-size: 16px;
    line-height: 24px;
    width: 168px;
  }

  .bar-charts {
    column-gap: 15px;
  }

  .bar-charts div.bar {
    width: 6px;
  }

  .bar-charts div.bar1 {
    top: 75px;
    height: 86px;
  }

  .bar-charts div.bar2 {
    top: 37px;
    height: 124px;
  }

  .bar-charts div.bar3 {
    top: 115px;
  }
  .bar-charts div.bar4 {
    top: 33px;
    height: 129px;
  }
  .bar-charts div.bar5 {
    top: 52px;
  }

  .bar-charts div.bar6 {
    top: 108px;
  }

  .bar-charts div.bar7 {
    top: 58px;
  }

  .bar-charts div.bar8 {
    top: 12px;
    height: 150px;
  }

  .bar-charts div.bar9 {
    top: 54px;
    height: 108px;
  }

  .bar-charts div.bar10 {
    top: 88px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .billion-flex .card-group {
    column-gap: 22px;
    flex-flow: nowrap;
    align-self: center;
  }
  .billion-card {
    width: 245px;
    height: 325px;
    padding: 28px 24px 26px 26px;
  }

  .billion-text h1 {
    font-size: 32px;
    letter-spacing: -1.4px;
    line-height: 38px;
  }

  .billion-flex {
    left: -165px;
    column-gap: 30px;
  }

  .billion-text p {
    padding-bottom: 28px;
  }

  img.case {
    top: 12px;
    left: 18px;
  }

  .billion-text button {
    width: 232px;
    height: 52px;
    font-size: 18px;
    line-height: 26px;
    padding-left: 12px;
  }

  .billion-card p {
    font-size: 16px;
    line-height: 20px;
    width: 152px;
  }

  .billion-section {
    padding-top: 65px;
    padding-bottom: 70px;
  }

  .bar-charts div.bar {
    width: 8px;
  }

  .bar-charts {
    column-gap: 15px;
  }

  .bar-charts div.bar1 {
    top: 106px;
    height: 86px;
  }

  .bar-charts div.bar2 {
    top: 48px;
    height: 144px;
  }

  .bar-charts div.bar3 {
    top: 146px;
  }
  .bar-charts div.bar4 {
    top: 33px;
    height: 159px;
  }
  .bar-charts div.bar5 {
    top: 82px;
  }

  .bar-charts div.bar6 {
    top: 139px;
  }

  .bar-charts div.bar7 {
    top: 89px;
  }

  .bar-charts div.bar8 {
    top: 12px;
    height: 180px;
  }

  .bar-charts div.bar9 {
    top: 65px;
    height: 128px;
  }

  .bar-charts div.bar10 {
    top: 119px;
  }

  .billion-text {
        position: relative;
        left: -100px;
  }
}

@media (min-width: 993px) and (max-width: 1024px) {
    .billion-text {
        position: relative;
        left: -100px;
  }
  .billion-text h1 {
    font-size: 42px;
    line-height: 48px;
  }
  .billion-card {
    width: 300px;
    height: 355px;
    padding: 22px 24px 24px 24px;
  }

  .billion-flex .card-group {
    row-gap: 30px;
  }

  .billion-flex {
    left: -167px;
    column-gap: 30px;
  }

  .billion-card {
    width: 300px;
  }
  .card-group {
    flex-flow: nowrap;
  }

  .billion-card h3 {
    font-size: 20px;
    line-height: 26px;
  }

  .billion-text {
    margin-left: 42px;
  }

  .billion-text h1 {
    font-size: 32px;
    line-height: 42px;
  }

  img.case {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .billion-text button {
    width: 230px;
    height: 55px;
    font-size: 18px;
    line-height: 28px;
  }

  .billion-section {
    padding-top: 65px;
    padding-bottom: 75px;
  }

  .bar-charts div.bar1 {
    top: 105px;
  }

  .bar-charts div.bar2 {
    top: 47px;
  }

  .bar-charts div.bar3 {
    top: 166px;
  }
  .bar-charts div.bar4 {
    top: 32px;
  }
  .bar-charts div.bar5 {
    top: 102px;
  }

  .bar-charts div.bar6 {
    top: 157px;
  }

  .bar-charts div.bar7 {
    top: 107px;
  }

  .bar-charts div.bar8 {
    top: 10px;
  }

  .bar-charts div.bar9 {
    top: 62px;
  }

  .bar-charts div.bar10 {
    top: 137px;
  }

  .bar-charts div.bar {
    width: 8px;
  }
}

@media (min-width: 1025px) and (max-width: 1199px) {
    .billion-text {
        position: relative;
        left: -120px;
  }
  .billion-flex .card-group {
    flex-wrap: nowrap;
        left: -205px;
  }

  .billion-card {
    width: 320px;
    height: 360px;
    padding: 24px 25px 26px 26px;
  }

  .billion-text h1 {
    font-size: 46px;
    line-height: 54px;
    width: 450px;
  }

  .billion-flex {
    left: -228px;
  }
}
</style>