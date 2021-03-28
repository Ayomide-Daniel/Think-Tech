<template>
    <div>
        <div v-if="$route.params.type == 'author'" class="data-meta">
            <div class="author-img-div">
                <img :src="asset('author_images/'+author.image)" alt="">
                <p class="author-created"><i class="bi bi-clock"></i> {{author.relative_time}}</p>
            </div>
            <div class="author-content">
                <h3>{{author.name}}</h3>
                <p><i class="bi bi-pin"></i> {{author.location}}Lagos, Ikeja</p>
                <p>{{author.bio}} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis corrupti libero autem, odio ducimus hic quis amet quae saepe atque porro illum earum commodi fugiat perferendis eius cumque, vitae sit. </p>
            </div>
        </div>
        <div v-else class="data-meta">
            <div class="author-img-div align-content-center justify-content-center">
                <h3 class="tag-name font-weight-bold">{{$route.params.name}}</h3>
            </div>
            <div class="author-content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis corrupti libero autem, odio ducimus hic quis amet quae saepe atque porro illum earum commodi fugiat perferendis eius cumque, vitae sit. </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ["author"],
}
</script>
<style scoped>
    .data-meta{
        position: relative;
        background: var(--colored-featured-bg);
        padding: 1rem;
        border-radius: 1rem;
    }
    img{
        width: 125px;
        height: 125px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        margin:  0 auto;
    }
    .author-img-div{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .author-created{
        position: absolute;
        bottom: 2%;
        left: 5%;
        margin: 0;
        font-size: .75rem;
    }
    .author-content{
        padding: 1rem;
        text-align: center;
    }
    .tag-name::first-letter{
        text-transform: capitalize;
    }
    @media screen and (min-width: 768px) {
        .data-meta{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
        }    
    }
</style>