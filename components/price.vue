<template>
  <div>
    <section class="price-section">
      <div class="container">
        <div class="price-inner-section">
          <h1>Pricing Options</h1>
          <p>
            Create screens directly in Method or add your images from Sketch or
            Figma. You can even sync designs from your cloud storage!
          </p>
          <div class="toggle-button">
            <span>Weekly</span>
            <div class="toggle-theme">
              <input type="checkbox" class="checkbox" id="checkbox" />
              <label for="checkbox" class="label">
                
                <div class="ball"></div>
              </label>
            </div>
            <span>Hourly</span>
          </div>
          <div class="price-term">
            <div class="term">
              <h2>Long term</h2>
              <p>Usually project which are built from scratch</p>
              <div class="term-clause">
                <h1>$2000</h1>
                <span>per week</span>
              </div>
            </div>
            <div class="term">
              <h2>Short term</h2>
              <p>Projects with very specific, quantifiable requirements</p>
              <div class="term-clause">
                <h1>$75</h1>
                <span>per hour</span>
              </div>
            </div>
          </div>

          <button>Get Started</button>
        </div>
      </div>
    </section>
    <section class="price_section_2">
      <div class="container">
        <div class="price_section_2">
          <h1>À la carte</h1>
          <div class="price_branding_section">
            <div class="price_type">
              <h2>Branding</h2>
              <ul>
                <li>Logo & identity</li>
                <li>Branding elements & stationery</li>
                <li>Social network profiles</li>
              </ul>
              <div class="price_type_clause">
                <span>starts from</span>
                <h1>$799</h1>
              </div>
            </div>
            <div class="price_type">
              <h2>Illustrations/Animations</h2>
              <ul>
                <li>2D vector illustrations</li>
                <li>3D illustrations / rigging</li>
                <li>2D/3D animations / motion design</li>
              </ul>
              <div class="price_type_clause">
                <span>starts from</span>
                <h1>$399</h1>
              </div>
            </div>
            <div class="price_type">
              <h2>Website design</h2>
              <ul>
                <li>Rapid prototyping</li>
                <li>Responsive HTML CSS</li>
                <li>Bootstrap / Tailwind / Foundations</li>
              </ul>
              <div class="price_type_clause">
                <span>starts from</span>
                <h1>$999</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  </div>
</template>

<script>
export default {
  name: "Price",
   
};
</script>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 52px;
    height: 28px;
    background-color: #21203a;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    position: relative;
    transform: scale(1.5);
    border: 2px solid #EE3465;
      cursor: pointer;

}
.ball {
    width: 18px;
    height: 18px;
    background-color: #EE3465;
    position: absolute;
    border-radius: 50%;
    transition: transform 0.2s linear;
}
section {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #21203a;
}

.price-inner-section h1 {
  color: #ffffff;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 0;
}

.price-inner-section p {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 600px;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 41px;
  margin: auto;
}

.toggle-button span {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 19px;
  font-weight: 600;
}

.toggle-button {
     display: flex;
    justify-content: center;
    column-gap: 26px;
    align-items: center;
  padding-bottom: 50px;
}

.price-term {
  display: flex;
  column-gap: 30px;
  justify-content: center;
  padding-bottom: 50px;
}

.term {
  padding: 30px 82px;
  border: 2px solid #ad80ff;
  border-radius: 8px;
}

.term h2 {
  color: #ffffff;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
}

.term p {
  max-width: 280px;
  padding-top: 6px;
  padding-bottom: 16px;
}

.term span {
  color: #ffffff;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 20px;
  opacity: 0.5;
}

.price-inner-section button {
  background-color: #ad80ff;
  border-radius: 4px;
  color: #ffffff;
  padding: 15px 30px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.4px;
  line-height: 22px;
  text-align: center;
  border: none;
  margin: auto;
  display: block;
}

.term .term-clause {
  display: flex;
  justify-content: center;
  column-gap: 13px;
}

.price_section_2 h1 {
  color: #ffffff;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  font-weight: 600;
  padding-bottom: 98px;
  margin-bottom: 0;
}

.price_type {
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  border-top: solid 1px #2a284b;
  padding-top: 30px;
}

.price_type h2 {
  color: #ffffff;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 0;
}

.price_type ul {
  list-style: none;
}

.price_type ul li {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  padding-bottom: 18px;
}

.price_type_clause span {
  color: #ffffff;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 20px;
  opacity: 0.5;
}

