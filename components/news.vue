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
          nuxt-link(:to="/mem/ + item.mem.id" class="tx-wrap")
            img.tx(:src="cdn(item.mem.avatar, 'mem')")
          
          a.up(href="javascript:void(0)" @click="switchFavor(item)"  v-bind:class="'has-' + item.isFavor")
            icon(name="arrow-up"  width="18px" alone="true") {{item.favor}}

          a(href="javascript:void(0)" @click="item.isShowCom = !item.isShowCom")
            icon(name="comment"  width="16px") {{item.comment}} 条评论
          span  {{timeago(item.created_at)}}

          template(v-if="session && session.id === item.mem.id")
            a.admin-oper(href="javascript:void(0)" @click="destroy(item)")
              icon(name="trash"  width="16px")

            a.admin-oper(href="javascript:void(0)")
              icon(name="pen"  width="14px")
          
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
    computed: {
      session () {
        return this.$store.state.session
      }
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
      },
      // 删除
      destroy: function (item) {
        if (!confirm('确定删除该情报？')) {
          return
        }
        axios().delete(`news/${item.id}`
        ).then(res => {
          let index = this.newss.indexOf(item)
          this.newss.splice(index, 1)
          this.$alert('success', '删除情报成功')
        })
      }
    }
  }
</script>


<style lang="scss">
  .repo-news {
    background-color: #FFF;
  
    .news-item {
      background-color: #FFF;
      padding: 30px 0;
      display: flex;
      align-items: flex-start;

      &:hover {
        .admin-oper {
          display: inline-block;
        }
      }

      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50px;
        flex-shrink: 0;
        @media (max-width: 576px) {
          display: none;
        }
      }

      .middle {
        flex-grow: 1;
        overflow: hidden;
      }

      .right {
        width: 70px;
        text-align: right;
        flex-shrink: 0;
        @media (max-width: 576px) {
          display: none;
        }

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
        a {
          color: #025aa5;
          border-bottom: #025aa5 1px dashed;
        }
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

      .admin-oper {
        display: none;
      }

      .tx-wrap {
        display: none;
        .tx {
          width: 20px;
          height: 20px;
          border-radius: 100%;
        }

        @media (max-width: 576px) {
          display: inline-block;
        }
      }

      a.up {
        padding: .2rem;
        
      }

      
    }

    .com-wrap {
      padding-top: 20px;
      padding-left: 20px;
    }
  }
  
</style>
