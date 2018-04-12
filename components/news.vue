<template lang="pug">
  div.repo-news
    template(v-if="newss.length > 0")
      div.news-item(v-for="item in newss")
        div.left
          a.up(href="javascript:void(0)" @click="switchFavor(item)"  v-bind:class="'has-' + item.isFavor"  title="有用")
            icon(name="arrow-up"  width="18px" alone="true")
            div(v-if="item.favor > 0") {{item.favor}}
            div(v-else) 無
          
        div.middle
          article(v-html="marked(item.con)")
          img.img-con(:src="cdn(item.picture, 'news')" v-if="item.picture" @click="zoomBig(cdn(item.picture, 'news'))")
          div.infos
            nuxt-link(:to="/mem/ + item.mem.id" class="tx-wrap")
              img.tx(:src="cdn(item.mem.avatar, 'mem', 'repo-50')")
            
            a.up(href="javascript:void(0)" @click="switchFavor(item)"  v-bind:class="'has-' + item.isFavor" title="有用")
              icon(name="arrow-up"  width="18px" alone="true") {{item.favor}}
            
            span  {{timeago(item.created_at)}}

            a(href="javascript:void(0)" @click="item.isShowCom = !item.isShowCom"  title="评论")
              icon(name="comment"  width="16px") {{item.comment}} 评论

            a(href="javascript:void(0)" title="收藏" @click="switchCollect(item)"  v-bind:class="'collected-' + item.isCollect")
              icon(name="star"  width="16px" v-if="!item.isCollect")
              icon(name="star_fill" width="16px" v-else)

            nuxt-link(:to="'/news/' + item.id + '/share'" class="admin-oper" title="分享")
              icon(name="share"  width="16px")

            template(v-if="session && session.id === item.mem.id")

              a.admin-oper(href="javascript:void(0)" @click="destroy(item)"  title="删除")
                icon(name="trash"  width="16px")

              nuxt-link(:to="'/pub?id=' + item.id" class="admin-oper" title="编辑")
                icon(name="pen"  width="14px")
            
          div.com-wrap(v-if="item.isShowCom")
            comment(:flag="'news-comment-' + flag + '-' + item.id" typ="NEWS" v-bind:idcd="item.id")
        div.right
          nuxt-link(:to="/mem/ + item.mem.id")
            img.tx(:src="cdn(item.mem.avatar, 'mem', 'repo-50')")
          a.comm-bage(href="javascript:void(0)" @click="item.isShowCom = !item.isShowCom"  title="评论" v-show="item.comment > 0") {{item.comment}} 
      pub(:isshow="ishowPub" action="edit" v-bind:editem="editItem")
      lightbox(:show="isShowLightBox" v-bind:src="lightboxSrc" v-bind:hide="zoomSmall")
    template(v-else)
      div.noitem
        h1 無
</template>


<script>
  import Comment from '~/components/comment.vue'
  import Lightbox from '~/components/lightbox.vue'
  import axios from '~/plugins/axios'
  import Pub from '~/components/pub'
  export default {
    props: ['newss', 'flag'],
    data () {
      return {
        ishowPub: 1,
        editItem: {},
        favorIDs: [],
        isShowLightBox: false,
        lightboxSrc: ''
      }
    },
    components: {
      Comment,
      Pub,
      Lightbox
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
      // 切换收藏
      switchCollect: function (item) {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'COLLECT',
          typ: 'NEWS',
          idcd: item.id
        }).then(res => {
          item.isCollect = res.data.has
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
      },
      // 放大图片
      zoomBig: async function (picture) {
        this.isShowLightBox = true
        this.lightboxSrc = picture
      },
      zoomSmall: function () {
        this.isShowLightBox = false
      }
    }
  }
</script>


<style lang="scss">
.repo-news {
  // padding: 30px;
  @media (max-width: 576px) {
    padding: 15px;
  }
  .news-item {
    background-color: #FFF;
    padding: 35px 28px;
    padding-left: 25px;
    display: flex;
    // align-items: flex-start;
    box-shadow: 0px 0px 3px rgba(221, 221, 221, 0.2);
    margin-bottom: 20px;
    border-bottom: #f8f9f9 1px solid;
    border-radius: 4px;

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
      // overflow: hidden;
      padding-left: 10px;

      .img-con {
        max-width: 80%;
        margin-bottom: 20px;
        cursor: zoom-in;
      }
    }

    .right {
      width: 70px;
      text-align: right;
      flex-shrink: 0;
      position: relative;
      @media (max-width: 576px) {
        display: none;
      }

      .tx {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-right: 5px;
      }

      .comm-bage {
        display: inline-block;
        color: #fff;
        font-size: 12px;
        display: inline-block;
        background-color: #3e9ef1;
        padding: 2px 7px;
        border-radius: 100px;
        position: absolute;
        top: -10px;
        right: -12px;
        border: 2px solid #fff;
        opacity: 0.9
      }
    }


    &:last-child {
      border: none;
    }

    article {
      font-size: 1.2rem;
      line-height: 28px;
      a {
        color: #025aa5;
        border-bottom: #025aa5 1px dashed;
      }
      table {
        border: 1px solid #eceeef;
        width: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
        border-collapse: collapse;
        th, td {
          vertical-align: bottom;
          border-bottom-width: 2px;
          border: 1px solid #eceeef;
          padding: .75rem;
        }
        th {
          border-bottom: 2px solid #eceeef;
        }
        tbody tr:nth-of-type(odd) {
        }
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

    a {
      color: #a9afb9;

      &.collected-true {
        color: #82888c;
      }
    }

    & > span, & > a {
      margin-right: 15px;
      display: flex;
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
      display: none;

      @media (max-width: 576px) {
        display: inline-block;
      }
    }
    
  }

  .com-wrap {
    padding-top: 20px;
    // padding-left: 20px;
  }
}

.noitem {
  color: #e8ece6;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  h1 {
    font-size: 100px;
  }
}
</style>
