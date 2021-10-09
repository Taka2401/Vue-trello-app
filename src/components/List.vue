<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <card v-for="(item, index) in cards"
            :body="item.body"
            :key="item.id"
            :cardIndex="index"
            :listIndex="listIndex"
      />
      <card-add :listIndex="listIndex" />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardAdd from './CardAdd'
import Card from './Card'

export default {
  components: {
    CardAdd,
    Card,
    draggable
  },
  props: {
    title: {
      // 文字列指定
      type: String,
      // 必ず受け取る
      required: true
    },
     cards: {
      type: Array,
      required: true
    },
    listIndex: {
      // 整数指定
      type: Number,
      // 必ず受け取る
      required: true
    }
  },
  computed: {
    totalCardInList() {
      return this.cards.length
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
