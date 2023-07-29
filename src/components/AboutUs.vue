<template>
<v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height border pa-4">
        <article>
            <header class="mb-5">
        <h1 class="text-h2">About Us</h1>
            </header>
            <main>
                
                <v-card class="pa-3" title="Our Team" text="We are a small team composed of myself and the voices that tell me how to write code. Artist's depiction below." variant="tonal">
                    <v-img
                    class="ma-auto"
:width="400"
  aspect-ratio="16/9"
  cover
  src="https://media.tenor.com/eFDfS9OvBuYAAAAd/omniman-invincible.gif"
></v-img>
                </v-card>
                <v-card class="pa-3 mt-10" title="Location" text="We are located on top of a floating island with a tree sailing the clouds over the indian ocean." variant="tonal">
                <v-img
                class="ma-auto"
                :width="400"
                :height="300"

aspect-ratio="16/9"
cover
src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3d-floating-island-exploding-into-the-sky-md-abdul-manann.jpg"
/>
</v-card>

            </main>
            
        </article>
    </v-responsive>
</v-container>

</template>