.price_type_clause {
  display: flex;
  column-gap: 9px;
}

@media (min-width: 320px) and (max-width: 375px) {
  .price_type ul li {
    font-size: 16px !important;
    line-height: 22px !important;
    padding-bottom: 12px !important;
  }

  .price-inner-section h1 {
    font-size: 32px !important;
    line-height: 42px !important;
  }

  section {
    padding-top: 38px !important;
    padding-bottom: 38px !important;
  }

  .price_type h2 {
    font-size: 20px !important;
  }

  .price-term {
    padding-bottom: 38px !important;
    margin: 0 25px !important;
  }

  .ball {
    width: 12px !important;
    height: 12px !important;
}

.toggle-button {
  padding-bottom: 35px !important;
}
}

@media (max-width: 767px) {
  .term {
    padding: 30px 48px;
  }

  .price-term {
    padding-bottom: 50px;
    flex-direction: column;
    row-gap: 20px;
    margin: 0 20px;
  }

  .price-inner-section h1 {
    font-size: 36px;
    line-height: 48px;
  }

  .price-inner-section p {
    font-size: 16px;
    line-height: 26px;
    max-width: 370px;
    padding-bottom: 18px;
  }

  section {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .term .term-clause {
    column-gap: 8px;
  }

  .price_section_2 h1 {
    font-size: 36px;
    line-height: 42px;
    padding-bottom: 52px;
    text-align: center;
  }

  .price-inner-section button {
    padding: 12px 24px;
    font-size: 16px;
    line-height: 22px;
  }

  .price_type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .price_type ul {
    text-align: center;
  }

  .price_type ul li {
    line-height: 24px;
    padding-bottom: 16px;
  }

  .price_type_clause {
    column-gap: 9px;
  }

  .price_type h2 {
    padding-bottom: 14px;
  }


  .label{
    width: 40px;
    height: 22px;
  
}

.ball {
    width: 14px;
    height: 14px;
}

.toggle-button  {
    column-gap: 20px;
}
}

@media (min-width: 768px) and (max-width: 992px) {
  section {
    padding-top: 48px;
    padding-bottom: 50px;
  }

  .price-inner-section h1 {
    font-size: 42px;
    line-height: 50px;
  }

  .price-term {
    column-gap: 24px;
    padding-bottom: 36px;
  }

  .toggle-button {
    padding-bottom: 36px;
  }

  .term {
    padding: 26px 42px;
  }

  .price_section_2 h1 {
    font-size: 42px;
    line-height: 50px;
    padding-bottom: 58px;
  }

  .price_type {
    grid-template-columns: 4fr 5fr 3fr;
  }

  .price_type h2 {
    font-size: 18px;
    line-height: 26px;
  }

  .label{
    width: 46px;
    height: 24px;
  
}

.ball {
    width: 16px;
    height: 16px;
}

.toggle-button  {
    column-gap: 26px;
}
}

@media (min-width: 993px) and (max-width: 1024px) {
  .price-inner-section h1 {
    font-size: 45px;
    line-height: 56px;
  }

  section {
    padding-top: 72px;
    padding-bottom: 58px;
  }

  .term {
    padding: 30px 52px;
  }

  .price-term {
    padding-bottom: 36px;
  }

  .toggle-button {
    padding-bottom: 36px;
  }

  .price_section_2 h1 {
    font-size: 48px;
    line-height: 56px;
    padding-bottom: 60px;
  }

  .price_type h2 {
    font-size: 18px;
  }

  .price_type ul li {
    padding-bottom: 16px;
  }

.label{
    width: 46px;
    height: 24px;
  
}

.ball {
    width: 16px;
    height: 16px;
}

.toggle-button  {
    column-gap: 26px;
}
}

@media (min-width: 1025px) and (max-width: 1199px) {
  .label{
    width: 46px;
    height: 24px;
  
}
  .ball {
    width: 16px;
    height: 16px;
  }

.toggle-button  {
    column-gap: 26px;
}
  section {
    padding-top: 74px;
    padding-bottom: 82px;
  }

  .price-inner-section h1 {
    font-size: 52px;
    line-height: 58px;
  }

  .price_section_2 {
    padding-top: 48px;
    padding-bottom: 72px;
  }

  .price_section_2 h1 {
    font-size: 50px;
    line-height: 52px;
    padding-bottom: 74px;
  }

  .price_type h2 {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>



