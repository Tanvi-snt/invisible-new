<template>
    <section class="client-section"> 
     <div class="container">
        <div>
        <h1>You’re in good company</h1>
        <div class="client-img">
         <img src="~/assets/img/p&g.png" alt="" class="oyo">
         <img src="~/assets/img/H&R.png" alt="" class=" client-brand">
         <img src="~/assets/img/Bajaj.png" alt="" class="bajaj">
         <img src="~/assets/img/housing_white.png" alt="" class="housing client-brand">
         <img src="~/assets/img/oyo_white.png" alt="" class="oyo">
         <img src="~/assets/img/docux.png" alt="">
         <img src="~/assets/img/total.png" alt=""  class=" client-brand">
         <img src="~/assets/img/mobi.png" alt=" "  class=" client-brand">
        </div>
      </div>
     </div>
    </section>
</template>

<script>
export default {
  name: "Client",
};
</script>

<style scoped>
.client-section {
    background-color: #21203A;
    padding:90px 0;

}

.client-section h1 {
    color: #FFFFFF;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  padding-bottom: 49px;
  margin-bottom: 0;
}

.client-img {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 110px;
    row-gap: 54px;
    max-width:210px;
    margin: auto;
    place-items:center;
    place-content: center;

}

@media (min-width: 320px) and (max-width: 375px) {

  img.bajaj {
    width: 150px;
  }

  img.oyo {
    width: 75px;
  }

}

@media (max-width: 767px) {
  .client-section {
    padding: 50px 0;
  }

  .client-section h1 {
    padding-bottom: 28px;
  }
 

  .client-img {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 45px;
    grid-row-gap: 54px;
    row-gap: 40px;
    max-width: 170px;
}

.client-img img.client-brand {
  width: 150px;
}
}

@media (min-width: 768px) and (max-width: 992px) {
  .client-section {
    padding: 65px 0;
  }

  .client-img img.housing {
    width: 180px;
  }


.client-img  {
    column-gap: 45px;
    row-gap: 45px;
  
}

.client-section h1  {
    padding-bottom: 32px;
}

}


@media (min-width: 993px) and (max-width: 1024px) {

  .client-section  {
    padding: 60px 0;
  }

  .client-section h1 {
    padding-bottom: 36px;
 }

 .client-img {
    column-gap: 85px;
    row-gap: 40px;

}
}

</style>


