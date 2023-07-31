<template>

  <v-card class="menu-content">

    <v-layout>
      <v-navigation-drawer v-model="drawer" class="bg-teal" theme="dark">
        <v-list-item prepend-avatar="https://i1.sndcdn.com/artworks-000066132032-73nkbk-t500x500.jpg"
          title="Gades"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to='/'><v-list-item prepend-icon="mdi-view-dashboard" title="Home"
              value="home"></v-list-item></router-link>
          <router-link to='/about'><v-list-item prepend-icon="mdi-forum" title="About"
              value="about"></v-list-item></router-link>
          <router-link to='/contact'><v-list-item prepend-icon="mdi-forum" title="Contact Us"
              value="contact"></v-list-item></router-link>
              <router-link to='/main'><v-list-item prepend-icon="mdi-forum" title="Podcast List"
                value="main"></v-list-item></router-link>
                <router-link to='/details'></router-link>

        </v-list>
      </v-navigation-drawer>
      <v-main>
        
        <div class="justify-center align-center h-100">
          <v-btn class="burger-button" @click.stop="drawer = !drawer">
            <v-icon icon="$vuetify"></v-icon>
          </v-btn>
          <the-header />
          <router-view />
          <added-footer />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  import AddedFooter from './../added/Footer.vue'
  import Header from '../added/Header.vue';

export default {
  components: {
    AddedFooter,
    TheHeader: Header,
  },
  data() {
    return {
      drawer: null,
      device: null,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },

  }
}
</script>

<style scoped>

.menu-content {
  z-index: 100;
}

.v-navigation-drawer {
  z-index: 101;
}

.v-main {
  min-height: 100vh;
  margin: 2.5rem 0;
}

.burger-button {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.5;
}

.burger-button span {
  border-bottom: 5px solid black;
}

</style>