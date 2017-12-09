<template lang="pug">
  a.up(href="javascript:void(0)" @click="switchFavor(item)"  v-bind:class="'has-' + item.isFavor"  title="有用")
    icon(name="arrow-up"  width="18px" alone="true")
    div {{item.favor}}
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    props: ['item'],
    methods: {
      // 切换喜欢
      switchFavor: function (item) {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'FAVOR',
          typ: 'NEWS',
          idcd: item.id
        }).then(res => {
          item.favor = res.data.amount
          item.isFavor = res.data.has
        })
      }
    }
  }
</script>

<style lang="scss">
 .up {
    display: inline-block;
    background-color: hsla(0,0%,95%,.8);
    color: #909090;
    padding: .4rem;
    width: 35px;
    border-radius: 2px;
    text-align: center;
    &.has-true {
      background-color: rgba(240, 173, 78, 0.24);
      color: #ff9b00;
    }
  }
</style>
