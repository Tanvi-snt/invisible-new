<template>
  <div>
    <section class="product-section-wrapper">
      <div class="container">
        <div class="product-wrapper">
          <div class="product-wrap">
            <h1>Get the right products to market, faster</h1>
            <p>
              Create screens directly in Method or add your images from Sketch
              or Figma.
            </p>
            <button>
              Get Started
              <img src="~/assets/img/arrow.png" alt="" />
            </button>
            <div class="social-market">
              <img src="~/assets/img/social.png" alt="" />
            </div>
          </div>
          <img src="~/assets/img/creative.png" alt="" class="creative" />
          <img src="~/assets/img/account.png" alt="" class="account" />
        </div>
      </div>
    </section>

    <section class="product-method-wrapper">
      <div class="container">
        <div class="product-method-wrap">
          <div class="product-info-method">
            <h4>Product of the day</h4>
            <h1>The best customer experiences are built with Method</h1>
            <p>
              Create screens directly in Method or add your images from Sketch
              or Figma. You can even sync designs from your cloud storage!
            </p>

            <div class="playlist-wrap">
              <div class="product-playlist product-align">
                <img src="~/assets/img/triangle.png" alt="" />
                <span>Play Video</span>
              </div>
              <div class="product-align">
                <img src="~/assets/img/downloads.png" alt="" class="download" />
                <span>Download</span>
              </div>
            </div>
          </div>

          <img src="~/assets/img/chat.png" alt="" class="chat" />
        </div>
      </div>
    </section>
    <section class="product-sale-wrapper">
      <div class="container">
        <div class="product-sale-wrap">
          <div class="product-info-method">
            <h4>Product of the day</h4>
            <h1>Perfect for sales, marketing and support</h1>
            <p>
              Create screens directly in Method or add your images from Sketch
              or Figma. You can even sync designs from your cloud storage!
            </p>

            <div class="playlist-wrap">
              <div class="product-playlist product-align">
                <img src="~/assets/img/triangle.png" alt="" />
                <span>Play Video</span>
              </div>
              <div class="product-align">
                <img src="~/assets/img/downloads.png" alt="" class="download" />
                <span>Download</span>
              </div>
            </div>
          </div>
          <img src="~/assets/img/sale.png" alt="" class="sale" />
        </div>
      </div>
    </section>
    <section class="product-team-wrapper">
      <div class="container">
        <div class="product-team-wrap">
          <div class="product-team-client">
            <img src="~/assets/img/H&R.png" alt="" class="client-brand" />
            <img src="~/assets/img/Bajaj.png" alt="" class="bajaj" />
            <img src="~/assets/img/total.png" alt="" class="client-brand" />
            <img src="~/assets/img/mobi.png" alt=" " class="client-brand" />
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here, making it look like readable English.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>

    <section class="product-term-section">
      <div class="container">
        <div class="product-term-wrapper">
          <div class="product-info-method">
            <h1>We believe in helping people pay attention to what matters</h1>
            <p>
              Create screens directly in Method or add your images from Sketch
              or Figma.
            </p>
            <button>Read More</button>
          </div>

          <div class="tab-inner-content">
            <div class="tab-slot">
              <div class="tab-slot-img">
                <img src="~/assets/img/envolpe.png" alt="" />
              </div>
              <div>
                <h1>Property Managment</h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>

            <div class="tab-slot">
              <div class="tab-slot-img">
                <img src="~/assets/img/wireframes.png" alt="" />
              </div>
              <div>
                <h1>Email Marketing</h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
            <div class="tab-slot">
              <div class="tab-slot-img">
                <img src="~/assets/img/flag.png" alt="" />
              </div>
              <div>
                <h1>Engage Customers</h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-support-wrapper">
      <div class="container">
        <div>
          <div class="support-wrap product-info-method">
            <h1>Perfect for sales, marketing and support</h1>
            <p>
              Create screens directly in Method or add your images from Sketch
              or Figma. You can even sync designs from your cloud storage!
            </p>
          </div>

          <img src="~/assets/img/feature.png" alt="" />
        </div>
      </div>
    </section>

    <section class="product-inbox-wrapper">
      <div class="container">
        <div class="product-inbox-wrap">
          <h1>Great work starts in your inbox</h1>
          <img src="~/assets/img/desktop.png" alt="" />
          <p>
            Create screens directly in Method or add your images from Sketch or
            Figma. You can even sync designs from your cloud storage!
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectTwo",
};
</script>

