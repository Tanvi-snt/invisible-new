<template>
  <div>
    <section class="cloud-section">
      <div class="container">
        <div class="cloud-wrapper">
          <h1>Welcome To The Developer Cloud</h1>
          <p>
            Create screens directly in Method or add your images from Sketch or
            Figma.
          </p>
          <div class="cloud-play">
            <img src="~/assets/img/triangle.png" alt="" />
          </div>

          <img src="~/assets/img/cloud.png" alt="" class="cloud-img" />
        </div>
      </div>
    </section>
    <section class="price-chart-section">
      <div class="container">
        <div class="price-chart-wrapper">
          <h1>Monthly Price Change</h1>
          <p>
            Create screens directly in Method or add your images from Sketch or
            Figma. You can even sync designs from your cloud storage!
          </p>
          <button>Explore Market</button>
        </div>
      </div>
    </section>
<!-- 
    <section class="price-change-section">
      <div class="container">
        <div class="change-wrapper">
          <h1>Yearly Price Change</h1>
    
        </div>
      </div>
    </section> -->

    <section class="price-statistics-section">
      <div class="container">
        <div class="statistics-wrapper">
          <h1>Overall Statistics</h1>
          <p>
            Create screens directly in Method or add your images from Sketch or
            Figma. You can even sync designs from your cloud storage!
          </p>

          <div class="statistics-data">
            <div class="data-name">
              <h2>Apple iPhone XS Max</h2>
              <h5>Apple Store</h5>
            </div>
            <div class="data-color">
              <h2>Space Gray</h2>
              <h5>Color</h5>
            </div>
            <div class="data-memory">
              <h2>256GB</h2>
              <h5>Capacity</h5>
            </div>
            <div class="data-price">
              <h2>$1214</h2>
              <h5>Price</h5>
            </div>
          </div>
          <div class="statistics-data">
            <div class="data-name">
              <h2>Apple iPhone XS Max</h2>
              <h5>Apple Store</h5>
            </div>
            <div class="data-color">
              <h2>Space Gray</h2>
              <h5>Color</h5>
            </div>
            <div class="data-memory">
              <h2>256GB</h2>
              <h5>Capacity</h5>
            </div>
            <div class="data-price">
              <h2>$1214</h2>
              <h5>Price</h5>
            </div>
          </div>
          <div class="statistics-data">
            <div class="data-name">
              <h2>Apple iPhone XS Max</h2>
              <h5>Apple Store</h5>
            </div>
            <div class="data-color">
              <h2>Space Gray</h2>
              <h5>Color</h5>
            </div>
            <div class="data-memory">
              <h2>256GB</h2>
              <h5>Capacity</h5>
            </div>
            <div class="data-price">
              <h2>$1214</h2>
              <h5>Price</h5>
            </div>
          </div>

          <button>Explore Market</button>
        </div>
      </div>
    </section>

    <section class="pie-section">
      <div class="container">
        <div class="pie-wrapper">
          <div class="pie-box">
            <h1>Device</h1>
            <div class="piechart"></div>
            <div class="pie-info">
              <div class="pie-label">
                <div class="tab-dot"></div>
                <h4>Tablet</h4>
              </div>
              <div class="pie-label">
                <div class="desk-dot"></div>
                <h4>Desktop</h4>
              </div>
              <div class="pie-label">
                <div class="smart-dot"></div>

                <h4>Smartphone</h4>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section class="project-slider-section">
      <div class="container">
        <div class="project-container">
          <client-only>
            <carousel v-bind="options">
              <slide v-for="i in 2" :key="i">
                <div class="project-slider-wrap ">
                  <div class="slider-profile">
                  <img src="~/assets/img/input.png" alt="" />
                </div>
                 <div class="slider-info">
                  <div class="ratings">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                  </div>
                  <h2>
                    Professionals in their craft! All products were super great
                    with strong attention to details, and overall vibe
                  </h2>

                  <h4>Bakhtiyar Sattarov</h4>
                  <p>UX/UI Designer</p>
                </div>
                </div>
                

              </slide>
            </carousel>
          </client-only>
          <!-- <img src="~/assets/img/next-arrow.png" alt="" /> -->

          <!-- <img src="~/assets/img/previous-arrow.png" alt=""> -->
        </div>
      </div>
    </section>
    <section class="cloud-cart-section">
      <div class="container">
        <div class="cart-wrapper">
          <div class="cloud_cart">
            <div class="cart-header">
              <p>SALE</p>
              <div class="cart-rating">
                <div class="star star-size"></div>
                <span>4.5</span>
              </div>
            </div>
            <h1>Osmo Pro / RAW</h1>
            <p>
              In professional filmmaking, time and budget matter. By combining
              portability, stability, high image quality and expandability, the
              Osmo Pro and Osmo RAW make shots that once needed a crew available
              to a single operator
            </p>
            <div class="list">
              <ul>
                <li>Dual Screens</li>
                <li>RockSteady</li>
                <li>UHD Image Quality</li>
              </ul>
              <ul>
                <li>4K HDR Video</li>
                <li>8x Slow Motion</li>
                <li>Waterproof</li>
              </ul>
            </div>
            <div class="cart-footer">
              <div class="price">
                <h4>$340.00</h4>
                <p>Free Shipping</p>
              </div>
              <button class="cart-btn">Add To Cart</button>
              <button class="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="porfolio-section">
        <div class="container">
          <div class="portfolio-wrapper">
              <h5>Portfolio</h5>
              <h1>Latest Awesome Works</h1>
              <client-only>
            <carousel v-bind="options">
              <slide v-for="i in 5" :key="i">
                <div class="porfolio-wrap">
                     <img src="~/assets/img/mobile.png" alt="">

                </div>
                
              </slide>
            </carousel>
          </client-only>
          </div>
        </div>
      </section>  
  
  </div>
