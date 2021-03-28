<template>
  <div>
    <MetaComponent v-bind:author="author"/>
    <ArticleComponent v-bind:author="author"/>
    <SimilarArticlesComponent v-bind:author="author"/>
  </div>
</template>

<script>
import axios from "axios"
import MetaComponent from '../components/MetaComponent'; 
import ArticleComponent from '../components/ArticleComponent'; 
import SimilarArticlesComponent from '../components/SimilarArticlesComponent'; 

export default {
  data() {
    return {
      author:{}
    }
  },
  components: {
    ArticleComponent,
    SimilarArticlesComponent,
    MetaComponent
  },
  created() {
    if (this.$route.params.type == 'author') {
      const author = this.$route.params.name;
      axios.get('http://beem.test/api/account/'+author)
      .then(async (res)=>{
        this.author = await res.data.data;
      })
      .catch(err=>console.log(err));
    }else{
      const tag = this.$route.params.name;
      console.log(tag);
    }
  },
  methods: {
  },
}
</script>