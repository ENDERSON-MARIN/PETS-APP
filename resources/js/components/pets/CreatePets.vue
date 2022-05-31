<template>
    <div>
        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            Create New Pet
                            <router-link
                                :to="{ name: 'indexPets' }"
                                class="float-right"
                                >go Home</router-link
                            >
                        </div>

                        <div class="card-body">
                            <form @submit.prevent="storePet">
                                <div class="form-group row">
                                        <label
                                            for="category"
                                            class="col-md-4 col-form-label text-md-right"
                                            >Category</label
                                        >

                                        <div class="col-md-6">
                                            <select
                                                v-model="form.category_id"
                                                name="category"
                                                class="form-control"
                                                aria-label="Default select example"
                                            >
                                                <option
                                                    v-for="category in categories"
                                                    :key="category.id"
                                                    :value="category.id"
                                                    >{{ category.name }}</option
                                                >
                                            </select>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label
                                        for="name"
                                        class="col-md-4 col-form-label text-md-right"
                                        >Name</label
                                    >

                                    <div class="col-md-6">
                                        <input
                                            id="name"
                                            name="name"
                                            v-model="form.name"
                                            type="text"
                                            class="form-control "
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label
                                        for="photo"
                                        class="col-md-4 col-form-label text-md-right"
                                        >Photo Url</label
                                    >

                                    <div class="col-md-6">
                                        <input
                                            id="photo"
                                            name="photo"
                                            v-model="form.photoUrl"
                                            type="text"
                                            class="form-control "
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="form-group row">
                                        <label
                                            for="tags"
                                            class="col-md-4 col-form-label text-md-right"
                                            >Tags</label
                                        >

                                        <div class="col-md-6">
                                            <select
                                                v-model="form.tags"
                                                name="tags"
                                                class="form-control"
                                                aria-label="Default select example"
                                            >
                                                <option
                                                    v-for="tag in labels"
                                                    :key="tag.id"
                                                    :value="tag.name"
                                                    >{{ tag.name }}</option
                                                >
                                            </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                        <label
                                            for="status"
                                            class="col-md-4 col-form-label text-md-right"
                                            >Status</label
                                        >

                                        <div class="col-md-6">
                                            <select
                                                v-model="form.status"
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
                                </div>

                                <div class="form-group row mb-0 mt-4">
                                    <div class="col-md-6 offset-md-4">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            Store
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
        return {
            categories: [],
            labels: [],
            statuses: [],
            form: {
                category_id: "",
                name: "",
                photoUrl: "",
                tags: "",
                status:""
            }
        };
    },
    created() {
        this.getCategories();
        this.getTags();
        this.getStatus();
    },
    methods: {

        getCategories() {
            axios
                .get("/api/pets/categories")
                .then(res => {
                    this.categories = res.data;
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
        storePet() {
            axios
                .post("/api/pets", {
                    category_id: this.form.category_id,
                    name: this.form.name,
                    photoUrl: this.form.photoUrl,
                    tags: this.form.tags,
                    status: this.form.status,
                })
                .then(res => {
                    this.$router.push({ name: "indexPets" });
                });
        }
    }
}
</script>

<style>

</style>
