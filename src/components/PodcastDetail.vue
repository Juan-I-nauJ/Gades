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
                            <v-list-item v-for="(item, i) in podcast[0].genres" :key="item" :title="item"></v-list-item>
                        </v-list>
                        <p v-else>Loading...</p>
                    </v-sheet>
                </v-col>
                <v-col cols="12" lg="8">
                    <v-sheet rounded :elevation="9">
                        <p class="episode-section-title"><strong>Episodes: {{ podcast.length > 0 ? podcast[0].trackCount :
                            'Loading...' }}</strong></p>
                    </v-sheet>
                    <v-sheet rounded :elevation="9" class="episode-table mt-5">
                        <v-table>
                            <thead>
                                <tr>
                                    <th class="text-left font-weight-bold">
                                        Title
                                    </th>
                                    <th class="text-left font-weight-bold">
                                        Date
                                    </th>
                                    <th class="text-left font-weight-bold">
                                        Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="episode in podcast.slice(1)" :key="episode.trackId">
                                    <td class="text-left episode-name">
                                        {{ podcast.length > 0 ? episode.trackName : 'Loading...' }}
                                    </td>
                                    <td class="text-left">
                                        {{ podcast.length > 0 ? DateTime.fromISO(episode.releaseDate).toFormat("dd/MM/yyyy")
                                            : 'Loading...' }}
                                    </td>
                                    <td class="text-left">
                                        {{ podcast.length > 0 ?
                                            Duration.fromMillis(episode.trackTimeMillis).toFormat('hh:mm:ss') : 'Loading...' }}
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
import { DateTime, Duration } from 'luxon';
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

.episode-section-title {
    font-size: 1.9rem;
    text-align: center;
    padding: 0.5rem;

}

.episode-name {
    color: #006064;
}

@media (min-width: 80rem) {
    .episode-section-title {
        text-align: left;

    }
}</style>