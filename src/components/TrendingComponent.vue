<template>
    <div>
        <!-- <div class="facebook-card" style="display:flex;">
            <div>
                <VueSkeletonLoader 
                type="rect"
                :width="604"
                :height="527"
                animation="wave"
                rounded
                radius="16"
                />
            </div>
            <div>

                <VueSkeletonLoader 
                type="rect"
                :width="100"
                :height="20"
                animation="fade"
                rounded
                radius="16"
                />
                <VueSkeletonLoader 
                type="rect"
                :width="100"
                :height="20"
                animation="fade"
                rounded
                radius="16"
                />
                <VueSkeletonLoader 
                type="rect"
                :width="100"
                :height="20"
                animation="fade"
                rounded
                radius="16"
                />
            </div>
        </div> -->
        <div class="bg-stories">
            <div class="swiper-container">
                <VueSlickCarousel class="swiper-wrapper" v-if="articles.length > 0"
                    :arrows="false" :dots="true" :autoplay="true" :infinite="true">
                    <div class="swiper-slide featured-postcard" v-for="article in articles" v-bind:key="article.id">
                        <div class="postcard-container">
                            <div class="postcard-img-div">
                                <router-link :to="{name : 'article', params:{title : article.title_link}}">
                                    <img class="postcard-img featured-postcard-img" v-bind:src="asset('assets/images/'+article.images[0])" v-bind:alt="''+article.title">
                                </router-link>
                            </div>
                            <div class="postcard-text-div">
                                <div class="mb-4">
                                    <router-link :to="{name : 'classify', params:{type: 'tag' ,name : article.tag}}">
                                        <h4 class="postcard-tag">{{article.tag}}</h4>
                                    </router-link>
                                </div>
                                <div class="mb-3">
                                    <router-link class="post-title" :to="{name : 'article', params:{title : article.title_link}}">
                                        {{article.title}}
                                    </router-link>
                                </div>
                                <div>
                                    <router-link class="postcard-author-div" :to="{name : 'classify', params:{type: 'author', name : article.author_link}}">
                                        <img v-bind:src="asset('author_images/'+article.author.image)" :alt="article.author.name" srcset="" class="postcard-author-img"><h5 class="post-author">{{article.author.name}}</h5>
                                    </router-link>
                                </div>
                                <div class="postcard-mini">
                                {{article.body}}
                                </div>
                            </div>
                        </div>
                    </div>
                </VueSlickCarousel>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-white"></div>
                <!-- Add Arrows -->
                <div class="swiper-div">
                    <div class="swiper-button-next swiper-button-white"></div>
                    <div class="swiper-button-prev swiper-button-white"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Article from '../api/Article';
import VueSkeletonLoader from 'skeleton-loader-vue';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    data(){
        return{
            articles:[],            
            slidesToShow: 3,
        }
    },
    components: {
        VueSlickCarousel,
        // eslint-disable-next-line vue/no-unused-components
        VueSkeletonLoader
    },
    created() {
        this.fetchTrending();
    },
    methods: {
        fetchTrending(){
            Article.getTrending().then(res=>{
                this.articles = res.data.data;
            })
        },        
    },
}
</script>
<style scoped>
    /* @import '../assets/css/swiper.min.css'; */
    .bg-stories {
        max-width: 100vw;
        min-height: 280px;
    }

    .bg-stories .featured-postcard {
        background: var(--colored-featured-bg);
        border-radius: 1rem;
        -webkit-border-radius: 1rem 1rem;
        -moz-border-radius: 1rem 1rem;
        -ms-border-radius: 1rem 1rem;
        -o-border-radius: 1rem 1rem;
    }
    .featured-postcard-img {
        height: 100%;
        border-radius: 1rem 1rem 0 0;
        -webkit-border-radius: 1rem 1rem 0 0;
        -moz-border-radius: 1rem 1rem 0 0;
        -ms-border-radius: 1rem 1rem 0 0;
        -o-border-radius: 1rem 1rem 0 0;
    }
    .featured-postcard .post-title::first-letter {
        text-transform: uppercase;
    }
    @media screen and (min-width: 1024px) {
        .featured-postcard .postcard-container {
            display: grid;
            grid-template-columns: 65% 35%;
        }
        .postcard-container .featured-postcard-img {
            border-radius: 1rem 0 0 1rem;
            -webkit-border-radius: 1rem 0 0 1rem;
            -moz-border-radius: 1rem 0 0 1rem;
            -ms-border-radius: 1rem 0 0 1rem;
            -o-border-radius: 1rem 0 0 1rem;
        }
    }
</style>