<style scoped>
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  color: #ffffff;
}

span,
button {
  font-family: "Inter", sans-serif;
}

.product-section-wrapper {
  background-color: #21203a;
  position: relative;
  padding-top: 80px;
  padding-bottom: 50px;
  overflow: hidden;
}

.product-wrap h1 {
  font-size: 72px;
  letter-spacing: -3px;
  line-height: 80px;
  max-width: 475px;
  font-weight: 600;
}

.product-wrap p {
  font-size: 20px;
  letter-spacing: -0.4px;
  line-height: 28px;
  max-width: 445px;
  padding-top: 20px;
  padding-bottom: 36px;
}

.product-wrap button {
  background-color: #ee3465;
  border-radius: 8px;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
  border: none;
  font-weight: 600;
  padding: 16px 26px;
  margin-bottom: 180px;
}

.product-wrap button img {
  padding-left: 19px;
}

img.creative {
  position: absolute;
  top: 0;
  right: -25px;
}
img.account {
  position: absolute;
  top: 165px;
  right: 362px;
}

.product-method-wrapper {
  background-color: #19182c;
  padding: 245px 0;
  position: relative;
  overflow: hidden;
}

.product-info-method h4 {
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
}
.product-info-method h1 {
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  max-width: 539px;
  font-weight: 600;
  padding: 15px 0;
}

.product-info-method p {
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 445px;
}

img.chat {
  position: absolute;
  top: 100px;
  right: -5px;
}

.product-playlist img {
  background-color: #ad80ff;
  border-radius: 20px;
  padding: 10px 24px 10px 26px;
}

.playlist-wrap span {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 19px;
  font-weight: 600;
}
.playlist-wrap {
  display: flex;
  align-items: center;
  padding-top: 42px;
  column-gap: 30px;
}

img.download {
  background-color: #2a284b;
  border-radius: 100%;
  padding: 6px;
}

.product-align {
  display: flex;
  align-items: center;
  column-gap: 11px;
}

.product-sale-wrapper {
  background-color: #21203a;
  padding: 100px 0;
}

.product-sale-wrap {
  background-color: #19182c;
  border-radius: 8px;
  padding: 80px;
  position: relative;
}

img.sale {
  position: absolute;
  bottom: -12px;
  right: -6px;
}

.product-team-wrapper {
  background-color: #19182c;
  padding: 100px 0;
}

.product-team-wrap p {
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 920px;
  text-align: center;
  margin: auto;
  padding: 42px 0;
}

.product-team-wrap button,
.product-inbox-wrap button {
  border-radius: 4px;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
  border: none;
  font-weight: 600;
  padding: 16px 36px;
  background-color: #ad80ff;
  display: block;
  margin: auto;
}

.product-term-section {
  background-color: #21203a;
  padding: 100px 0;
}

.product-term-wrapper .product-info-method h1 {
  max-width: 575px;
}

.product-term-wrapper .product-info-method button {
  border-radius: 4px;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
  border: none;
  font-weight: 600;
  padding: 16px 40px;
  background-color: #ad80ff;
  margin-top: 36px;
}

.tab-slot h1 {
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
}

.tab-slot p {
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 286px;
  padding-top: 6px;
}

.tab-slot-img img {
  padding: 12px;
  background-color: #2a284b;
  border-radius: 100%;
}

.tab-inner-content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.tab-inner-content .tab-slot {
  display: flex;
  column-gap: 16px;
}

.product-term-wrapper {
  display: flex;
  justify-content: space-between;
}

.product-support-wrapper {
  padding-top: 100px;
  background-color: #21203a;
  height: 900px;
  position: relative;
}

.product-support-wrapper .product-info-method h1 {
  max-width: 635px;
  padding: 0;
}
.product-support-wrapper .product-info-method p {
  max-width: 445px;
}

.product-support-wrapper .support-wrap {
  display: flex;
  justify-content: space-between;
}

.product-support-wrapper img {
  width: 100%;
  margin-top: 58px;
  position: absolute;
  left: 0;
  height: 618px;
}

.product-inbox-wrapper {
  background-color: #21203a;
  padding: 100px 0;
}
.product-inbox-wrap h1 {
  font-weight: 600;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  max-width: 540px;
  text-align: center;
  margin: auto;
  padding-bottom: 60px;
}

