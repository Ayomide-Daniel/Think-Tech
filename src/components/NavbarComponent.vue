<template>
    <div>
        <header class="header">
            <div class="container">
                <div class="sm-nav-container nav-container">
                    <button class="toggle-btn" type="button" @click="showMobileNav">
                        <span class="toggle-btn-span1"></span>
                        <span class="toggle-btn-span2"></span>
                        <span class="toggle-btn-span3"></span>
                    </button>
                    <router-link :to="{name: 'home'}" class="navbar-title" style="z-index:-1;">
                        <!-- <h1 class="app-title">BEEM</h1> -->
                        <img src="../assets/images/logo.png" class="app-title sm-app-title"/>
                    </router-link>
                    <button><i class="bi bi-search" aria-hidden="true" @click="showSearch"></i></button>
                </div>
                <div class="lg-nav-div">
                    <div class="lg-nav-container nav-container">

                        <router-link :to="{name: 'home'}" class="navbar-title">
                            <!-- <h1 class="app-title">BEEM</h1> -->
                            <img src="../assets/images/logo.png" class="app-title lg-app-title"/>
                        </router-link>
                        <div class="navbar-links">
                            <router-link :to="{name: 'home'}" exact>Home</router-link>
                            <router-link :to="{name: 'about'}">Features</router-link>
                            <router-link :to="{name: 'about'}">Changelog</router-link>
                            <router-link :to="{name: 'about'}">Support</router-link>
                            <router-link :to="{name: 'about'}">Get theme</router-link>
                        </div>
                        <div class="navbar-tools">
                            <router-link :to="{name: 'home'}">Sign in</router-link>
                            <router-link :to="{name: 'home'}"><i class="bi bi-envelope-fill" aria-hidden="true"></i> Subscribe</router-link>
                            <button v-if="is_light_mode"><i class="bi bi-moon" aria-hidden="true" @click="darkThemeSwitch"></i> </button>
                            <button v-else><i class="bi bi-sun" aria-hidden="true" @click="darkThemeSwitch"></i> </button>
                            <button><i class="bi bi-search" aria-hidden="true" @click="showSearch"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="aside-container vs-wrapper" @click="ctcMobileNav">
            <aside class="mobile-nav">
                <br>
                <div class="close-mobile-nav">
                    <button type="button" @click="closeMobileNav">&times;</button>
                </div>
                <br>
                <div class="aside-nav-content nav-container">
                    <div class="navbar-links">
                        <router-link :to="{name: 'home'}" exact>Home</router-link>
                        <router-link :to="{name: 'home'}">Features</router-link>
                        <router-link :to="{name: 'about'}">Changelog</router-link>
                        <router-link :to="{name: 'about'}">Support</router-link>
                        <router-link :to="{name: 'about'}">Get theme</router-link>
                    </div>
                    <br>
                    <div class="navbar-tools">
                        <router-link :to="{name: 'home'}">Sign in</router-link>
                        <router-link :to="{name: 'home'}">Subscribe</router-link>
                        <button v-if="is_light_mode"><i class="bi bi-moon" aria-hidden="true" @click="darkThemeSwitch"></i> </button>
                        <button v-else><i class="bi bi-sun" aria-hidden="true" @click="darkThemeSwitch"></i> </button>
                    </div>

                </div>
            </aside>
        </div>
        <div class="search-container vs-wrapper">
            <div class="search-container-content">
                <div class="close-search-div">
                    <button type="button" @click="closeSearch">&times;</button>
                </div>
                <br>
                <br>
                <form>
                    <input type="text" placeholder="Type to search">
                    <button><i class="bi bi-search" aria-hidden="true"></i></button>
                </form>
            </div>

        </div>
    </div>
</template>
<script>
let $ = window.jQuery = require('jquery');
import themeChanger from "../plugins/theme.js";
export default {
    data() {
        return {
            themeChanger: null,
            is_light_mode: true
        }
    },
    created(){
        this.themeChanger = new themeChanger();
    },
    methods:{
        darkThemeSwitch() {
            this.is_light_mode = !this.is_light_mode; 
            this.themeChanger._darkThemeSwitch();
        },
        ctcMobileNav(e){
            if($(e.target).closest("aside").length === 0){
                this.closeMobileNav();
            }
        },
        async closeMobileNav(){
            await $(".aside-container").fadeOut();
            await $(".aside-container aside").css({
                "left": "-100%",
            });
        },
        async showMobileNav(){
            await $(".aside-container").fadeIn();
            await $(".aside-container aside").css({
                "left": "0%",
            });
        },
        async closeSearch(){
            await $(".search-container").css({
                "transform": "scale(0)"
            })
            await $(".search-container").fadeOut();
        },
        async showSearch(){
            await $(".search-container").fadeIn();
            await $(".search-container").css({
                "transform": "scale(1)"
            })
        }

    }
}
</script>

