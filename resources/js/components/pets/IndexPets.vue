<template>
    <div class="container">
            <div class="card-header">
                    <div class="row">
                        <div class="col">
                            <form>
                                <div class="form-row align-items-center">
                                    <div class="col-md-4 text-center">
                                         <label
                                            for="search"
                                            class="col-form-label"
                                            >Search Pets by Name</label
                                        >
                                        <input
                                            type="search"
                                            v-model="search"
                                            class="form-control mb-2"
                                            placeholder="Write the Pets name to search"
                                        />
                                    </div>

                                    <div class="col-md-4 text-center">
                                        <label
                                            for="status"
                                            class="col-form-label"
                                            >Filter Pets by Status</label
                                        >
                                        <select
                                            v-model="selectedStatus"
                                            name="status"
                                            class="form-control"
                                            aria-label="Default select example"
                                        >
                                            <option
                                                v-for="status in statuses"
                                                :key="status.id"
                                                :value="status.name"
                                                >{{ status.name }}</option
                                            >
                                        </select>
                                    </div>
                                    <div class="col-md-4 text-center">
                                        <label
                                            for="tags"
                                            class="col-form-label"
                                            >Filter Pets by Tag</label
                                        >
                                        <select
                                            v-model="selectedTags"
                                            name="tags"
                                            class="form-control"
                                            aria-label="Default select example"
                                        >
                                            <option
                                                v-for="tags in labels"
                                                :key="tags.id"
                                                :value="tags.name"
                                                >{{ tags.name }}</option
                                            >
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        <div class="row justify-content-center mt-3">
            <router-link  :to='{name:"createPets"}' class="btn btn-sm btn-success">Create Pets</router-link>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-md-4" v-for="pet in pets" :key="pet.id">
                <div class="card text-center mt-3" style="width: 18rem;">
                    <img class="card-img-top" :src="pet.photoUrl" alt="Card image cap" height="300px">
                    <div class="card-body">
                        <h5 class="card-title">{{ pet.name }}</h5>
                        <p class="card-text">{{ pet.status }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <router-link  :to='{name:"editPets", params:{id:pet.id}}' class="btn btn-sm btn-outline-warning">Edit</router-link>
                                <button @click="deletePet(pet.id)" type="button" class="btn btn-sm btn-outline-danger ">Delete</button>
                            </div>
                                <small class="text-muted">{{ pet.tags }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'indexPets',
    data(){
        return {
            pets:[],
            statuses:[],
            labels:[],
            search: null,
            selectedStatus:null,
            selectedTags:null,

        }
    },
    watch:{
        search(){
            this.getPets();
        },
        selectedStatus(){
            this.getPets();
        },
        selectedTags(){
            this.getPets();
        }
    },
    mounted(){
         this.getPets();
         this.getStatus();
         this.getTags();

    },
    methods:{
        getPets(){
             axios
                .get("/api/pets", {
                    params: {
                        search: this.search,
                        status: this.selectedStatus,
                        tags: this.selectedTags,
                    }
                })
                .then(res => {
                    this.pets = res.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getStatus() {
            axios
                .get("/api/pets/status")
                .then(res => {
                    this.statuses = res.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getTags() {
            axios
                .get("/api/pets/tags")
                .then(res => {
                    this.labels = res.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deletePet(id) {
           if (window.confirm("Are you sure you want to remove the pet?")) {
               axios.delete("api/pets/" + id).then(res => {
                this.getPets();
            });
            }
        }

    }
}
</script>

<style>

</style>
