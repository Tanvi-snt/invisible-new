<template>
  <section class="header-section">
    <div class="navbar-section">
      <div class="container">
        <nav>
          <div class="navbar-img">
            <logo />
          </div>
          <div>
            <ul class="nav">
              <li><a class="nav-item" href="/project">Work</a></li>
              <li><a class="nav-item" href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "@/components/logo";
export default {
  name: "TheHomeHeader",
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
}

nav {
  display: flex;
  justify-content: space-between;
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
}

@media (min-width: 320px) and (max-width: 375px) {
  ul li .nav-item {
    padding-left: 24px;
  }

  .header-section {
    padding-top: 32px;
    padding-bottom: 28px;
  }
}

@media (max-width: 767px) {
  nav {
    margin: 0 10px;
  }
  .header-section {
    padding-top: 34px;
    padding-bottom: 39px;
  }
}

@media (min-width: 993px) and (max-width: 1024px) {
  .header-section {
    padding-top: 35px;
    padding-bottom: 42px;
  }
}
</style>