<style scoped>
    .bi::before{
        font-size: 1rem;
    }
    .close-search-div{
        position: absolute;
        right: 0;
    }
    
    .close-search-div button{
        margin-right: 2rem;
        font-size: 2rem;
        border: none;
        background: none !important;
    }
    .search-container-content{
        position: relative;
    }
    .search-container{
        background: var(--white);
        padding-top: 5%;
        transform: scale(0);
        transition: all ease-in-out 300ms;
        display: none;
    }
    .search-container form{
        display: flex;
        width: 100%;
        padding: 2rem;
    }
    .search-container input{
        border: none;
        width: 100%;
        padding: 1rem;
        font: inherit;
        /* background: #f7f7f7; */
        flex: 11;
        border: 3px solid var(--colored-featured-bg);
        border-radius: .5rem 0 0 .5rem
    }
    
    .search-container button{
        flex: 1;
        padding: 1rem;
        border: none;
        color: var(--dark);
        background: var(--colored-featured-bg);
        border-radius: 0 .5rem .5rem 0
    }
    .header{        
        padding: 25px 0 0;
    }
    .nav-container {
        /* padding: 0 1.5rem; */
        position: relative;
    }

    .nav-container a {
        text-transform: uppercase;
        color: var(--dark);
    }

    .app-title{
        z-index: 1;
        width: auto;
        height: 200px;
        position: absolute;
        top: 0;
        left: 0;
        top: -205%;
        /* font-size: 22px;
        color: var(--dark);
        border: none;
        letter-spacing: 5px; */
    }
    .sm-app-title{
        margin: 0 auto;
        right: 0;
    }
    .lg-app-title{
        left: -5%;
        top: -226%;
    }
    .nav-container button {
        background: none;
        border: none;
        padding: .5rem;
        color: var(--dark);
    }

    .sm-nav-container button:nth-child(1) {
        justify-self: flex-start;
    }

    .sm-nav-container button:last-child {
        justify-self: flex-end;
    }

    .toggle-btn span {
        display: block;
        content: '';
        width: 25px;
        height: 2px;
        background: var(--dark);
        margin-bottom: 3px;
    }
        
    .lg-nav-div {
        display: none;
    }

    .sm-nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .aside-container{
        background: rgba(0, 0, 0, .5);
        display: none;
    }
    aside{
        position: absolute;
        left: -100%;
        background: var(--colored-featured-bg);
        height: 100%;
        width: 320px;
        transition: left linear 300ms;
        /* padding-bottom: 100%; */
    }
    .aside-nav-content{
        display: grid;
        padding: 2rem;
    }
    .aside-nav-content a{
        display: block;
        margin: 1rem;
    }
    .close-mobile-nav{
        display: flex;
        justify-content: flex-end;
    }
    .close-mobile-nav button{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 50px;
        height: 50px;
        margin-right: 2rem;
        font-size: 2rem;
        border: none;
        color: var(--dark);
        background: none;
    }   
    @media screen and (min-width: 1024px) {
        .sm-nav-container {
            display: none;
        }
        .lg-nav-div {
            display: block;
        }
        .lg-nav-container {
            display: flex;
            width: 100%;
            font-size: 14px;
            align-items: center;
            color: var(--dark);
            justify-content: flex-end;
        }
        .lg-nav-container .navbar-links{
            display: flex;
            justify-content: center;
            flex: 7;
        }
        .lg-nav-container .navbar-tools {
            color: inherit;
            display: flex;
            justify-content: flex-end;
            flex: 4;
        }
        .lg-nav-container .navbar-tools a,
        .lg-nav-container .navbar-links a {
            color: inherit;
            margin: .5rem;
            padding: 0 .5rem;
        }

    }
</style>