<template>
    <div>
        <div class="pt-4 pb-4">
            <h6>YOU MIGHT ALSO LIKE...</h6>
        </div>

        <div class="articles-div">
            <div class="postcard mb-4" v-for="article in similarArticles" :key="article.id">
                <div class="postcard-container">
                    <router-link class="postcard-img-div" :to="{name : 'article', params:{title : article.title_link}}">
                        <img class="postcard-img" :src="asset('assets/images/'+article.images[0])" :alt="''+article.title">
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