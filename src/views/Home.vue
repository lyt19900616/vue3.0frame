<template>
  <div>
    <div class="list-title">获取演员</div>
    <span class="list-con"
      v-for="(item, index) in actor" :key="index"
      >
      {{item.name}}
    </span>
    <div class="list-title">获取大于60岁的演员</div>
    <span class="list-con"
      v-for="(item, index) in actor60" :key="index + '60'"
      >
      {{item.name}}
    </span>
    <div class="list-title">获取大于65岁的演员</div>
    <span class="list-con"
      v-for="(item, index) in actor65" :key="index + '65'"
      >
      {{item.name}}
    </span>
    <van-uploader :after-read="afterRead" />
    <van-field name="uploader" label="照片上传" required>
      <template #input>
        <van-uploader
        v-model="uploader"
        capture='camera'
        multiple
        :max-count="3"
        preview-size = "60px"
        @delete="deleteImg"
        :before-read="beforeRead"
        :after-read="afterRead"
        />
      </template>
    </van-field>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      uploader: [],
      actor: this.$store.getters.getActor,
      actor60: this.$store.getters.getActorByAge(60),
      actor65: this.$store.getters.getActorByAge(65)
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    beforeRead (file) {
      console.log(file);
    },
    deleteImg () {

    }
  },
}
</script>
<style scoped>
.list-title {
  padding: 10px;
  color: var(--themeColor);
  font-size: 1rem;
  border-bottom: 1px dashed var(--themeColor);
}
.list-con {
  display: inline-block;
  margin: 10px;
  color: var(--subBlack);
}

</style>
