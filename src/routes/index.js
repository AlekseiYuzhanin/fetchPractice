import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/App"
import Registration from "@/components/SamohodRegistration";
import Login from "@/components/SamohodLogin";
import Cart from "@/components/SamohodCart";
import Orders from "@/components/SamohodOrders";

const routes = [
    {
        path: "/",
        name : "«Самоход»",
        component: HomePage,
    },
    {
        path: "/registration",
        name : "Регистрация",
        component: Registration
    },
    {
        path: "/login",
        name : "Авторизация",
        component: Login
    },
    {
        path: "/cart",
        name : "Корзина",
        component: Cart
    },
    {
        path: "/orders",
        name : "Мои заказы",
        component: Orders
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;