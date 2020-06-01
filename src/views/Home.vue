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
  </div>  
</template>

<script>
export default {
  data() {
    return {
      actor: this.$store.getters.getActor,
      actor60: this.$store.getters.getActorByAge(60),
      actor65: this.$store.getters.getActorByAge(65)
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
