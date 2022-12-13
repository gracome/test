<template>
    
  <div class="container">
    <h2 class="font-weight-bold">Connexion</h2>
      <form class="mb-3" >
        
          <div class="form-group">
            <label for="name">Nom d'utilisateur</label>
            <input
              type="text"
              class="form-control form-control-md"
              id="login"
              placeholder="Entrer votre nom d'utilisateur"
             
            />
            <span class="error-text"></span>
          </div>
        
        
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              class="form-control form-control-md"
              id="password"
              placeholder="Entrer votre mot de passe"
              
            />
            <span class="error-text"></span>
          </div>
        

        <p>
          
          <a class="font-weight-semibold" href="/reset_password"
            >Mot de passe oublié</a
          >.
        </p>

        <button
          class="
            btn btn-dark btn-lg btn-block
            text-uppercase
            font-weight-semibold
          "
          type="submit"
         
        >
          
          <span > Se connecter </span>
        </button>
  <p class="mt-3">
         Vous n'avez pas un compte?
      <a class="font-weight-semibold" href="/register">Inscrivez-vous</a>.
    </p>
      </form>
    
  </div>
</template>

<style >
#app {
  text-align: left !important;
}
</style>