</template>

<script>


export default {
  name: "ProjectCloud",
    data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        paginationEnabled: false,
        autoplay: true,
      },
      chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
    };
  }
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

p {
  opacity: 0.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}
button {
  border: none;
}
span,
button {
  font-family: "Inter", sans-serif;
}

.cloud-section {
  background-color: #21203a;
  padding-top: 100px;
}

.cloud-wrapper h1 {
  font-size: 72px;
  letter-spacing: -3px;
  line-height: 80px;
  max-width: 635px;
  text-align: center;
  margin: auto;
}

.cloud-wrapper p {
  font-size: 20px;
  letter-spacing: -0.4px;
  line-height: 28px;
  max-width: 445px;
  text-align: center;
  margin: auto;
  padding-top: 16px;
  padding-bottom: 55px;
}

.cloud-wrapper .cloud-play {
  width: 60px;
  height: 60px;
  background-color: #ee3465;
  border-radius: 100%;
  position: relative;
  margin: auto;
}

.cloud-play img {
  position: absolute;
  top: 26px;
  left: 26px;
}

img.cloud-img {
  margin: auto;
  display: block;
  margin-top: 61px;
}

.project-slider-section {
  padding: 100px 0;
  background-color: #21203a;
}

.slider-info h2 {
  font-size: 36px;
  letter-spacing: -1.5px;
  line-height: 44px;
  max-width: 540px;
  padding-top: 70px;
}

.slider-profile img {
  position: relative;
  top: 45%;
  left: 45%;
}

.slider-info h4 {
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  padding-top: 78px;
  padding-bottom: 6px;
}

.slider-info p {
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 20px;
}

.project-slider-wrap {
  display: flex;
  justify-content: space-between;
}

.slider-profile {
  background-color: #ad80ff;
  border-radius: 8px;
  width: 350px;
}

.star {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;
  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid #fff;
  border-left: 0.3em solid transparent;
  font-size: 16px;
}
.star:before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: 0.6em;
  left: -1em;
  border-right: 1em solid transparent;
  border-bottom: 0.7em solid #fff;
  border-left: 1em solid transparent;
  transform: rotate(-35deg);
}
.star:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: 0.6em;
  left: -1em;
  border-right: 1em solid transparent;
  border-bottom: 0.7em solid #fff;
  border-left: 1em solid transparent;
  transform: rotate(35deg);
}

.cloud-cart-section {
  background-color: #2a284b;
  padding: 100px 0;
}

.cart-wrapper .cloud_cart {
  background-color: #21203a;
  border-radius: 8px;
  padding: 30px 30px 34px 30px;
  max-width: 445px;
}

.cloud_cart h1 {
  font-size: 36px;
  letter-spacing: -1.5px;
  line-height: 44px;
  padding-top: 16px;
}

.cloud_cart p {
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  max-width: 385px;
  padding-top: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid #2a284b;
}

.cart-footer .price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
}

.cart-header p {
  font-size: 14px;
  letter-spacing: -0.4px;
  text-align: center;
  background-color: #ee3465;
  border-radius: 4px;
  padding: 0 8px;
  opacity: 1;
}

.cart-header {
  display: flex;
  column-gap: 13px;
}

.cart-header .star-size {
  font-size: 9px;
  border-bottom: 0.7em solid #2a284b;
}

.cart-header .star-size:after,
.cart-header .star-size:before {
  border-bottom: 0.7em solid #2a284b;
}
.cart-wrapper {
  display: flex;
  justify-content: flex-end;
}

.cart-footer .price p {
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 20px;
}

.cart-rating span {
  color: #3e4462;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 20px;
}

.cart-rating {
  background-color: #eff2f6;
  border-radius: 4px;
  display: flex;
  padding: 0 5px;
  align-items: center;
  column-gap: 2px;
}

