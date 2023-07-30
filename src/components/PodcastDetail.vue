<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center border pa-4">
            <div class="text-right spinner" v-if="isLoading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <v-row>
                <v-col cols="12" lg="4">
                    <v-sheet rounded :elevation="9" class="podcast-details">
                        <div class="image-container">
                            <img src="https://static.wikia.nocookie.net/lufia/images/5/58/Master_Class_Zeppy-0.PNG" />
                        </div>
                        <v-divider />
                        <strong>Song Exploder</strong>
                        <p>By song exploder</p>
                        <v-divider />
                        <strong>Description:</strong>
                        <p>و کسانی که اگر فرزندانی ناتوان پس از خود به جای می گذارند، بر آنان از ضایع شدن حقوقشان بیم دارند،
                            باید از اینکه حقوق یتیمان دیگران را ضایع کنند بترسند. پس لازم است نسبت به شأن یتیمان از خدا پروا
                            کنند، و درباره آنان سخنی درست و استوار گویند.</p>
                    </v-sheet>
                </v-col>
                <v-col cols="12" lg="8">
                    <v-sheet rounded :elevation="9">
                        <p><strong>Episodes: 69</strong></p>
                    </v-sheet>

                    <v-sheet rounded :elevation="9" class="episode-table mt-5">
                        <v-table>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Title
                                    </th>
                                    <th class="text-left">
                                        Date
                                    </th>
                                    <th class="text-left">
                                        Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        How to make friends and influence people
                                    </td>
                                    <td>
                                        01-05-1920
                                    </td>
                                    <td>
                                        34:01
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-sheet>
                </v-col>

            </v-row>
        </v-responsive>
    </v-container>
</template>

<script setup>
//....
</script>

<style scoped>
.podcast-details {
    padding: 1em;
}

.image-container>img {
    width: 100%;
    max-width: 25rem;
    min-width: 10rem;

}
</style>