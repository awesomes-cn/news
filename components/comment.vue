<template lang="pug">
  div.comment-wraper
    div.editor-go
      div.emoji-wrap
        a.emoji-btn(href="javascripot: void(0)" @click.stop="showEmbox = true") 😜
        div.emoji-box(v-show="showEmbox")
          a.emoji-item(v-for="item in emojis" href="javascript: void(0)" @click.stop="insertEmoji(item)") {{item}}
      editor(:flag="flag"  v-model="comcon"  v-bind:setval="setval" placeholder="我有话说" v-if="isShowEditor")
      button.sub-btn(@click="submit" v-bind:disabled="isSubmiting") {{subMap[editing ? 'edit' : 'new'][isSubmiting ? 'ing' : 'ready']}}
    div.citem(v-for="(item, index) in coms")
      nuxt-link(:to="'/mem/' + item.mem.id")
        img.mem-tx(:src="cdn(item.mem.avatar, 'mem', 'repo-50')")
        strong {{item.mem.nc}}
      span.time {{timeago(item.created_at)}}
      article(v-html="processAt(marked(item.con))")
      div.opers
        a.up(href="javascript:void(0)" @click="switchFavor(item)" v-bind:class="'has-' + item.isFavor")
          icon(name="arrow-up") {{item.favor}}

        a(href="javascript:void(0)" @click="reply(item, $event)")
          icon(name="reply" ) 回复

        a.extra(href="javascript:void(0)" @click="edit(item, $event)" v-if="session && item.mem.id == session.id")
          span 编辑

        a.extra(href="javascript:void(0)" @click="destroy(item, index)"  v-if="session && item.mem.id == session.id")
          span 删除  
</template>
<script>
  import axios from '~/plugins/axios'
  import $ from 'jquery'
  export default {
    props: ['flag', 'typ', 'idcd'],
    data () {
      return {
        coms: [],
        comcon: '',
        isSubmiting: false,
        editing: null,
        setval: {
          time: Date.now(),
          val: ''
        },
        subMap: {
          new: {
            ready: '提交',
            ing: '提交中...'
          },
          edit: {
            ready: '更新评论',
            ing: '更新中...'
          }
        },
        showEmbox: false,
        isShowEditor: false,
        emojis: ['😜', '😀', '😂', '🤣', '😄', '😊', '😍', '😋', '😘', '😙', '😛', '😜', '🤓', '😎', '🤡', '🙄', '😠', '💩', '😧', '😭', '💤', '👏', '👍', '👎', '🙌', '👌', '🤝', '🙏', '📢', '💗', '💔', '💐']
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      setEditVal: function (val) {
        this.setval = {
          time: Date.now(),
          val: val,
          mode: 'set'
        }
      },
      insertEditVal: function (val) {
        this.setval = {
          time: Date.now(),
          val: val,
          mode: 'insert'
        }
      },

      // 插入表情
      insertEmoji: function (emoji) {
        this.insertEditVal(emoji)
      },

      // 获取评论列表
      list: function () {
        if (this.idcd && this.idcd > 0) {
          axios().get(`comment?typ=${this.typ}&idcd=${this.idcd}`).then(res => {
            let data = res.data.items
            this.coms = data
          })
        }
      },

      // 发布评论
      submit: function () {
        if (this.showLogin()) {
          return
        }

        if (this.comcon.trim() === '') {
          return
        }

        this.isSubmiting = true
        this.editing ? this.update() : this.save()
      },

      // 新增评论
      save: async function () {
        let res = await axios().post(`comment`, {
          typ: this.typ,
          idcd: this.idcd,
          con: this.comcon
        })
        this.$alert('success', '发布评论成功！')
        this.coms.push(res.data.item)
        this.setEditVal('')
        this.isSubmiting = false
      },

      // 更新评论
      update: async function () {
        await axios().put(`comment/${this.editing.id}`, {
          con: this.comcon
        })
        this.$alert('success', '更新评论成功！')
        this.editing.con = this.comcon
        this.setEditVal('')
        this.isSubmiting = false
        this.editing = null
      },

      // 删除评论
      destroy: function (item, index) {
        let self = this
        if (confirm('确认删除该评论？')) {
          axios().delete(`comment/${item.id}`).then(res => {
            if (res.data.status) {
              this.$alert('success', '删除评论成功！')
              self.coms.splice(index, 1)
            }
          })
        }
      },

      // 滚到编辑器
      scrollToEditor: function (event) {
        $('html,body').animate({scrollTop: $(event.target).closest('.comment-wraper').find('.editor-go').offset().top - 100})
      },

      // 编辑
      edit: function (item, event) {
        this.scrollToEditor(event)
        this.editing = item
        this.setEditVal(item.con)
      },

      // 取消编辑
      cancelEditing: function () {
        this.editing = null
        this.setEditVal('')
      },

      // 回复
      reply: function (item, event) {
        this.scrollToEditor(event)
        this.insertEditVal(this.comcon + `@${item.mem.nc} `)
      },

      // 处理 @
      processAt: function (con) {
        return con.replace(/@([^:：?\s@]+)/g, '<a href="#" class="ata">@$1</a>')
      },

      switchFavor: function (item) {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'FAVOR',
          typ: 'COMMENT',
          idcd: item.id
        }).then(res => {
          item.favor = res.data.amount
          item.isFavor = res.data.has
        })
      }
    },
    watch: {
      'idcd': function () {
        this.list()
      }
    },
    components: {
      editor: () => import('~/components/editor.vue')
    },
    mounted () {
      this.list()
      let _self = this
      $('body').click(function () {
        _self.showEmbox = false
      })
    },
    async created () {
      this.isShowEditor = true
    }
  }
