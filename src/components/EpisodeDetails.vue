<template>
 <v-sheet rounded :elevation="9" class="pa-5">
<p><strong class="episode-title pa-1 mt-2 mb-2">{{props.episode.trackName}}</strong></p>
<v-divider />
<p class="episode-description pa-1 mt-2 mb-2">{{props.episode.description}}</p>
<v-divider />
<audio controls class="mt-2 mb-2">
    <source :src="props.episode.episodeUrl" type="audio/mp3">
</audio>
</v-sheet>
</template>

<script setup>
const props = defineProps({episode: Object});

console.log(props.episode);
</script>

<style scoped>
.episode-description{
    font-style: italic;
}
audio{
    width: 100%;
}
</style>