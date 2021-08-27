<template>
  <section class="tab-section">
    <div class="container">
      <div class="tab-inner-section">
        <div class="tab-wrapper">
          <div class="tab-wrap">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('home')"
                  :class="{ active: isActive('home') }"
                  href="#home"
                  >Research</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('profile')"
                  :class="{ active: isActive('profile') }"
                  href="#profile"
                  >Visuals</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('contact')"
                  :class="{ active: isActive('contact') }"
                  href="#contact"
                  >Product</a
                >
              </li>
            </ul>
            <h2>What we do</h2>
          </div>

          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade"
              :class="{ 'active show': isActive('home') }"
              id="home"
            >
              <div class="tab-inner-content">
                <div class="tab-slot">
                  <img src="~/assets/img/flag.png" alt="" />
                  <h1>SWOT analysis</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/home.png" alt="" />
                  <h1>Define personas</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/jounrney.png" alt="" />
                  <h1>User journeys</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/interviews.png" alt="" />
                  <h1>User interviews</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/wireframes.png" alt="" />
                  <h1>Wireframes</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/envolpe.png" alt="" />
                  <h1>Interactive prototypes</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              :class="{ 'active show': isActive('profile') }"
              id="profile"
            >
              <div class="tab-inner-content">
                 <div class="tab-slot">
                  <img src="~/assets/img/home.png" alt="" />
                  <h1>Define personas</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>

                <div class="tab-slot">
                  <img src="~/assets/img/flag.png" alt="" />
                  <h1>SWOT analysis</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
               
                <div class="tab-slot">
                  <img src="~/assets/img/jounrney.png" alt="" />
                  <h1>User journeys</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/interviews.png" alt="" />
                  <h1>User interviews</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/wireframes.png" alt="" />
                  <h1>Wireframes</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/envolpe.png" alt="" />
                  <h1>Interactive prototypes</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              :class="{ 'active show': isActive('contact') }"
              id="contact"
            >
              <div class="tab-inner-content">
                 <div class="tab-slot">
                  <img src="~/assets/img/jounrney.png" alt="" />
                  <h1>User journeys</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/flag.png" alt="" />
                  <h1>SWOT analysis</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/home.png" alt="" />
                  <h1>Define personas</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
               
                <div class="tab-slot">
                  <img src="~/assets/img/interviews.png" alt="" />
                  <h1>User interviews</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/wireframes.png" alt="" />
                  <h1>Wireframes</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
                <div class="tab-slot">
                  <img src="~/assets/img/envolpe.png" alt="" />
                  <h1>Interactive prototypes</h1>
                  <p>
                    Create screens directly in Method or add your images from
                    Sketch or Figma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tab",
  data: function () {
    return {
      activeItem: "home",
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>
 
<style scoped>
.tab-content p {
  color: #ffffff;
}

.tab-wrapper .nav-tabs,
.tab-wrapper .nav-tabs .nav-link {
  border: 0;
}
.tab-wrapper .nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  border-bottom: solid 2px #ad80ff;
  background-color: transparent;
  color: #ffffff;
}

.tab-wrapper .nav {
  column-gap: 30px;
  padding-bottom: 62px;
}

.tab-wrapper ul li {
  width: 160px;
}

.tab-wrapper ul li a {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
  font-weight: 600;
  padding: 0 0 17px 0;
  font-family: 'Inter', sans-serif;

}

.tab-section {
  background-color: #21203a;
  padding-top: 84px;
  padding-bottom: 100px;
}

.tab-wrapper .tab-wrap {
  display: flex;
  justify-content: space-between;
}

.tab-wrap h2 {
  color: #ffffff;
  font-size: 36px;
  letter-spacing: -0.9px;
  line-height: 43px;
  font-weight: 600;
  margin-bottom: 0;
  font-family: 'Inter', sans-serif;

}

.tab-panel ul li {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
  font-weight: 600;
  padding-bottom: 17px;
}

.tab-content .tab-slot h1 {
  color: #ffffff;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
  padding-top: 16px;
  padding-bottom: 6px;
  margin-bottom: 0;
  font-family: 'Inter', sans-serif;

}

.tab-content .tab-slot p {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 350px;
  margin-bottom: 0;
  font-family: 'Inter', sans-serif;

}

.tab-content .tab-inner-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  column-gap: 30px;
}

