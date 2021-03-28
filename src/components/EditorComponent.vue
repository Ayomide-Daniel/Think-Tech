<template>
<div>
    <div class="container">
        <form>
            <div class="form-group row">
                <label for="inputName" class="col-sm-1-12 col-form-label">Title</label>
                <div class="container">
                    <div class="col-sm-1-12">
                        <input type="text" class="form-control" name="inputName" id="inputName" placeholder="" v-model="form.title">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputName" class="col-sm-1-12 col-form-label">Category</label>
                <div class="container">
                    <div class="col-sm-1-12">
                        <select class="form-control">
                            <option></option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputName" class="col-sm-1-12 col-form-label">Body</label>
                <div class="container">
                    <div class="col-sm-1-12">
                        <editor id="admin-content" v-model="form.body"
                        api-key="cpi1dtbgs3hio5uf1etl7rpe084f0ar5k3a9s7v2vb8p0uig"
                        :init="{
                            height: 500,
                            menubar: false,
                            plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                        }"
                        />
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button class="btn btn-primary" @click.prevent="submitArticle">SAVE ARTICLE</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
    data() {
        return {
            form:{
                title: '',
                category: '',
                body: '',
            }
        }
    },
    components: {
        'editor': Editor
    },
    methods: {
        submitArticle(){
            console.log(this.form);
        }
    },
}
</script>

<style scoped>

</style>
