<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <h1>Send us a message and we’ll get the ball rolling!</h1>
        <div class="contact-inner-section">
          <div class="contact-content">
            <h2>Glad you’re here</h2>

            <h4>Project specs</h4>
            <p>A few criterias of the projects we typically accept</p>

            <ul class="contact-list">
              <li>Budgets over $10k (~5 ETH)</li>
              <li>No illegal, contraband products</li>
              <li>Access to founders/product team</li>
              <li>Should allow us to add their case <span>study to our portfolio</span> </li>
            </ul>
            <div class="contact-img">
                <img src="~/assets/img/contact-img1.png" alt="" >
                <img src="~/assets/img/contact-img3.png" alt="">
                <img src="~/assets/img/contact-img2.png" alt="">

            </div>
          </div>
          <div class="contact-form">
            <h2>Let us contact you</h2>
            <form action="" class="invisible_form" @submit.prevent="validate" id="contactForm">
              <div class="form-group">
                <!-- <img src="~/assets/img/input.png" alt=""> -->
                <input type="text" placeholder="Name" id="name"  class="form-control" v-bind:class="{ 'is-invalid': nameError }" v-model="name"  />
                <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
									{{ errors[0].message }}
								</div>
              </div>
              <div class="form-group">
                <!-- <img src="~/assets/img/envolpe.png" alt=""> -->
                <input type="text" placeholder="Email" id="email" class="form-control" v-bind:class="{ 'is-invalid': emailError }" v-model="email"  />
                <div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
									{{ errors[1].message }}
								</div>
              </div>
              <div class="form-group">
                <input type="text" class="captcha form-control" placeholder="Captcha" id="captcha" v-bind:class="{'is-invalid': captchaError}" v-model="captcha"/>
                    <div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
									{{ errors[2].message }}
								</div>
              </div>
              
              <button type="submit">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  	data() {
			return {
				name: '',
				email: '',
        captcha: '',
				nameError: false,
				emailError: false,
        captchaError: false,
				errors: []
			}
    },
    	methods: {
			validate() {
				this.errors = [];
        var isValidate = true;
				var len = this.name.length;

         if (len == ' ') {
          this.nameError = true;
					this.errors.push({
						'message': 'Enter a name'
					});
          isValidate = false;
        }
				else if (len < 3 || len > 30) {
					this.nameError = true;
					this.errors.push({
						'message': 'Name is too long'
					});
          isValidate = false;

				}

        else {
					document.getElementById('name').className = "form-control is-valid";
					this.errors.push({
						'message': ''
					});
					document.getElementById('feedback-1').className = "valid-feedback";
				}
				// email validate
				if(this.email.length < 10 || this.email.search('@') == -1) {
					this.emailError = true;
					this.errors.push({
						'message': 'Please provide a valid email address.'
					});
          isValidate = false;

				} else {
					document.getElementById('email').className = "form-control is-valid";
					this.errors.push({
						'message': ''
					});
					document.getElementById('feedback-2').className = "valid-feedback";
				}
        //captcha validate
        var length = this.captcha.length;
        if (length == ' ') {
          this.captchaError = true;
					this.errors.push({
						'message': 'This field is required'
					});
           isValidate = false;

        }
		
        else {
					document.getElementById('captcha').className = "form-control is-valid";
					this.errors.push({
						'message': ''
					});
					document.getElementById('feedback-3').className = "valid-feedback";
				}

        
          if(isValidate) {
             this.$data.name = "";
              this.$data.email = "";
              this.$data.captcha = '';
            console.log('form sucessfully submitted');
          }
          
			}

      
		}
  
};
</script>

<style scoped>
.contact-section {
  background-color: #21203a;
}

.invalid-feedback {
  font-size: 16px;
  margin-top: 0;
  padding-bottom: 8px;
}

.contact-wrapper h1 {
  color: #ffffff;
  font-weight: 600;
  font-size: 56px;
  letter-spacing: -2.4px;
  line-height: 62px;
  max-width: 752px;
  text-align: center;
  margin: auto;
  padding-top: 51px;
  padding-bottom: 90px;
}

.contact-inner-section {
  display: flex;
  justify-content: space-around;
  padding-bottom: 100px;
}

.contact-content {
  border: solid 1px #2a284b;
  padding: 30px 30px 35px 30px;
  max-width: 350px;
}

.contact-content h2,
.contact-form h2 {
  color: #ffffff;
  font-size: 36px;
  letter-spacing: -1.5px;
  line-height: 44px;
  font-weight: 600;
  padding-bottom: 25px;
  margin-bottom: 0;
}

.contact-content h2 {
  border-bottom: solid 1px #2a284b;
}

.contact-content h4 {
  padding-top: 28px;
  color: #ffffff;
  font-size: 22px;
  letter-spacing: -0.55px;
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 0;
}

.contact-content p {
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 26px;
  opacity: 0.5;
  max-width: 290px;
  padding-bottom: 31px;
  padding-top: 6px;
    margin-bottom: 0;

}

.contact-content ul {
  list-style: none;
  padding-bottom: 145px;
  margin-bottom: 0;
}

.contact-content ul li {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 22px;
  font-weight: 600;
  padding-bottom: 18px;
}

.contact-content ul span {
    padding-left: 30px;
}

.contact-content ul li::before {
    content: '\2713';
    color: #ffffff;
    width: 14px;
    padding-right: 16px;
}


