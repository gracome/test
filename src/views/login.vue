<template class="login">
  <div>
    <h2 class="font-weight-bold">Connexion</h2>
    <!-- <p class="text-dark mb-3">We are Different, We Make You Different.</p> -->

   
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
          Vous avez oublié vos identifiants ?
          <a class="font-weight-semibold" href="/reset-password"
            >Mot de passe oublié</a
          >.
        </p>

        <button
          class="
            btn btn-primary btn-lg btn-block
            text-uppercase
            font-weight-semibold
          "
          type="submit"
         
        >
          <span class="spinner-border" role="status">
          </span>
          <span > Se connecter </span>
        </button>
      </form>
    
  </div>
</template>