.tab-content .tab-slot img {
  background-color: #2a284b;
  border-radius: 100%;
  padding: 12px;
}

@media (width:320px) {

img.team-9 {
    top: 362px !important;
}
img.team-3  {
    top: 44px !important;
    left: 18% !important;
}
}

@media (min-width: 320px) and (max-width: 375px) {
  .tab-wrapper ul li {
    width: 88px !important;
  }

  .tab-wrapper .nav {
    column-gap: 10px !important;
    padding-bottom: 20px !important;
}

  .tab-wrap h2 {
    font-size: 26px !important;
    line-height: 33px !important;
  }
  .tab-wrapper nav  {
    column-gap: 12px !important;
  }

  .tab-content .tab-slot img {
    padding: 8px !important;
  }

  .tab-content .tab-slot h1 {
    font-size: 18px !important;
  }

  .tab-wrapper ul li a {
    padding: 0 0 12px 0;
}
}

@media (max-width: 767px) {
.tab-wrapper .tab-wrap {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.tab-wrapper .nav {
    column-gap: 22px;
    padding-bottom: 24px;
}

  .tab-wrapper ul li {
    line-height: 20px;
    padding-bottom: 10px;
    width: 112px;
  }
  .tab-wrap h2 {
    font-size: 28px;
    line-height: 36px;
    align-self: center;
    padding-bottom: 20px;
  }

  .tab-content .tab-slot img {
    padding: 10px;
    display: block;
    margin: auto;
  }

  .tab-content .tab-slot h1 {
    font-size: 20px;
    padding-top: 10px;
    text-align: center;
  }

  .tab-content .tab-slot p {
    font-size: 16px;
    line-height: 24px;
    max-width: 285px;
    text-align: center;
  }

 .tab-content .tab-inner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }

  .tab-panel ul {
    column-gap: 20px;
    align-self: center;
  }

  .tab-section {
    padding-top: 42px;
    padding-bottom: 58px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .tab-wrapper ul li {
    padding-bottom: 14px;
    width: 130px;
  }

  .tab-wrapper ul {
    column-gap: 20px;
  }

  .tab-wrap h2 {
      font-size: 28px;
    line-height: 26px;
  }


.tab-content .tab-slot p {
    font-size: 16px;
    line-height: 26px;

}


.tab-wrapper .nav {
    column-gap: 22px;
    padding-bottom: 32px;
}


  .tab-content .tab-slot img {
    padding: 10px;
  }

  .tab-content .tab-slot h1 {
    font-size: 20px;
    padding-top: 14px;
  }

  .tab-inner-section .tab-content {
    row-gap: 42px;
  }

  .card-text h1 {
    font-size: 32px;
    letter-spacing: -1.4px;
    line-height: 42px;
    max-width: 342px;
  }

  .card-text p {
    max-width: 286px;
    padding-top: 20px;
    margin-bottom: 24px;
  }

  .startup-wrapper {
    gap: 20px;
    margin-bottom: 22px;
  }
}

@media (min-width: 993px) and (max-width: 1024px) {
  .tab-section {
    padding-top: 50px;
    padding-bottom: 80px;
  }

  .tab-wrapper ul li {
    padding-bottom: 12px;
    width: 135px;
  }

  .tab-wrap h2 {
    font-size: 28px;
    line-height: 32px;
  }

.tab-wrapper .nav {
    column-gap: 24px;
    padding-bottom: 42px;
}


  .tab-content .tab-slot img {
    padding: 10px;
  }

  .tab-content .tab-slot h1 {
    font-size: 20px;
  }
}
</style>