button.cart-btn {
  border: 2px solid #ad80ff;
  border-radius: 8px;
  color: #345dee;
  font-size: 18px;
  letter-spacing: -0.4px;
  line-height: 22px;
  width: 185px;
  text-align: center;
  padding: 14px 0;
  background-color: transparent;
  font-weight: 600;
}

button.buy-btn {
  background-color: #ad80ff;
  border-radius: 4px;
  width: 185px;
  padding: 14px 0;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.4px;
  line-height: 22px;
  text-align: center;
  font-weight: 600;
  margin-left: 8px;
}

.list ul li {
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
  font-weight: 600;
  width: 185px;
  padding-bottom: 6px;
}

.list ul {
  list-style: none;
  margin-bottom: 0;
}

.cloud_cart .list {
  display: flex;
  padding-top: 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid #2a284b;
}

.price-chart-section {
  background-color: #19182c;
  padding: 100px 0;
}

.price-statistics-section {
  background-color: #21203a;
  padding: 100px 0;
}

.price-chart-wrapper h1,
.statistics-wrapper h1 {
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  text-align: center;
  font-weight: 600;
}

.price-chart-wrapper p,
.statistics-wrapper p {
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  max-width: 570px;
  text-align: center;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 64px;
}

.price-chart-wrapper button,
.statistics-wrapper button {
  background-color: #ad80ff;
  border-radius: 4px;
  width: 190px;
  padding: 16px 0;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
  text-align: center;
  font-weight: 600;
  display: block;
  margin: auto;
  margin-top: 69px;
}

.price-change-section {
  background-color: #21203a;
  padding: 100px 0;
}

.statistics-data h2 {
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
}

.statistics-data h5 {
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  padding-top: 14px;
  font-weight: normal;
}

.statistics-data {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr 2fr;
  column-gap: 48px;
  place-items: center;
  padding-top: 39px;
  border-top: 1px solid #2a284b;
  padding-bottom: 40px;
}

