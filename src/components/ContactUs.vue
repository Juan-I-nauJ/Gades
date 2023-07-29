<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height border pa-4">
            <article>
                <header>
                    <h1 class="text-h2">Contact us!</h1>
                    <p>Do you have any helpful tip or constructive criticism to make this page better than it is? Send it our way!</p>
                </header>
                <main>
                        <v-form fast-fail v-model="valid">
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