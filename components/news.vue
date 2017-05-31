<template lang="pug">
  div.repo-news
    div.news-item(v-for="item in newss")
      div.left
        a.up(href="javascript:void(0)" @click="switchFavor(item)"  v-bind:class="'has-' + item.isFavor")
          icon(name="arrow-up"  width="18px" alone="true")
          div {{item.favor}}
        
      div.middle    
        article(v-html="marked(item.con)")
        div.infos
          a(href="javascript:void(0)" @click="item.isShowCom = !item.isShowCom")
            icon(name="comment"  width="16px") {{item.comment}} 条评论
          span  {{timeago(item.created_at)}}
        
        div.com-wrap(v-if="item.isShowCom")
          comment(:flag="'news-comment-' + flag + '-' + item.id" typ="NEWS" v-bind:idcd="item.id")
      div.right
        nuxt-link(:to="/mem/ + item.mem.id")
          img.tx(:src="cdn(item.mem.avatar, 'mem')")

</template>


<script>
  import Comment from '~components/comment.vue'
  import axios from '~plugins/axios'
  export default {
    props: ['newss', 'flag'],
    components: {
      Comment
    },
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


<style lang="scss" scoped>
  .repo-news {
    background-color: #FFF;
  }
  
  .news-item {
    background-color: #FFF;
    padding: 30px 0;
    display: flex;
    align-items: flex-start;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;
      flex-shrink: 0
    }

    .middle {
      flex-grow: 1;
    }

    .right {
      width: 70px;
      text-align: right;
      flex-shrink: 0;

      .tx {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-right: 5px;
      }
    }


    &:last-child {
      border: none;
    }
    article {
      font-size: 1.2rem;
      line-height: 28px;
      padding-left: 10px;
      // border-left: #DDD 5px solid;
    }
    

    a.up {
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
  }

  .article-w {
    padding: 0 10px;
  }

  .infos {
    color: #a9afb9;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;


    a {
      color: #a9afb9;
    }

    & > span, & > a {
      margin-right: 15px;
    }
  }

  .com-wrap {
    padding-top: 20px;
    padding-left: 20px;
  }
</style>
