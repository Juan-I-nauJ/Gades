<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height border pa-4">
            <article>
                <header>
                    <h1 class="text-h3">Podcaster</h1>
                </header>
                <hr>
                <main class="main-container">
                    <div class="search-bar">
                        <span class="bg-primary rounded-lg "><strong>100</strong></span> <v-text-field focused
                            class="search-input" v-model="search" :rules="searchRules" label="Filter podcasts..."
                            required></v-text-field>
                    </div>
                    <div class="podcast-list">
                        <v-row no-gutters>
                            <v-col v-for="podcast in allList" :key="podcast.id.attributes['im:id']" cols="6" lg="3">
                                <v-sheet rounded :elevation="9" class="podcast-container">
                                    <div class="image-container">
                                        <img :src="podcast['im:image'][2].label" />
                                        <!-- <v-img :aspect-ratio="16/9" :src="podcast['im:image'][2].label"></v-img> -->
                                    </div>
                                    <strong>{{ podcast['im:name'].label }}</strong>
                                    <p>Author: {{ podcast['im:artist'].label }}</p>
                                </v-sheet>

                            </v-col>
                        </v-row>




                    </div>
                </main>
            </article>
        </v-responsive>
    </v-container>
</template>
  
<script>
import axios from 'axios';

export default {
    data: () => ({

        valid: false,
        search: '',
        searchRules: [
            value => {
                if (value) return true

                return 'Please input something to filter by.'
            },
        ],
        allList: null
    }),
    methods: {
        //this method gathers the podcast array from the api, tops out at 100 entries.
        getList() {
            axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
                .then((response) => { this.allList = response.data.feed.entry; console.log('allList tiene: ', this.allList) });
        }
    },
    mounted() {
        //this method calls getList when the component is mounted, it will need an if statement down the line.
        this.getList();
    }
}

</script>
  
<style scoped>
article>header {
    color: rgb(63, 103, 156);
}

.search-bar {
    margin: 0;
}

.search-bar>div {
    width: 100%;
}

.search-bar>span {
    display: none;
}

.search-bar>div::before {
    content: '100';
    font-weight: 700;
    font-size: 2rem;
    color: white;
    background-color: rgb(24, 103, 192);
    padding: 1rem;
    border-radius: 8px;
}

.podcast-container {
    position: relative;
    padding: 5rem 2.5rem 0 2.5rem;
    margin: 5rem 1rem;
}

.image-container {
    position: absolute;
    top: -6rem;
    left: 10%;
}

.image-container>img {
    border-radius: 50%;
}



/*for desktops*/
@media (min-width: 40rem) {
    article>header {
        text-align: left;
    }

    .search-bar {
        text-align: right;

    }

    .search-bar>div::before {
        display: none;
    }

    .search-bar>span {
        vertical-align: middle;
        font-size: 1.5rem;
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin-bottom: 20px;
        border-radius: 4px;


    }

    .search-bar>span>strong {
        font-size: 2rem;
    }

    .search-bar>div {
        display: inline-block;
        vertical-align: middle;
        width: 395.25px;
        margin-left: 0.9rem;
    }

    .image-container {
        left: 25%;
    }

}
</style>