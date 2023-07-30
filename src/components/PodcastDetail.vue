<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center border pa-4">
            <div class="text-right spinner">
                <v-progress-circular indeterminate color="primary" v-if="podcast.length < 1"></v-progress-circular>
            </div>
            <v-row>
                <v-col cols="12" lg="4">
                    <v-sheet rounded :elevation="9" class="podcast-details">
                        <div class="image-container">
                            <img src="https://static.wikia.nocookie.net/lufia/images/5/58/Master_Class_Zeppy-0.PNG"
                                v-if="podcast.length < 1" />
                            <img :src="podcast[0].artworkUrl600" v-else />
                        </div>
                        <v-divider />
                        <strong>{{ podcast.length > 0 ? podcast[0].collectionName : 'Loading..' }}</strong>
                        <p>By {{ podcast.length > 0 ? podcast[0].artistName : 'Loading..' }}</p>
                        <v-divider />
                        <v-list lines="one" v-if="podcast.length > 0">
                            <v-list-item v-for="(item, i) in podcast[0].genres" :key="item" :title="'Genre #' + (+i + 1)"
                                :subtitle="item"></v-list-item>
                        </v-list>
                        <p v-else>Loading...</p>
                        <!-- <strong>Description:</strong>
                        <p>و کسانی که اگر فرزندانی ناتوان پس از خود به جای می گذارند، بر آنان از ضایع شدن حقوقشان بیم دارند،
                            باید از اینکه حقوق یتیمان دیگران را ضایع کنند بترسند. پس لازم است نسبت به شأن یتیمان از خدا پروا
                            کنند، و درباره آنان سخنی درست و استوار گویند.</p>  -->
                    </v-sheet>
                </v-col>
                <v-col cols="12" lg="8">
                    <v-sheet rounded :elevation="9">
                        <p><strong>Episodes: {{ podcast.length > 0 ? podcast[0].trackCount : 'Loading...' }}</strong></p>
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
                                    <td class="text-left">
                                        {{ podcast.length > 0 ? podcast[1].trackName : 'Loading...' }}
                                    </td>
                                    <td class="text-left">
                                        {{ podcast.length > 0 ? podcast[1].releaseDate : 'Loading...' }}
                                    </td>
                                    <td class="text-left">
                                        {{ podcast.length > 0 ? podcast[1].trackTimeMillis : 'Loading...' }}
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
const props = defineProps({ id: String });
import axios from 'axios';
import { ref } from 'vue';

const podcast = ref([]);

function loadPodcast() {
    axios.get('https://itunes.apple.com/lookup?id=' + props.id + '&media=podcast&entity=podcastEpisode&limit=20')
        .then((response) => { podcast.value = response.data.results; console.log(podcast.value); });
}

loadPodcast();
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