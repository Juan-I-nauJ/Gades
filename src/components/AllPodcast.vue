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
                <span class="bg-primary rounded-lg "><strong>100</strong></span> <v-text-field focused class="search-input" v-model="search" :rules="searchRules" label="Filter podcasts..." required></v-text-field>
            </div>
            <div class="podcast-list">Aqui iria la lista de movidas</div>
        </main>
      </article>
      </v-responsive>
    </v-container>
  </template>
  
  <script>
export default {
    data: ()=>({
        
            valid: false,
            search: '',
            searchRules: [
                value => {
                    if (value) return true

                    return 'Please input something to filter by.'
                },
            ]
    }),
    }

  </script>
  
<style scoped>
article > header{
    color: rgb(63, 103, 156);
}

.search-bar{
    margin: 0;
}

.search-bar > div{
    width: 100%;
}
.search-bar > span{
    display: none;
}

.search-bar > div::before{
    content: '100';
    font-weight: 700;
    font-size: 2rem;
    color: white;
    background-color: rgb(24, 103, 192);
    padding: 1rem;
    border-radius: 8px;
    }

@media (min-width: 40rem){
    article > header{
        text-align: left;
    }
    .search-bar{
        text-align: right;
        
    }

    .search-bar > div::before{
        display: none;
        }

    .search-bar > span{
        vertical-align: middle;
        font-size: 1.5rem;
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin-bottom:20px;
        border-radius: 4px;
       
        
    }
    
    .search-bar > span > strong{
        font-size: 2rem;
    }
    
    .search-bar > div{
        display: inline-block;
        vertical-align: middle;
        width: 395.25px;
        margin-left: 0.9rem;
    }
}

</style>