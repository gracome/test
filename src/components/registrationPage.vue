<template>
    
  <div class="container pt-5">
    <h2 class="font-weight-bold">Inscrivez vous </h2>
      <form class="mb-3" >
        <div class="row">

        
          <div class="col-6 form-group">
            <label for="name">Nom d'utilisateur</label>
            <input
              type="text"
              class="form-control form-control-md"
              
              placeholder="Entrer votre nom d'utilisateur"
             
            />
            <span class="error-text"></span>
          </div>

          <div class="col-6 form-group">
            <label for="name">Rôle</label>
            <select class="form-control form-control-md">
            <option> Admin</option>
            <option >Agent</option>
            </select>
            <span class="error-text"></span>
          </div>
       

          
        
          <div class="col-6 form-group">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              class="form-control form-control-md"
             
              placeholder="Entrer votre mot de passe"
              
            />
            <span class="error-text"></span>
          </div>

           <div class="col-6 form-group">
            <label for="password">Confirmer votre mot de passe</label>
            <input
              type="password"
              class="form-control form-control-md"
             
              placeholder="Confirmez votre mot de passe"
              
            />
            <span class="error-text"></span>
          </div>
        
    <div class="container">
         <button
          class="
            btn btn-dark btn-lg btn-block
            text-uppercase
            font-weight-semibold
          "
          type="submit"
         
        >
          
          <span > S'inscrire </span>
        </button>
    </div>
       
        </div>
      </form>
    
  </div>
</template>

<style>
   
</style>