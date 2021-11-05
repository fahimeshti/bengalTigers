document.write(`

<!-- Sample Modal -->
<div class="modal" data-modal-name="sample-modal" data-modal-dismiss>
   <div class="modal__dialog">
       <button class="modal__close" data-modal-dismiss>&times;</button>
       <!-- header  -->
       <div class="modal__content">
           <!-- Sign Up Form -->
 <div class="form_body">
   <div class="row">
     <div class="col-12">
         <div class="container_form right-panel-active" id="container">
               <div class="form-container sign-up-container">
                 <form>
                   <h2>Sign Up</h2>
                   <div class="social-container">
                     <a href="#" class="social"><i class="fab fa-instagram"></i></a>
                     <a href="#" class="social"><i class="fab fa-google"></i></a>
                     <a href="#" class="social"><i class="fab fa-tiktok"></i></a>
                   </div> 
                   <span id="WARning">Please Enter your info</span>
                   <input id="fname" type="text" placeholder="First Name" />
                   <input id="lname" type="text" placeholder="Last Name" />
                   <input id="ranId" type="text" placeholder="ID" readonly/>
                   <button id="Signmeup">Sign Up</button>
                 </form>
               </div>
               <div class="form-container sign-in-container">
                 <form>
                   <h2>Sign In</h2>
                   <div class="social-container">
                     <a href="#" class="social"><i class="fab fa-instagram"></i></a>
                     <a href="#" class="social"><i class="fab fa-google"></i></a>
                     <a href="#" class="social"><i class="fab fa-tiktok"></i></a>
                   </div>
                   <span>or use your account</span>
                   <input type="email" placeholder="Email" />
                   <input type="password" placeholder="ID" />
                   <a href="#">Forgot your password?</a>
                   <button onclick="return false;">Sign In</button>
                 </form>
               </div>
               <div class="overlay-container">
                 <div class="overlay">
                   <div class="overlay-panel overlay-left">
                     <h1 id="enterThis"> Hello, Tiger!</h1>
                     <p id="waitingtxt">Please login with your user info if you are already a member</p>
                     <button class="ghost" id="signIn">Sign In</button>
                   </div>
                   <div class="overlay-panel overlay-right">
                     <h1>Welcome Back!</h1>
                     <p>Enter your login details and start your journey with Bengal Tigers</p>
                     <button class="ghost" id="signUp">Sign Up</button>
                   </div>
                 </div>
               </div>
             </div>
                 
         </div>
     </div>
 </div>
  <!-- //// Sign Up Form //// -->
       </div>
       <!-- footer  -->
   </div>
 </div>

`);
