const Register=()=>
{
    return(
        <>

<link rel="stylesheet" href="App.css"/>
     
   
   <div className="container">
    <div className="row">
        <div className="col">

        </div>
        <div class="col" style={{margin-top:"auto"; margin-bottom:"auto"}}>
          <p class="h1">Registration Form</p>
          <label class="form-label">Username:</label>
          <input required class="form-control" id = "name"type="text" name="Username"placeholder="enter your Username" aria-label="name"/>

          <label class="form-label">Password</label>
          <input required class="form-control" id = "name"type="password" name="password"placeholder="enter your password" aria-label="name"/>
            
          <label class="form-label">Email</label>
          <input required class="form-control" id = "name"type="text" name="email"placeholder="enter your email" aria-label="name"/>
            
          <label class="form-label">Mobile No</label>
          <input required class="form-control" id = "name"type="number" name="mobileno"placeholder="enter your mobile no" aria-label="name"/>

          <label class="form-label">Address</label>
          <input required class="form-control" id = "name"type="text" name="address"placeholder="enter your address" aria-label="name"/>
             

        </div>

    </div>

   </div>
        
        </>
    )
}
export default Register;