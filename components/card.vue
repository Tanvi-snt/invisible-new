<template>
  <section class="card-section">
    <div class="container">
      <div class="card-inner-section">
        <div class="card-text">
          <h1>From small startups to large enterprises</h1>
          <p>
            While we love working with pre-revenue, early stage startups, we
            also enjoy helping large businesses grow.
          </p>
          <div class="card-vdo">
            <div class="card-play">
              <img src="~/assets/img/triangle.png" alt="" />
            </div>
            <div>
              <span>See how it works.</span>
              <h2>Watch video</h2>
            </div>
          </div>
        </div>
        <div class="startups-card">
          <div class="startup-wrapper">
            <div class="startup-wrap startup_position">
              <div class="startup-heading">
                <h1>Bajaj Finserv</h1>
                <img src="~/assets/img/heart.png" alt="" />
              </div>
              <div class="startup-img"></div>
              <p>
                India's largest & most diversified NBFC foused on lending, asset
                management, wealth management and insurance.
              </p>
            </div>
            <div class="startup-wrap">
              <div class="startup-heading">
                <h1>AVAX Nodes</h1>
                <img src="~/assets/img/heart.png" alt="" />
              </div>
              <div class="startup-img"></div>
              <p>
                Staking platform for Avalanche blockchain ecosystem, designed to
                function as a secure, globally distributed, decentralized
                network.
              </p>
            </div>
          </div>
          <div class="startup-wrapper">
            <div class="startup-wrap startup_position">
              <div class="startup-heading">
                <h1>Browserstack</h1>
                <img src="~/assets/img/heart.png" alt="" />
              </div>
              <div class="startup-img"></div>
              <p>
                Cloud platform that lets developers test their applications
                across on-demand browsers, operating systems and real mobile
                devices.
              </p>
            </div>
            <div class="startup-wrap">
              <div class="startup-heading">
                <h1>H&R Block</h1>
                <img src="~/assets/img/heart.png" alt="" />
              </div>
              <div class="startup-img"></div>
              <p>
                American tax preparation company operating approximately 12,000
                retail tax offices staffed by tax professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card-section {
  background-color: #21203a;
  padding-top: 75px;
  padding-bottom: 100px;
}

.card-text h1 {
  color: #ffffff;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  max-width: 475px;
  font-weight: 600;
  padding-top: 45px;
  margin-bottom: 0;
}

.card-text p {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 286px;
  padding-bottom: 17px;
  padding-top: 38px;
  margin-bottom: 31px;
  border-bottom: solid 1px #4d4d52;
}

.card-play {
  background-color: #ad80ff;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  position: relative;
  margin-right: 17px;
}

.card-text img {
  position: absolute;
  top: 18px;
  left: 21px;
}

.card-vdo {
  display: flex;
  align-items: center;
}
.card-vdo span {
  color: #ffffff;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 20px;
  opacity: 0.5;
  padding-bottom: 2px;
}

.card-vdo h2 {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 0;
}

.card-inner-section {
  display: flex;
  justify-content: space-between;
}
.startup-wrap h1 {
  color: #ffffff;
  font-size: 16.03px;
  letter-spacing: -0.4px;
  line-height: 21.86px;
  font-weight: 600;
  margin-bottom: 0;
}

.startup-wrap {
  background-color: #19182c;
  border-radius: 5.83px;
  padding: 20px 16px 16px 22px;
}

.startup-heading {
  display: flex;
  justify-content: space-between;
      padding-bottom: 16px;
}

.startup-wrap p {
  color: #ffffff;
  font-size: 13.11px;
  letter-spacing: -0.22px;
  line-height: 18.94px;
  opacity: 0.5;
  max-width: 212px;
  padding-top: 16px;
}

.startup-wrapper {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.startup-wrapper .startup_position {
  position: relative;
  top: 58px;
}

.startup-wrapper .startup-img {
    background-color: #21203A;
    height: 115px;

}

@media(min-width:320px) and (max-width:375px) {


.card-text img {
    top: 15px !important;
    left: 18px !important;
}

.card-play{
    width: 40px !important;
    height: 40px !important;
    
}


.startup-wrap p{
    font-size: 12.11px !important;
    padding-top: 10px !important;
}

.startup-wrap h1 {
    font-size: 14.03px !important;
    
}

.startup-wrap  {
    padding: 20px 11px 16px 11px !important;
}
}

@media (max-width: 767px) {
    .card-inner-section  {
        flex-direction: column;
    }

    .card-section {
    padding-top: 36px;
    padding-bottom: 72px;
  }

  .card-text h1 {
    font-size: 32px;
    line-height: 42px;
    max-width: 280px;
    padding-top: 14px;
    margin: auto;
    text-align: center;
  }

  .card-text p {
    font-size: 16px;
    line-height: 26px;
    max-width: 286px;
    padding-bottom: 14px;
    padding-top: 20px;
    text-align: center;
    margin: auto;
}

  .card-vdo  {
    justify-content: center;
    padding-top: 12px;
  }

  .startups-card {
    padding-top: 30px;
  }


.startup-wrapper {
    gap: 15px;
    margin-bottom: 20px;
  }

  
.startup-wrapper .startup_position  {
    top: 35px;
  }
}

@media (min-width: 768px) and (max-width: 992px)  {


.card-text h1 {
    font-size: 32px;
    letter-spacing: -1.4px;
    line-height: 42px;
    max-width: 315px;
    padding-top: 15px;
}


.card-text p  {
    font-size: 17px;
    line-height: 24px;
    max-width: 232px;
    margin-bottom: 26px;
}

.card-inner-section{
    column-gap: 22px;
}


.startup-wrapper {
    gap: 22px;
    margin-bottom: 22px;
}

}

@media (min-width: 993px) and (max-width: 1024px) {

.card-text h1  {
    font-size: 42px;
    line-height: 52px;
    padding-top: 38px;
    max-width: 330px;
}


.card-text p  {
  
    padding-bottom: 17px;
    padding-top: 24px;
    margin-bottom: 31px;
}
  
}

@media (min-width: 1025px) and (max-width: 1199px) {
  .card-text h1 {
    font-size: 52px;
    line-height: 58px;

}

}
</style>
