<template>
    <div>
        <div class="articles-div">
            <div class="postcard mb-4" v-for="article in articles" v-bind:key="article.id">
                <div class="postcard-container">
                    <router-link class="postcard-img-div" :to="{name : 'article', params:{title : article.title_link}}">
                        <img class="postcard-img" v-bind:src="asset('assets/images/'+article.images[0])" v-bind:alt="''+article.title">
                    </router-link>
                    <div class="postcard-text-div">
                        <div class="mb-2">
                            <router-link class="postcard-header" :to="{name : 'article', params:{title : article.title_link}}">
                                {{article.title}}
                            </router-link>
                        </div>
                        <div class="postcard-mini mb-2">
                        {{article.body}}
                        </div>
                        <div class="postcard-time">
                            <span>
                                {{article.timeago}}
                            </span>
                            <span>
                                &dash;
                            </span>
                            <span>
                                2 mins read
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Article from '../api/Article'
export default {
    data() {
        return {
            articles: []
        }
    },
    props: ["author"],
    mounted() {
        if(this.author != undefined){
            return this.fetchAuthor();
        }
        if (this.$route.name == 'home') {
            return this.fetchPosts();
        }
        if (this.$route.params.type == 'tag') {
            return this.fetchTag();            
        }
    },
    methods: {
        async fetchPosts(){
            return await Article.getArticles()
            .then((res)=>{
                this.articles = res.data.data;
            })
            .catch(err=>console.log(err));
        },
        async fetchAuthor(){
            return await Article.getAuthor(this.author.id).then((res)=>{
                this.articles = res.data.data;
            })
            .catch(err=>console.log(err));
        },
        async fetchTag(){
            return await Article.getTag(this.$route.params.name)
            .then((res)=>{
                this.articles = res.data.data;
            })
            .catch(err=>console.log(err));
        }
    },
}
</script>

<style scoped>
.articles-div {
    margin-top: 4rem;
}

.articles-div .postcard-img-div {
    position: relative;
    display: flex;
    height: 100%;
    border: none;
    transition: all ease-in-out 3000ms;
    -webkit-transition: all ease-in-out 3000ms;
    -moz-transition: all ease-in-out 3000ms;
    -ms-transition: all ease-in-out 3000ms;
    -o-transition: all ease-in-out 3000ms;
}

.articles-div .postcard-img-div::before {
    transition: all ease-in-out 3000ms;
    -webkit-transition: all ease-in-out 3000ms;
    -moz-transition: all ease-in-out 3000ms;
    -ms-transition: all ease-in-out 3000ms;
    -o-transition: all ease-in-out 3000ms;
}

.articles-div .postcard-img-div:hover::before {
    position: absolute;
    width: 100%;
    height: -webkit-fill-available;
    content: '';
    display: block;
    background: rgba(225, 225, 225, .25);
    z-index: 1;
    cursor: pointer;
}

</style>