.product-inbox-wrap p {
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 730px;
  text-align: center;
  margin: auto;
  padding-top: 51px;
  padding-bottom: 36px;
}

.product-inbox-wrap img {
  display: block;
  margin: auto;
  width: 100%;
}

.product-team-client {
  display: flex;
  justify-content: center;
  column-gap: 56px;
}

@media (min-width: 320px) and (max-width: 375px) {
  .product-wrap h1 {
    font-size: 32px !important;
    line-height: 42px !important;
    max-width: 280px !important;

}

.product-section-wrapper  {
    padding-top: 28px !important;
}

.product-wrap button {
    padding: 12px 14px !important;
    margin-bottom: 30px !important;
}

.product-wrap button img {
    padding-left: 8px !important;
}

.product-info-method h1 {
    font-size: 28px !important;
    line-height: 38px !important;
    max-width: 276px !important;
 
}

.product-info-method h4 {
    font-size: 18px !important;
    line-height: 20px !important;
}

.playlist-wrap span  {
    font-size: 14px !important;
    line-height: 18px !important;
}

.product-sale-wrap {
    padding: 15px !important;
}

.playlist-wrap  {
    padding-top: 24px !important;
    column-gap: 16px !important;
    padding-bottom: 28px !important;
}

.product-team-client {
    column-gap: 28px !important;
    row-gap: 20px !important;
}

.product-team-client img {
    width: 100px !important;
}

.product-term-section, .product-inbox-wrapper, .product-method-wrapper {
    padding: 45px 0 !important;
}

.tab-slot h1 {
    font-size: 18px !important;
    line-height: 26px !important;
}


.tab-slot p {
    font-size: 16px !important;
    line-height: 24px !important;
    padding-top: 4px !important;
}

.tab-slot-img img  {
    padding: 8px !important;
}

.product-support-wrapper {
    padding-top: 45px !important;
}

.product-support-wrapper img  {
    height: 200px !important;
}

.product-inbox-wrap h1 {
    font-size: 32px !important;
    line-height: 42px !important;
    padding-bottom: 26px !important;
}




}

@media (max-width: 767px)  {
 

  img.account, img.creative {
      display: none;
  }


.product-wrap h1 {
    font-size: 38px;
    letter-spacing: -2px;
    line-height: 48px;
    max-width: 345px;
    margin: auto;
    text-align: center;
}


.product-wrap p {
    font-size: 16px;
    max-width: 320px;
    padding-top: 12px;
    text-align: center;
    padding-bottom: 24px;
    margin: auto;
}


.product-wrap button img {
    padding-left: 12px;
  }


.product-wrap button {
    font-size: 16px;
    line-height: 24px;
    padding: 14px 20px;
    margin: auto;
    margin-bottom: 38px;
    display: block;
}


.product-term-wrapper .product-info-method h1 {
    max-width: 330px;
}



.product-term-wrapper{
    flex-direction: column;
}

.social-market img {
  display: block;
  margin: auto;
  }


.product-section-wrapper {
    padding-top: 46px;
   
}

.product-info-method h1 {
    font-size: 32px;
    line-height: 42px;
    max-width: 325px;
    padding: 10px 0;
    text-align: center;
    margin: auto;
}

.product-info-method h4 {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
}


.product-info-method p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin: auto;
}


.product-term-wrapper .product-info-method button {
    font-size: 16px;
    line-height: 24px;
    padding: 14px 30px;
    display: block;
    margin: auto;
    margin-top: 25px;
}


.product-term-section, .product-inbox-wrapper, 
.product-method-wrapper 
{
    padding: 65px 0;
}


.product-inbox-wrap p {
    font-size: 16px;
    line-height: 24px;
    max-width: 585px;
    padding-top: 32px;
    padding-bottom: 30px;
}


.product-support-wrapper .product-info-method h1 {
    max-width: 400px;
}

.tab-inner-content {
    align-items: center;
    padding-top: 32px;
    row-gap: 20px;
}


.tab-slot h1 {
    font-size: 20px;
    line-height: 28px;
}


.tab-inner-content .tab-slot {
    column-gap: 12px;
}


.tab-slot-img img {
    padding: 10px;
}


.product-support-wrapper .support-wrap {
    flex-direction: column;
    row-gap: 20px;
}

.product-support-wrapper img {
    width: 100%;
    margin-top: 46px;
    height: 250px;
}


