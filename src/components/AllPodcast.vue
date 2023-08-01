<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center border pa-4">
            <div class="text-right spinner" v-if="isLoading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <router-view></router-view>
            <article v-if="activeList">
                <main class="main-container">
                    <div class="search-bar mb-5">
                        <v-text-field focused class="search-input" v-model="search"
                            label="Filter podcasts..."></v-text-field>
                    </div>
                    <div class="podcast-list">
                        <v-row no-gutters v-if="search === ''">
                            <v-col v-for="podcast in allList" :key="podcast.id.attributes['im:id']" cols="12" sm="6" lg="3">
                                <v-sheet rounded :elevation="9" class="podcast-container">
                                    <router-link :to="this.$route.path + '/' + podcast.id.attributes['im:id']">
                                        <div class="image-container">
                                            <img :src="podcast['im:image'][2].label" />
                                        </div>
                                    </router-link>
                                    <strong>{{ podcast['im:name'].label }}</strong>
                                    <p>Author: {{ podcast['im:artist'].label }}</p>
                                </v-sheet>
                            </v-col>
                        </v-row>
                        <v-row v-else>
                            <h3 class="text-h5 error-message" v-if="filterList.length < 1">No podcast author or title
                                contains {{ search }}</h3>
                            <v-col v-for="podcast in filterList" :key="podcast.id" cols="12" sm="6" lg="3" v-else>
                                <v-sheet rounded :elevation="9" class="podcast-container">
                                    <router-link :to="this.$route.path + '/' + podcast.id.attributes['im:id']">
                                        <div class="image-container">
                                            <img :src="podcast['im:image'][2].label" />
                                        </div>
                                    </router-link>
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
import Header from '@/layouts/added/Header.vue';

export default {
    components: {
        TheHeader: Header,
    },
    data: () => ({
        valid: false,
        search: '',
        responseAllList: '',
        allList: [],
        searchList: [],

    }),
    computed: {
        isLoading() {
            return this.allList.length <= 0;
        },
        filterList() {
            return this.allList.filter((element) => element['im:artist'].label.toUpperCase().includes(this.search.toUpperCase()) || element.title.label.toUpperCase().includes(this.search.toUpperCase()));
        },
        activeList() {
            return this.$route.path === '/main';
        }
    },
    methods: {
        //this method gathers the podcast array from the api, tops out at 100 entries. The all origins api is used to avoid CORS problems.
        getList() {
            axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`)
            .catch(error => console.log('error when fetching database: ', error.response.data))
                .then(response =>{this.responseAllList = JSON.parse(response.data.contents); this.allList = this.responseAllList.feed.entry;});
        },
        hideList() {
            this.viewingList = !this.viewingList;
        }
    },
    mounted() {
        //this method calls getList when the component is mounted, it will need an if statement down the line to interface with 
        //localstorage.

        this.getList();
    }
}

</script>
  
<style scoped>
/*.spinner {
    position: absolute;
    top: 0;
    right: 0;
}*/

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
    color: white;
    background-color: rgb(24, 103, 192);
    padding: 1rem;
    border-radius: 8px;
    margin-right: 1rem;
}

.podcast-container {
    position: relative;
    padding: 5rem 2.5rem 0 2.5rem;
    margin: 5rem 1rem;
    min-width: 6rem;
    min-height: 10rem;
}

.image-container {
    position: absolute;
    top: -6rem;
    left: 10%;
    border-radius: 50%;
}

.image-container>img {
    border-radius: 50%;
    filter: grayscale(1);

}

.image-container>img:hover,
.image-container>img:active {
    filter: grayscale(0);
    filter: brightness(200%);
}

.error-message {
    margin: auto;
    color: #dd3c00;
    padding: 1rem;
    border: 2px solid #dd3c00;
}


/*FOR TABLETS*/
@media (min-width: 21rem) and (max-width: 54.9rem) {
    .image-container {
        position: absolute;
        top: -6rem;
        left: 25%;
    }
}

/*END OF TABLET MEDIA QUERY*/

/*FOR LARGE TABLETS OR LAPTOPS*/
@media (min-width: 55rem) {
    .image-container {
        position: absolute;
        left: 28%;
    }
}

/*END OF LAPTOP MEDIA QUERY*/

/*FOR DESKTOPS*/
@media (min-width: 80rem) {

    .search-bar {
        text-align: right;
    }

    .search-bar>div {
        margin-left: 65%;
        vertical-align: middle;
        width: 24.7rem;
    }

    .search-bar>div::before {
        margin-right: 1rem;
    }


    .image-container {
        left: 17%;
    }

}

/*END OF DESKTOP MEDIA QUERY*/

/*FOR WIDE SCREENS*/
@media (min-width: 120rem) {


    .image-container {
        left: 29%;
    }
}

/*END OF WIDE SCREENS*/</style>