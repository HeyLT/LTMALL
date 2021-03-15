import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//懒加载
const Home = () => import("views/home/Home");
const Car = () => import("views/car/Car");
const Category = () => import("views/category/Category");
const Profile = () => import("views/profile/Profile");

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

//配置对应映射关系
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/car",
    component: Car
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