.contact-img {
    display: flex;
    justify-content: space-between;
}

.contact-form .form-group {
  position: relative;
}

.contact-form .form-group img {
      position: absolute;
    top: 19px;
    left: 22px;
    width: 19px;
}


.contact-form input {
    background-color: #19182C;
    border-radius: 8px;
    width: 445px;
    height: 60px;
    border: none;
    margin-bottom: 15px;
}

.contact-form input.captcha {
    height: 135px;
}

.contact-form {
    padding-top:29px;
}

.contact-form input::placeholder {
  color: #FFFFFF;
  font-size: 20px;
  letter-spacing: -0.4px;
  line-height: 28px;
  opacity: 0.5;
  padding-left: 52px;
}

.contact-form button {
background-color: #AD80FF;
  border-radius: 4px;
  width: 445px;
  height: 60px;
  color: #FFFFFF;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
  text-align: center;
  font-weight: 600;
  border: none;
}



.form-group {
    margin-bottom: 0rem;
}


@media(min-width:320px) and (max-width:375px) {
  .contact-wrapper h1 {
    font-size: 28px !important;
    line-height: 42px !important;
    padding-top: 32px !important;
    padding-bottom: 32px !important;
}

.contact-content h2, .contact-form h2 {
    font-size: 26px !important;
    line-height: 32px !important;
   
}

.contact-content {
    padding: 20px 16px 25px 16px !important;
}

.contact-content ul {
    padding-bottom: 65px !important;
}

.contact-content ul li {
    font-size: 14px !important;
    padding-bottom: 12px !important;
}

 .contact-form input {
    max-width: 280px !important;

}

.contact-form button {
  max-width: 280px !important;
   font-size: 16px  !important;
}

footer {
    padding-bottom: 24px !important;
}

.copyright-section p{
font-size: 12px !important;
}

}


@media (max-width: 767px) {
  .contact-inner-section {
    align-items: center;
    flex-direction: column;
    padding-bottom: 72px;
     
  }

  .contact-form input{
    max-width: 330px;
    height: 52px;
  }

  .contact-form button  {
     max-width: 330px;
     height: 52px;
     font-size: 18px;
     line-height: 24px;
 }

 .contact-form input.captcha {
    height: 108px;
}


.contact-wrapper h1 {
    font-size: 30px;
    line-height: 45px;
    max-width: 355px;
    padding-top: 35px;
    padding-bottom: 50px;
}

.contact-content {
    padding: 20px 28px 25px 26px;
    max-width: 330px;
}

.contact-content h2, .contact-form h2 {
    font-size: 28px;
    line-height: 36px;
    padding-bottom: 16px;
    text-align: center;
}
  .contact-content ul{
    padding-bottom: 72px;
  }

  .contact-content ul li{
    font-size: 15px;
    padding-bottom: 16px;
  }

  .contact-form input::placeholder {
  font-size: 16px;
  line-height: 24px;
  padding-left: 48px;
  }

.contact-form .form-group img  {
    top: 14px;
    left: 18px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {

  .contact-wrapper h1 {
    font-size: 42px;
    line-height: 50px;
    max-width: 570px;
    padding-top: 36px;
    padding-bottom: 65px;
}



.contact-content h2, .contact-form h2 {
    font-size: 28px;
    line-height: 36px;
    padding-bottom: 20px;
}

.contact-content h4 {
    padding-top: 18px;
    font-size: 22px;
    line-height: 30px;

}

.contact-content p {
    font-size: 16px;
    line-height: 26px;
    max-width: 283px;
    padding-bottom: 26px;
}

.contact-content ul li {
    font-size: 15px;
    line-height: 20px;
    padding-bottom: 14px;
}

.contact-content ul li::before {
    padding-right: 12px;
}

.contact-content ul {
    padding-bottom: 65px;
}

.contact-content{
    padding: 30px 25px 30px 25px;
    max-width: 325px;
}

.contact-form input.captcha {
    height: 110px;
}

.contact-form input {
    width: 100%;
    height: 54px;
}

.contact-form button{
    width: 100%;
    height: 54px;
    font-size: 18px;
    line-height: 24px;
}

.contact-form .form-group img {
    top: 15px;
    left: 16px;
}


.contact-content ul {
    padding-bottom: 65px;
}

.contact-form input::placeholder {
  font-size: 18px;
  line-height: 26px;
  padding-left: 46px;
}


}


@media (min-width: 993px) and (max-width: 1024px) {
  .contact-wrapper h1 {
    font-size: 48px;
    line-height: 56px;
    max-width: 670px;
    padding-top: 38px;
    padding-bottom: 72px;
}

.contact-inner-section {
    padding-bottom: 70px;
}


.contact-content h2, .contact-form h2 {
    font-size: 32px;
    line-height: 40px;
}

.contact-content h4 {
    padding-top: 22px;
    font-size: 20px;
    line-height: 26px;
}

.contact-content ul {
    padding-bottom: 100px;
}

.contact-content ul li {
    padding-bottom: 15px;
}

}

@media (min-width: 1025px) and (max-width: 1199px) {

.contact-wrapper h1 {
    font-size: 50px;
    line-height: 56px;
    max-width: 682px;
    padding-top: 42px;
    padding-bottom: 65px;
  }

  .contact-content h2, .contact-form h2 {
    font-size: 34px;
    line-height: 38px;
    padding-bottom: 25px;
  }
}
</style>
