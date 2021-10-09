<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <card-add :listIndex="listIndex" />
  </div>
</template>

<script>
import CardAdd from './CardAdd'

export default {
  components: {
    CardAdd
  },
  props: {
    title: {
      // 文字列指定
      type: String,
      // 必ず受け取る
      required: true
    },
    listIndex: {
      // 整数指定
      type: Number,
      // 必ず受け取る
      required: true
    }
  },
  methods: {
    // 削除する
    removeList: function() {
      if(confirm('本当にこのリストを削除しますか？')){
        // index.jsのremovelistを呼び出す
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
  }
}
</script>