.product-support-wrapper {
    padding-top: 65px;
    height: 500px;
}

.product-inbox-wrap h1 {
    font-size: 38px;
    line-height: 48px;
    max-width: 385px;  
    padding-bottom: 32px;
}


.product-sale-wrap{
    padding: 45px;
}


img.sale {
    position: static;
    width: 85%;
    margin: auto;
    display: block;
}


.product-sale-wrapper {
    padding: 65px 0;
}


.product-team-wrap p {
    font-size: 16px;
    line-height: 24px;
    max-width: 585px;
    padding: 32px 0;
}


.product-team-wrap button, .product-inbox-wrap button {
    font-size: 16px;
    line-height: 24px;
    padding: 14px 30px;
    
}


.product-team-wrapper {
    padding: 65px 0;
}



.product-team-client{
    column-gap: 36px;
    flex-wrap: wrap;
    row-gap: 25px;
}

.product-team-client img {
  width: 150px;
}

.playlist-wrap {
    padding-top: 32px;
    column-gap: 26px;
    justify-content: center;
    padding-bottom: 30px;
}


.product-playlist img {
    padding: 10px 20px 10px 22px;
}

 img.chat {
       width: 85%;
    display: block;
    margin: auto;
    position: static;
 }
}



@media (min-width: 768px) and (max-width: 992px) {
  .product-team-client img {
    width: 135px;
  }

  .product-team-client {
    column-gap: 30px;
  }

  img.creative {
    top: 26px;
    width: 380px;
  }

  .product-section-wrapper {
    padding-top: 42px;
    padding-bottom: 32px;
  }
  img.account {
    top: 129px;
    right: 189px;
    width: 201px;
  }

  .product-wrap h1 {
    font-size: 46px;
    line-height: 56px;
    max-width: 380px;
  }

  .product-wrap p {
    max-width: 325px;
    padding-top: 16px;
    padding-bottom: 24px;
    font-size: 18px;
  }

  .product-wrap button img {
    padding-left: 12px;
  }

  .product-wrap button {
    font-size: 18px;
    padding: 14px 20px;
    margin-bottom: 47px;
  }

  .product-info-method h1 {
    font-size: 42px;
    line-height: 56px;
    max-width: 450px;
    padding: 12px 0;
  }

  img.chat {
    width: 340px;
    top: 70px;
  }

  .product-playlist img {
    padding: 8px 20px 8px 22px;
  }

  .product-info-method h4 {
    font-size: 20px;
    line-height: 26px;
  }

  .playlist-wrap {
    padding-top: 30px;
    column-gap: 26px;
  }

  .product-method-wrapper {
    padding: 150px 0;
  }

  img.sale {
    width: 275px;
    bottom: -8px;
  }

  .product-sale-wrap {
    padding: 40px;
  }

  .product-sale-wrapper,
  .product-team-wrapper,
  .product-term-section,
  .product-inbox-wrapper {
    padding: 75px 0;
  }

  .product-team-wrap button,
  .product-inbox-wrap button {
    font-size: 18px;
    padding: 14px 30px;
  }

  .product-term-wrapper .product-info-method button {
    font-size: 18px;
    padding: 14px 30px;
    margin-top: 30px;
  }

  .tab-inner-content {
    justify-content: space-around;
  }

  .tab-slot h1 {
    font-size: 20px;
    line-height: 26px;
  }

  .product-term-wrapper .product-info-method h1 {
    max-width: 410px;
  }

  .product-support-wrapper img {
    margin-top: 35px;
    height: 485px;
  }


.tab-slot-img img {
    padding: 8px;
  
}

  .product-support-wrapper {
    padding-top: 85px;
    height: 720px;
  }

  .product-inbox-wrap h1 {
       font-size: 46px;
    line-height: 52px;
    max-width: 480px;
    padding-bottom: 38px;
  }

  .product-inbox-wrap img {
    width: 85%;
  }

  .product-inbox-wrap p {
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .product-method-wrapper {
    padding: 100px 0;
  }

  .product-info-method h1 {
    font-size: 32px;
    line-height: 42px;
    max-width: 320px;
    padding: 8px 0;
  }

  .product-info-method p {
    max-width: 365px;
  }

  .product-team-wrap p {
    padding: 32px 0;
}

.product-team-wrap button, .product-inbox-wrap button {
    padding: 12px 26px;
}

.product-support-wrapper .product-info-method p {
    max-width: 395px;
  }
}

@media (min-width: 993px) and (max-width: 1024px) {
  img.creative {
    width: 465px;
  }

  img.account {
    top: 114px;
    right: 242px;
    width: 254px;
  }

  .product-wrap h1 {
    font-size: 52px;
    line-height: 60px;
    max-width: 425px;
  }

  .product-wrap p {
    max-width: 400px;
    padding-top: 16px;
    padding-bottom: 30px;
  }

  .product-wrap button img {
    padding-left: 12px;
  }

  .product-wrap button {
    font-size: 18px;
    padding: 14px 20px;
    margin-bottom: 47px;
  }

  .product-info-method h1 {
    font-size: 42px;
    line-height: 56px;
    max-width: 450px;
    padding: 12px 0;
  }

  img.chat {
    width: 450px;
  }

  .product-method-wrapper {
    padding: 150px 0;
  }

  img.sale {
    width: 408px;
    bottom: -12px;
  }

  .product-sale-wrap {
    padding: 65px;
  }

  .product-sale-wrapper,
  .product-team-wrapper,
  .product-term-section,
  .product-inbox-wrapper {
    padding: 85px 0;
  }

  .product-team-wrap button,
  .product-inbox-wrap button {
    font-size: 18px;
    padding: 14px 30px;
  }

  .product-term-wrapper .product-info-method button {
    font-size: 18px;
    padding: 14px 30px;
    margin-top: 30px;
  }

  .tab-inner-content {
    justify-content: space-around;
  }

  .tab-slot h1 {
    font-size: 20px;
    line-height: 26px;
  }

  .product-term-wrapper .product-info-method h1 {
    max-width: 465px;
  }

  .product-support-wrapper img {
    margin-top: 35px;
    height: 485px;
  }

  .product-support-wrapper {
    padding-top: 85px;
    height: 720px;
  }

  .product-inbox-wrap h1 {
    font-size: 48px;
    line-height: 56px;
    max-width: 480px;
    padding-bottom: 38px;
  }

  .product-inbox-wrap img {
    width: 85%;
  }

  .product-inbox-wrap p {
    padding-top: 35px;
    padding-bottom: 35px;
  }
}


@media (min-width: 1025px) and (max-width: 1199px) {
   img.creative {
    width: 465px;
  }

  img.account {
    top: 114px;
    right: 242px;
    width: 254px;
  }

  .product-wrap h1 {
    font-size: 52px;
    line-height: 60px;
    max-width: 425px;
  }

  .product-wrap p {
    max-width: 400px;
    padding-top: 16px;
    padding-bottom: 30px;
  }

  .product-wrap button img {
    padding-left: 12px;
  }

  .product-wrap button {
    font-size: 18px;
    padding: 14px 20px;
    margin-bottom: 47px;
  }

  .product-info-method h1 {
    font-size: 42px;
    line-height: 56px;
    max-width: 450px;
    padding: 12px 0;
  }

  img.chat {
    width: 450px;
  }

  .product-method-wrapper {
    padding: 150px 0;
  }

  img.sale {
    width: 408px;
    bottom: -12px;
  }

  .product-sale-wrap {
    padding: 65px;
  }

  .product-sale-wrapper,
  .product-team-wrapper,
  .product-term-section,
  .product-inbox-wrapper {
    padding: 85px 0;
  }

  .product-team-wrap button,
  .product-inbox-wrap button {
    font-size: 18px;
    padding: 14px 30px;
  }

  .product-term-wrapper .product-info-method button {
    font-size: 18px;
    padding: 14px 30px;
    margin-top: 30px;
  }

  .tab-inner-content {
    justify-content: space-around;
  }

  .tab-slot h1 {
    font-size: 20px;
    line-height: 26px;
  }

  .product-term-wrapper .product-info-method h1 {
    max-width: 465px;
  }

  .product-support-wrapper img {
    margin-top: 35px;
    height: 485px;
  }

  .product-support-wrapper {
    padding-top: 85px;
    height: 720px;
  }

  .product-inbox-wrap h1 {
    font-size: 48px;
    line-height: 56px;
    max-width: 480px;
    padding-bottom: 38px;
  }

  .product-inbox-wrap img {
    width: 85%;
  }

  .product-inbox-wrap p {
    padding-top: 35px;
    padding-bottom: 35px;
  } 
}
</style>