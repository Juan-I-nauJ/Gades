<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height border pa-4">
            <article>
                <header>
                    <h1 class="text-h2">Contact us!</h1>
                    <p>Do you have any helpful tip or constructive criticism to make this page better than it is? Send it our way!</p>
                </header>
                <main>
                  <v-overlay z-index="1000" v-model="overlay" class="overlay">
                      <div class="fill-height overlay-success-container d-flex">

                      <h3 class="mb-4">Comment submitted successfully!</h3>
                      <v-btn @click="overlay = false">Close</v-btn>
                  </div>
                </v-overlay>
                        <v-form fast-fail v-model="valid" @submit.prevent="valid ? overlay = true : null">
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                md="6"
                              >
                                <v-text-field
                                  v-model="username"
                                  :rules="nameRules"
                                  :counter="10"
                                  label="Username"
                                  required
                                ></v-text-field>
                              </v-col>
                      
                             
                      
                              <v-col
                                cols="12"
                                md="6"
                              >
                                <v-text-field
                                  v-model="email"
                                  :rules="emailRules"
                                  label="E-mail"
                                  required
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="12"
                                md="12"
                              >
                                <v-textarea
                                  v-model="message"
                                  :rules="messageRules"
                                  :counter="100"
                                  label="Message"
                                  required
                                ></v-textarea>
                              </v-col>
                            </v-row>
                            <v-btn type="submit" block class="bg-teal-darken-3 mt-5">Submit</v-btn>
                          </v-container>
                        </v-form>
                    
                </main>
            </article>
            </v-responsive>
            </v-container>

</template>

<script>
  export default {
    data: () => ({
      valid: false,
      username: '',
      overlay: false,
      nameRules: [
        value => {
          if (value) return true

          return 'Userame is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Username must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is required.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
      message: '',
      messageRules: [
        value => {
            if(value) return true

            return 'A message is required.'
        },
     
      ],
    }),
  }
</script>

<style scoped>


.overlay-success-container{
padding: 3rem;
 translate: -0.1px 40vh;
  border: 5px groove teal;
  background-color: #121212;
  color: whitesmoke;
  flex-direction:column;

}

.overlay-success-container > button{
text-align:center;
margin: auto;

}

@media (min-width:26rem){
  .overlay-success-container{
    translate: 1rem 40vh;
  }
}

@media (min-width: 31rem){
  .overlay-success-container{
    translate: 11.5vw 40vh;
  }
}

@media (min-width: 37rem){
  .overlay-success-container{

    padding: 4rem;
    translate: 14vw 40vh;
  }
}

@media (min-width: 43rem){
  .overlay-success-container{

    padding: 4rem;
    translate: 18.5vw 40vh;
  }
}

@media (min-width: 50rem){
  .overlay-success-container{

    padding: 5rem 4rem;
    translate: 25vw 35vh;
  }
}

@media (min-width: 56rem){
  .overlay-success-container{

    padding: 5rem 4rem;
    translate: 27vw 35vh;
  }
}

@media (min-width: 62rem){
  .overlay-success-container{

    padding: 5rem 4rem;
    translate: 28vw 35vh;
  }
}

@media (min-width: 68rem){
  .overlay-success-container{

    padding: 5rem 4rem;
    translate: 31vw 35vh;
  }
}

@media (min-width: 75rem){
  .overlay-success-container{

    padding: 5rem 4rem;
    translate: 33vw 35vh;
  }
}

@media (min-width: 81rem){
  .overlay-success-container{

    padding: 5rem 4rem;
    translate: 42vw 35vh;
  }
}

</style>