<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
             <router-link class="nav-item nav-link" :to='{name:"indexPets"}'>Pets App</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" :to='{name:"indexPets"}'>Home</router-link>
                    <router-link class="nav-item nav-link" :to='{name:"categories"}'>Categories</router-link>
                    <router-link class="nav-item nav-link" :to='{name:"tags"}'>Tags</router-link>
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
