/* NAVBAR */

const Categories = () => import("./components/Categories.vue");
const Tags = () => import("./components/Tags.vue");

/* COMPONENTS */
const IndexPets = () => import("./components/pets/IndexPets.vue");
const CreatePets = () => import("./components/pets/CreatePets.vue");
const EditPets = () => import("./components/pets/EditPets.vue");


export const routes = [
    {
        name: "categories",
        path: "/categories",
        component: Categories
    },
    {
        name: "tags",
        path: "/tags",
        component: Tags
    },
    {
        name: "indexPets",
        path: "/pets",
        component: IndexPets
    },
    {
        name: "createPets",
        path: "/pets/create",
        component: CreatePets
    },
    {
        name:"editPets",
        path:"/edit/:id",
        component:EditPets
    },
]
