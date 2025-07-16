<template>
  <Header/>
  
  <div class="con1">
    <div class="text">
    <h2 class="heading1">Welcome to Educonnect-Free</h2>
    <h2 class="heading2">Learning for Everyone</h2>
    <p class="msg">
    Educonnect offers a wide range of programming resources at no cost. Get access to course notes, YouTube video recommendations, and connect with teachers to enhance your learning. Whether you're a beginner or looking to advance, Educonnect makes education accessible and free for all.
    Start learning today!
   </p>
   <button @click="hanldeClick" class="btn1">Start today</button>
   </div>
    
   <div class="img">
   <img src="./assets/pic1.png" alt="Learning Image" />

    </div>
   
    <div class="con2">
      
        <div class="con3">
      </div>
      <div class="con4">
      </div>
      <div class="con5">
      </div>
      <div class="con6">
      </div>
      <div class="con7">
      </div>
      <div class="info">
         <h2><strong>Seamless Experience with Round-the-Clock Support</strong></h2>
         <p>
          <strong>EduConnect</strong> is designed to be <strong>interactive</strong> and 
          <strong>user-friendly</strong>. Whether you're learning or connecting with teachers, 
          our platform is simple to navigate. Need help? Our <strong>24/7 support</strong> is always here for you.
         </p>
      </div>

    </div>

    <div class="con8">
        <div class="con9">
        </div>  
        <div class="con10">
        </div>    
    </div>
    
    <div class="section">
      <h2>Built with an Intuitive Drag & Drop Interface</h2>

      <p>EduConnect is designed to provide a seamless and interactive learning experience.</p>

      <p>Our platform offers:</p>

       <ul class="info2">
          <li><strong>Tailored video recommendations</strong> based on your specific learning needs</li>
          <li><strong>Direct communication with teachers</strong> for personalized support</li>
          <li><strong>Access to specific course notes</strong> for focused study</li>
          <li><strong>Interactive quizzes</strong> to assess your knowledge</li>
       </ul>

       <p>With EduConnect, you have everything you need for a personalized and efficient learning journey!</p>
    </div>

    <div class="con11">
    </div> 
    <div class="con12">
    </div>
    <div class="con13">
    </div>
    <div class="con14">
    </div>
  </div>
  
<div class="con15">
  <div class="contact-text">
    <h1>Contact Us</h1>
    <p>If you have any query, feel free to ask!</p>
  </div>

  <form class="contact-form">
    <div class="form-group name-group">
      <div>
        <label>First Name <span>(required)</span></label>
        <input type="text" placeholder="First Name" required />
      </div>
      <div>
        <label>Last Name <span>(required)</span></label>
        <input type="text" placeholder="Last Name" required />
      </div>
    </div>

    <div class="form-group">
      <label>Email <span>(required)</span></label>
      <input type="email" placeholder="Your Email" required />
    </div>

    <div class="form-group">
      <label>Message <span>(required)</span></label>
      <textarea placeholder="Your Message" required></textarea>
    </div>

    <button type="submit">SEND</button>
  </form>
</div>
<Footer/>

</template>

<script setup>
   import Header from './components/header.vue'
   import Footer from './components/footer.vue'
   import { useRouter } from 'vue-router'
   const router=useRouter();

   function hanldeClick(){
     router.push("/courses")
   }
</script>


<style scoped>
.con1{
    position:absolute;
    background-color: white;
    width: 100%;
    height:600px;
    background-color: #221358;
    margin-top:-370px;
    left:0;
}
.text{
    position:absolute;
    margin-left: 30px;
    margin-top:30px;
    background-color:#221358;
    width: 50%;
    height:500px;
    
}
.heading1{
  color: #ddd620;
  font-size: 35px;
  margin-left: -250px;
}
.heading2{
  color: #ddd620;
  margin-left: -370px;
  font-size: 35px;
}
.msg{
    text-align: left;
    font-size: 22.5px;
}
.img {
  margin-top: 40px;
  text-align: center;
}

