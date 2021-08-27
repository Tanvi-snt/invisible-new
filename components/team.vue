<template>
  <section class="team-section">
    <div class="container">
      <div class="team-inner-section">
        <h1>A truly distributed team with incredible skills</h1>
        <p>
          The Invisible team is spread across 21 countries in 4 continents. We
          are 100% remote, and come from all kinds of industries.
        </p>
        <button>Talk to us</button>
      </div>
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-1.png"
          alt=""
          class="team-1"
          id="tooltip-target-1"
        />
        <b-tooltip target="tooltip-target-1" triggers="hover" placement="right" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-2.png"
          alt=""
          class="team-2"
          id="tooltip-target-2"
        />
        <b-tooltip target="tooltip-target-2" triggers="hover" placement="bottom" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>        
         </b-tooltip>
      </div>
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-3.png"
          alt=""
          class="team-3"
          id="tooltip-target-3"
        />
        <b-tooltip target="tooltip-target-3" triggers="hover" placement="right" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>
     
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-4.png"
          alt=""
          class="team-4"
          id="tooltip-target-4"
        />
        <b-tooltip target="tooltip-target-4" triggers="hover" placement="bottom" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-5.png"
          alt=""
          class="team-5"
          id="tooltip-target-5"
        />
        <b-tooltip target="tooltip-target-5" triggers="hover" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-6.png"
          alt=""
          class="team-6"
          id="tooltip-target-6"
        />
        <b-tooltip target="tooltip-target-6" triggers="hover" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>

      <div class="tooltip-section">
        <img
          src="~/assets/img/team-7.png"
          alt=""
          class="team-7"
          id="tooltip-target-7"
        />
        <b-tooltip target="tooltip-target-7" triggers="hover" placement="right" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-8.png"
          alt=""
          class="team-8"
          id="tooltip-target-8"
        />
        <b-tooltip target="tooltip-target-8" triggers="hover" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>
      <div class="tooltip-section">
        <img
          src="~/assets/img/team-9.png"
          alt=""
          class="team-9"
          id="tooltip-target-9"
        />
        <b-tooltip target="tooltip-target-9" triggers="hover" placement="left" variant="dark">
            <p>Name:</p>
            <p>Position:</p>
            <p>Country:</p>
        </b-tooltip>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
};
</script>

<style scoped>
.team-section {
  background-color: #19182c;
  padding-top: 180px;
  padding-bottom: 182px;
  position: relative;
}

.team-inner-section h1 {
  color: #ffffff;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  max-width: 660px;
  margin: auto;
  font-weight: 600;
  text-align: center;
}



.team-inner-section p {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 38px;
}

.team-inner-section button {
  background-color: #ee3465;
  border-radius: 8px;
  width: 190px;
  height: 60px;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
  font-weight: 600;
  margin: auto;
  display: block;
  border: none;
}

.tooltip-section img {
      transition: 0.3s;
}

.tooltip-section img:hover {
      transform: scale(1.1);
}

img.team-1 {
  position: absolute;
  top: 37px;
  left: 47%;
}

img.team-2 {
  position: absolute;
  bottom: 189px;
  left: 5%;
}

img.team-3 {
  position: absolute;
  top: 253px;
  left: 16%;
}

img.team-4 {
  position: absolute;
  top: 90px;
  right: 20%;
}

img.team-5 {
  position: absolute;
  bottom: 59px;
  left: 23%;
}

img.team-6 {
  position: absolute;
  top: 73px;
  left: 20%;
}

img.team-7 {
  position: absolute;
  bottom: 69px;
  left: 45%;
}

img.team-8 {
  position: absolute;
  bottom: 96px;
  right: 20%;
}

img.team-9 {
  position: absolute;
  top: 276px;
  right: 8%;
}

@media (min-width: 320px) and (max-width: 375px) {
  .team-section img {
    width: 40px !important;
  }
}

@media (max-width: 767px) {
  .team-inner-section p {
    font-size: 16px;
    line-height: 24px;
    max-width: 320px;
    padding-top: 16px;
    padding-bottom: 24px;
  }
  .team-inner-section h1 {
    font-size: 28px;
    line-height: 38px;
    max-width: 265px;
  }

  .team-inner-section button {
    width: 146px;
    height: 48px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
  }

  img.team-1 {
    top: 68px;
    left: 42%;
    width: 58px;
  }

  img.team-6 {
    top: 106px;
    left: 12%;
  }

  img.team-4 {
    top: 100px;
    right: 11%;
    width: 50px;
  }

  img.team-3 {
    top: 228px;
    left: 5%;
    width: 50px;
  }
  img.team-2 {
    left: 5%;
  }

  img.team-5 {
    bottom: 90px;
    left: 18%;
    width: 50px;
  }

  img.team-8 {
    bottom: 115px;
    right: 13%;
    width: 50px;
  }

  img.team-9 {
    right: 5%;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .team-inner-section h1 {
    font-size: 32px;
    line-height: 42px;
    max-width: 350px;
  }

  .team-inner-section p {
    font-size: 16px;
    max-width: 460px;
    padding-bottom: 24px;
  }

  img.team-3 {
    left: 8%;
  }
}

@media (min-width: 993px) and (max-width: 1024px) {
  .team-inner-section h1 {
    font-size: 42px;
    line-height: 52px;
    max-width: 470px;
  }

  .team-inner-section p {
    max-width: 525px;
    padding-bottom: 28px;
  }

  .team-inner-section button {
    width: 175px;
    height: 52px;
  }
}

@media (min-width: 1025px) and (max-width: 1199px) {
  .team-inner-section h1 {
    font-size: 50px;
    line-height: 60px;
    max-width: 600px;
  
}
}
</style>


