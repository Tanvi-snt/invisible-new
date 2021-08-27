<template>
  <footer>
    <div class="container">
      <div class="footer-section">
        <div class="footer-upper-section">
          <div class="footer-logo">
            <logo />
            <p>
              User experience agency based in Mumbai, specialised in building
              SaaS, IoT & DeFi products.
            </p>

            <button>
              Talk to us
              <img src="~/assets/img/arrow.png" alt="" class="footer-arrow" />
            </button>
          </div>
          <div class="footer-contact">
            <h3 class="footer-text">Contact</h3>
            <p>Feel free to contact us for business or general enquiries.</p>
            <h3 class="footer-text">team@invisible.af</h3>
            <div class="footer-icon">
              <div class="footer-circle">
                <img src="~/assets/img/insta.png" alt="" />
              </div>
              <div class="footer-circle">
                <img src="~/assets/img/twitter.png" alt="" />
              </div>
              <div class="footer-circle">
                <img src="~/assets/img/linkdin.png" alt="" />
              </div>
            </div>
          </div>
          <div class="footer-dribble">
            <h3 class="footer-text">Dribble</h3>
              <div class="dribble-col">
                <div>
                  <img src="~/assets/img/big.png" alt="" class="dribble_big">

                  <div class="dribble-small-img">
                    <img src="~/assets/img/small.png" alt="" class="dribble-margin-right">
                    <img src="~/assets/img/small.png" alt="">
              
                  </div>
                </div>
                <div>
                  <div class="dribble-margin dribble-small">
                    <img src="~/assets/img/small.png" alt="">
                  </div>
                  <div class="dribble-margin dribble-small">
                    <img src="~/assets/img/small.png" alt="">
                  </div>
                    <div class="dribble-small" >
                    <img src="~/assets/img/small.png" alt="">
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="copyright-section">
          <p>Copyright © 2021 Invisible Studios Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/logo";

export default {
  name: "TheFooter",
  components: {
    logo: Logo,
  },
};
</script>

<style scoped>
footer {
  background-color: #19182C;
  padding-top: 57px;
  padding-bottom: 41px;
}

.footer-upper-section {
  display: flex;
  justify-content: space-between;
  padding-bottom: 38px;
  border-bottom: solid 1px #2a284b;
}

.footer-logo p {
  color: #62637c;
  font-size: 16px;
  letter-spacing: -0.2px;
  line-height: 26px;
  max-width: 255px;
  font-weight: 500;
  padding-top: 24px;
  padding-bottom: 24px;
}

.footer-contact p {
  color: #62637c;
  font-size: 16px;
  letter-spacing: -0.2px;
  line-height: 26px;
  max-width: 255px;
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 22px;
}

.footer-contact a {
  text-decoration: none;
}

.footer-logo button {
  background-color: #ad80ff;
  border-radius: 6px;
  width: 148px;
    padding: 10px 30px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 19px;
  position: relative;
  border: none;
  text-align: left;
}

img.footer-arrow {
  position: absolute;
  right: 10px;
}

.footer-text {
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
}

.footer-circle {
  background-color: #2a284b;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  position: relative;
  margin-right: 15px;
  margin-top: 28px;
}

.footer-circle img {
  position: absolute;
  top: 12px;
  left: 12px;
}

.footer-icon {
  display: flex;
}
.copyright-section p {
  color: #62637c;
  font-size: 16px;
  letter-spacing: -0.2px;
  line-height: 26px;
  font-weight: 500;
  padding-top: 41px;
}


.footer-dribble h3 {
  padding-bottom: 16px;
}

.dribble-col {
  display: flex;
  column-gap: 10px;
}

.dribble-margin {
  margin-bottom: 8px;
}

.dribble-small-img {
  margin-top:8px
}
.dribble-margin-right {
  margin-right: 8px;
}

p, h3 {
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .footer-upper-section {
    padding-bottom: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 32px;
  }

.footer-logo p {
    text-align: center;
  }

  .footer-logo button {
    margin: auto;
    display: block;
  }

  .footer-text {
    text-align: center;
}

.footer-contact p{
    text-align: center;
    margin: auto;
}


.footer-icon {
    justify-content: center;
}

footer {
    padding-top: 38px;
    padding-bottom: 35px;
}

.copyright-section p{
    padding-top: 26px;
    text-align: center;
}

.dribble-margin-right {
    margin-right: 4px;
}

.dribble-col{
    column-gap: 8px;
}
}


@media (min-width: 768px) and (max-width: 992px) {
  .footer-logo p {
    max-width: 190px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.footer-contact p {
   
    max-width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
}

img.dribble_big {
  width: 120px;
}

  .dribble-small-img img, .dribble-small img {
    width: 55px;
  }

  .dribble-margin-right{
    margin-right: 3px;
}

.dribble-col{
    column-gap: 8px;
  }

  .footer-logo button {
    width: 130px;
    padding: 10px 20px;
  }

  .footer-circle img {
    top: 9px;
    left: 9px;
  }

  .footer-circle {
    width: 42px;
    height: 42px;
    margin-top: 25px;
  }
}

@media (min-width: 993px) and (max-width: 1024px) {

  footer {
    padding-top: 50px;
    padding-bottom: 38px;
  }

  .footer-upper-section {
    justify-content: space-evenly;
    padding-bottom: 32px;
  }


.copyright-section p {
    padding-top: 28px;
  }

}

</style>
