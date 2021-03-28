<template>
  <div>
    <TrendingComponent/>
    <ArticleComponent/>
  </div>
</template>

<script>
import ArticleComponent from '../components/ArticleComponent'; 
import TrendingComponent from '../components/TrendingComponent';     
export default {
  data(){
    return{
      articles:[],
      featuredArticles:[]
    }
  },
  components: {
    ArticleComponent,
    TrendingComponent,
  },
}
</script>