.img img {
  width: 600px;
  margin-left:750px;
  border-radius: 12px;
}
.btn1{
  background-color: #ddd620;
  color:black;
  width: 30%;
  height:60px;
  margin-left: -530px;
}
.con2{
    position: relative;
    background-color: white;
    margin-top: 155px;
    width: 100%;
    height: 600px;
    background-image: url('./assets/pic7.jpg'); 
    color:black;
}
.con3 {
  position: absolute;
  width: 125px; 
  height: 125px;
  margin-top: 50px;
  margin-left: 150px;
  background-image: url('./assets/pic2.png');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
}
.con4 {
  position: absolute;
  width: 125px; 
  height: 125px; 
  margin-top: 450px;
  margin-left: 1200px;
  background-image: url('./assets/pic3.png');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
}
.con5 {
  position: absolute;
  width: 100px; 
  height: 100px; 
  margin-top: 450px;
  margin-left: 800px;
  background-image: url('./assets/pic4.png');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
}
.con6 {
  position: absolute;
  width: 100px; 
  height: 100px; 
  margin-top: 450px;
  margin-left: 650px;
  background-image: url('./assets/pic5.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
}
 .con7{
  position: absolute;
  width: 100px; 
  height: 100px;
  margin-top: 450px;
  margin-left: 500px;
  background-image: url('./assets/pic6.png');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px; 
}
.info{
    position:absolute;
    width:60%;
    margin-top: 200px;
    margin-left: 300px;
    font-size: 20px;
    text-align: left;
}
.con8{
    position:absolute;
    width: 100%;
    background-color: black;
    margin-top:0;
    margin-left: 0;
    height:900px;
}
 .con9{
  position: absolute;
  width: 60%; 
  height: 900px;
  margin-top: 0;
  margin-left: 0;
  background-image: url('./assets/pic8.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
 }
  .con10{
  position: absolute;
  width: 40%; 
  height: 900px;
  margin-top: 0;
  margin-left: 885px;
  background-image: url('./assets/pic9.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
 }
 .section{
    position:absolute;
    color:white;
    width: 50%;
    height:900px;
    text-align: left;
    font-size: 25px;
    margin-left: 60px;
 }
 .info2{
    margin-top: 40px;
    text-align: left;
    margin-left: 40px;
    list-style-type: none;
 }
 .info2 li{
     margin-bottom: 35px; 
 }
 .con11{
  position: absolute;
  width: 40px; 
  height: 40px;
  margin-top: 360px;
  margin-left: 70px;
  background-image: url('./assets/pic10.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px; 
 }
  .con12{
  position: absolute;
  width: 40px; 
  height: 40px;
  margin-top: 470px;
  margin-left: 70px;
  background-image: url('./assets/pic10.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px; 
 }
   .con13{
  position: absolute;
  width: 40px; 
  height: 40px;
  margin-top: 580px;
  margin-left: 70px;
  background-image: url('./assets/pic10.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px; 
 }
    .con14{
  position: absolute;
  width: 40px; 
  height: 40px;
  margin-top: 650px;
  margin-left: 70px;
  background-image: url('./assets/pic10.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px; 
 }
 .con15 {
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  margin-top: 1710px;
  left:0;
  height: 600px;
  display: flex;
  justify-content: space-between;
  padding: 60px 80px;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
  gap: 60px;
}

/* Text Section */
.contact-text {
  flex: 1;
  padding-top: 40px;
}

.contact-text h1 {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
}

.contact-text p {
  font-size: 20px;
  color: #333;
}

/* Form Section */
.contact-form {
  flex: 1;
  background-color: #eeeeF3;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 20px;
}

.name-group {
  display: flex;
  gap: 20px;
}

.contact-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #222;
}

.contact-form label span {
  font-weight: normal;
  font-size: 13px;
  color: #777;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  color: #000;
  font-size: 15px;
  outline: none;
}

.contact-form textarea {
  resize: vertical;
  height: 100px;
}

.contact-form button {
  margin-top: 20px;
  padding: 12px 28px;
  background-color: black;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
}

.contact-form button:hover {
  background-color: #222;
}


</style>
