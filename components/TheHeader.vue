<template>
  <section class="header-section">
    <div class="container">
      <div class="header-inner-section">
        <div class="header-logo">
          <div class="navbar-img">
            <logo />
          </div>
        </div>
        <div class="navbar-section">
          <ul class="nav">
            <li><a class="nav-item" href="/project">Work</a></li>
            <li><a class="nav-item" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "@/components/logo";
export default {
  name: "TheHeader",
  components: {
    logo: Logo,
  },
};
</script>

<style scoped>
.header-section {
  background-color: #21203a;
  padding-top: 47px;
  padding-bottom: 47px;
  position: relative;
}
.navbar-section {
  background-color: #2a284b;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 47px 92px;
  width: 30%;
}

.header-logo {
  width: 70%;
}

ul {
  list-style: none;
  display: flex;
}

ul li .nav-item {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: none;
  padding-left: 47px;
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 375px) {
  ul li .nav-item {
    padding-left: 20px !important;
  }

  .header-section {
    padding-top: 32px;
    padding-bottom: 28px;
  }

  .header-inner-section {
    margin: 0 12px !important;
}
}

@media (max-width: 767px) {
  .header-section {
    padding-top: 34px;
    padding-bottom: 39px;
  }

  .header-inner-section {
        display: flex;
    justify-content: space-between;
        margin: 0 20px;
  }

  .navbar-section {
    background-color:#21203a;
    position: static;
  
    padding: 0;
    width:max-content;
}

.header-logo {
    width: max-content;
}


ul li .nav-item {
    padding-left: 32px;
}


}
@media (min-width: 768px) and (max-width: 992px) {
ul li .nav-item {
    padding-left: 32px;
}

.navbar-section{
    padding: 33px 7px;
    width: 29%;
}
.header-logo {
    width: 69%;
}
.header-section {
    padding-top: 32px;
    padding-bottom: 38px;
}
}

@media (min-width: 993px) and (max-width: 1024px) {
  .header-section {
    padding-top: 35px;
    padding-bottom: 42px;
  }

  .navbar-section {
    padding: 40px 24px;
  }

  ul li .nav-item {
    padding-left: 42px;
}
}

@media (min-width: 1025px) and (max-width: 1199px) {
  .navbar-section {
    padding: 47px 56px;
}
}
</style>
