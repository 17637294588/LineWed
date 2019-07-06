<template>
    <div id="uploads">

        <input type="file" @change="getFile($event)" />
        <button @click="upload">上传</button>
    

        </div>

</template>
<script>
export default {
    data:function(){
        return{
            upath:""
        }
    },
    methods: {
        getFile: function (even) {
            this.upath = event.target.files[0];
            },
            upload:function(){
                var zipFormData = new FormData();
                zipFormData.append('file', this.upath)

                this.axios({
                url:'http://127.0.0.1:8000/api/upload_file/',
                method:'post',
                data:zipFormData
                }).then(res=>{
                    console.log(res.data)
               
                }).catch(error=>{
                    console.log(error)
            })
            }

    },
}
</script>