.piechart {
  display: block;
  width: 293px;
  height: 293px;
  border-radius: 50%;
  background-image: conic-gradient(#18214d 60deg, #345dee 0 275deg, #ee3465 0);
  border: 4px solid #0c1431;
  margin: auto;
}

.pie-section {
  background-color: #19182c;
  padding: 100px 0;
}

.pie-box {
  border: 2px solid #162150;
  border-radius: 8px;
  width: 540px;
  padding: 46px 66px 58px 65px;
}

.pie-box h1 {
  font-size: 36px;
  letter-spacing: -1.5px;
  line-height: 44px;
  padding-bottom: 31px;
}

.pie-info h4 {
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
}

.pie-info {
  display: flex;
  justify-content: space-between;
  padding-top: 48px;
}


.price-chart-wrapper button, .statistics-wrapper button {
    width: 180px;
    padding: 14px 0;
    margin-top: 62px;
}

.tab-dot {
  background-color: #ee3465;
  border-radius: 100%;
  width: 15px;
  height: 15px;
}

.desk-dot {
  background-color: #2a284b;
  border-radius: 100%;
  width: 15px;
  height: 15px;
}

.smart-dot {
  background-color: #ad80ff;
  border-radius: 100%;
  width: 15px;
  height: 15px;
}

.pie-label {
  display: flex;
  column-gap: 11px;
}

.porfolio-section {
  background-color: #21203A;
  padding-top: 100px;
  padding-bottom: 166px;
}

.portfolio-wrapper h5 {
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  text-align: center;
  padding-bottom: 15px;
}

.portfolio-wrapper h1 {
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  max-width: 729px;
  text-align: center;
  margin: auto;
}

.porfolio-wrap img {
  margin: auto;
  display: block;
}

.portfolio-wrapper .porfolio-wrap {
  padding-top: 60px;
}


@media (max-width: 767px) {
  img.cloud-img  {
    width: 100%;
    margin-top: 50px;
  }


.cloud-wrapper h1 {
    font-size: 38px;
    line-height: 48px;
  
}


.price-chart-wrapper p, .statistics-wrapper p {
    font-size: 16px;
    line-height: 24px;
  
}


.statistics-data {
    display: flex;
    column-gap: 33px;
    row-gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 15px;
}


.price-chart-wrapper button, .statistics-wrapper button {
    width: 155px;
}


.statistics-data h2 {
    font-size: 18px;
    line-height: 26px;
}

.price-chart-wrapper button .statistics-wrapper button{
  font-size: 16px;
}


.pie-box {
    width: 100%;
    padding: 32px 35px 35px 38px;
}


.piechart {
    width: 236px;
    height: 236px;
 
}

.pie-box h1 {
    font-size: 28px;
    line-height: 42px;
    padding-bottom: 16px;
}


.price-statistics-section,.pie-section {
    padding: 70px 0;
}


  .slider-info h2 {
    font-size: 30px;
    line-height: 42px;
    max-width: 380px;
    margin: auto;
    padding-top: 38px;
    text-align: center;
  }

  .star {
    font-size: 14px;
  }

  .slider-info h4 {
    font-size: 20px;
    line-height: 28px;
    padding-top: 46px;
  }

  .slider-profile {
    width: 350px;
    height: 350px;
    margin: auto;
  }

.slider-info {
  display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
}

.cart-wrapper .cloud_cart {

    padding: 26px 26px 28px 26px;
    max-width: 400px;
}


.cloud_cart h1 {
    font-size: 28px;
    line-height: 42px;
}


.cloud_cart p{
    font-size: 16px;
    line-height: 24px;
    padding-top: 8px;
    padding-bottom: 16px;
}

button.cart-btn, button.buy-btn {
    width: 160px;
font-size: 16px;
}

  .project-slider-wrap  {
    flex-direction: column;
  }



.portfolio-wrapper h1{
    font-size: 32px;
    line-height: 42px;
}

.price-chart-wrapper button, .statistics-wrapper button {
    font-size: 18px;
    line-height: 24px;
}

.porfolio-section {
    background-color: #21203A;
    padding-top: 65px;
    padding-bottom: 88px;
}
.cart-header p {
    font-size: 14px;
    padding: 0 8px;
}
.porfolio-wrap img {
  width: 80%;
}



.cloud-wrapper p {
    font-size: 16px;
    line-height: 24px;
    max-width: 340px;
    padding-bottom: 30px;
}


.cloud-wrapper .cloud-play {
    width: 50px;
    height: 50px;
}


.price-chart-wrapper h1, .statistics-wrapper h1 {
    font-size: 32px;
    line-height: 42px;
}


.cloud-section {
    padding-top: 56px;
}


.cloud-play img {
    top: 20px;
    left: 22px;
}


}
@media (min-width: 768px) and (max-width: 992px) {

  .project-slider-wrap  {
    column-gap: 25px;
  }

  img.cloud-img {
    width: 100%;
    margin-top: 42px
  }


.cloud-wrapper h1 {
    font-size: 46px;
    line-height: 52px;
    max-width: 525px;
   
}
.statistics-data {
  grid-template-columns: 5fr 3fr 2fr 2fr 2fr;
  column-gap: 30px;
  padding-top: 30px;
  padding-bottom: 38px;
}


.statistics-data h2 {
    font-size: 20px;
    line-height: 30px;
}


.cloud-wrapper p {
    padding-bottom: 38px;
    font-size: 18px;
    max-width: 425px;
    
}

.cloud-section  {
    padding-top: 65px;
}


.price-chart-wrapper h1, .statistics-wrapper h1, .portfolio-wrapper h1 {
    font-size: 42px;
    line-height: 52px;
   
}

  .slider-info h2 {
    font-size: 32px;
    line-height: 42px;
    max-width: 500px;
    padding-top: 34px;
  }

  .star {
    font-size: 12px;
  }

  .slider-info h4 {
    padding-top: 50px;
    font-size: 20px;
    line-height: 24px;
  }
  
.porfolio-section{
        padding-top: 65px;
    padding-bottom: 65px;
}
.price-chart-wrapper button, .statistics-wrapper button {
  font-size: 18px;
  line-height: 28px;
}


.portfolio-wrapper .porfolio-wrap {
    padding-top: 38px;
}


.porfolio-wrap img {
  
    width: 40%;
}

.cloud-cart-section {
  padding: 65px 0;

}
.cart-wrapper .cloud_cart {
  max-width: 425px;
}


.pie-box {
    width: 470px;
    padding: 30px 36px 42px 36px;
}

.pie-box h1  {
    font-size: 32px;
    line-height: 42px;
    padding-bottom: 16px;
}

.piechart {
      width: 260px;
    height: 260px;
}

button.cart-btn, button.buy-btn {
  width: 165px;
}

.cloud_cart h1 {
    font-size: 30px;
    line-height: 40px;
    padding-top: 12px;
}

}

@media (min-width: 993px) and (max-width: 1024px)  {
  img.cloud-img {
    width: 100%;
    margin-top: 42px
  }


.cloud-wrapper h1 {
    font-size: 52px;
    line-height: 60px;
    max-width: 575px;
   
}


.cloud-wrapper p {
    padding-bottom: 38px;
}

.cloud-section  {
    padding-top: 65px;
}


.price-chart-wrapper h1, .statistics-wrapper h1, .portfolio-wrapper h1 {
    font-size: 42px;
    line-height: 52px;
   
}

.star {
    font-size: 14px;
  }

  .slider-info h4 {
    padding-top: 56px;
  }

  
.porfolio-section{
    padding-top: 76px;
    padding-bottom: 100px;
}

}

</style>