</script>

<style lang="scss" scoped>
  .citem {
    position: relative;
    padding-left: 35px;
    margin-bottom: 30px;

    &:hover {
      .opers .extra {
        display: inline-block;
      }
    }

    .time {
      color: #ababab;
      margin-left: 10px;
    }

    .opers {
      a {
        color: #DDD;
        display: inline-block;
        margin-right: 10px;

        &.up {
          background-color: hsla(0,0%,95%,.8);
          color: #909090;
          padding: .2rem .2rem;
          padding-right: .5rem;
          border-radius: 2px;

          &.has-true {
            background-color: rgba(240, 173, 78, 0.24);
            color: #ff9b00;
          }
        }
      }
      svg {
        width: 15px;
        height: 15px;
        float: left;
        margin-right: 3px;
      }

      .extra {
        display: none
      }
    }
  }

  .editor-go {
    margin-bottom: 40px;
    position: relative;
    display: flex;
    align-items: flex-start;

    .meditor {
      flex-grow: 1;
      margin: 0 8px;
    }

    .emoji-wrap {
      position: relative;
      padding-top: 5px;
    }

    .emoji-btn {
      font-size: 20px;
    }

    .emoji-box {
      position: absolute;
      top: 50px;
      background-color: #FFF;
      display: flex;
      font-size: 20px;
      flex-wrap: wrap;
      width: 315px;
      z-index: 10;
      padding: 20px;
      border-radius: 2px;
      left: -15px;
      box-shadow: 0px 0px 10px #DDD;
      box-sizing: content-box;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        left: 20px;
        width: 20px;
        height: 20px;
        border: #EEE 1px solid;
        z-index: -1;
        transform: rotate(45deg);
        border-top-left-radius: 5px;
        background-color: #FFF;
        border-bottom: 0;
        border-right: 0;
      }

      .emoji-item {
        border: #e8e8e8  1px solid;
        margin: -1px 0 0 -1px;
        width: 40px;
        height: 40px;
        align-items: center;
        display: flex;
        justify-content: center;

        &:hover {
          border: 1px solid #eb7350;
          background: #fff9ec;
          z-index: 2;
          font-size: 22px;
        }
      }
    }
  }

  article {
    margin: 10px 0;
  }

  .sub-btn {
    border: none;
    color: #FFF;
    background-color: #da552f;
    padding: 10px 20px;
    cursor: pointer;
  }

  .cancel-edit {
    margin-left: 10px;
    color: #da552f;
  }

  
  .mem-tx {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 5px;
  }

  

  
</style>
