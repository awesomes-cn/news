<template lang="pug">
  div.upload-box(:class="this.uploading ? 'uploading' : ''")
    input(type="file"  @change="uploadChange")
    canvas
    img.preview(:src="cdn(value, 'news')" v-show="value")
    
</template>

<script>
  import $ from '~assets/js/jquery-vendor'
  import axios from '~plugins/axios'
  let uploadImg, outer, can

  // 获取上传图片的 URL
  function getFileUrl($target) {
    var url
    if (navigator.userAgent.indexOf("MSIE")>=1) {
      url = $target[0].value
    }
    else if(navigator.userAgent.indexOf("Firefox") > 0) {
      url = window.URL.createObjectURL($target[0].files.item(0))
    }
    else if(navigator.userAgent.indexOf("Chrome") > 0) {
      url = window.URL.createObjectURL($target[0].files.item(0))
    }
      return url
    }
  export default {
    props: ['value', 'folder', 'txt', 'changeat'],
    data () {
      return {
        filepath: '',
        uploading: false
      }
    },
    watch: {
      'changeat': function () {
        this.uploadGo()
      }
    },
    methods: {
      // 选择上传图片  初始化
      uploadChange: function (event) {
        this.$emit('input', getFileUrl($(event.target)))
        this.uploading = true
        let _self = this
        outer =  $(event.target).closest('.upload-box')
        this.filepath = $(event.target).val()
        var fileList = $(event.target)[0].files[0]
        var oFReader = new FileReader()
        oFReader.readAsDataURL(fileList)
        oFReader.onload = function () {
          var img = new Image()
          img.src = oFReader.result
          uploadImg = img
          uploadImg.onload = function() {
             _self.load({}, [0, 0])
          }
        }
      },

      // 加载图片
      load: function (canArgs, cutArgs) {
        canArgs = canArgs || {}
        let _self = this
        can = outer.find('canvas')
        can.attr('width',  canArgs.w ||  uploadImg.width)
        can.attr('height', canArgs.h ||  uploadImg.height)
        var createCanvas = can[0].getContext("2d")
        cutArgs.unshift(uploadImg)
        createCanvas.drawImage.apply(createCanvas, cutArgs)
        // this.uploadGo()
      },

      // 上传
      uploadGo: async function () {
        let _self = this
        let data = can[0].toDataURL()
        data = data.split(',')[1]
        data = window.atob(data)
        let ia = new Uint8Array(data.length)
        for (let i = 0; i < data.length; i++) {
            ia[i] = data.charCodeAt(i)
        }
        let blob = new Blob([ia],{type:"image/png", endings:'transparent'})
        let fd = new FormData()
        fd.append('folder', this.folder)
        fd.append('filepath', this.filepath)
        fd.append('file', blob, data.filename)
        let res = await axios().post('upload', fd)
        this.uploading = false
        this.$emit('input', res.data.filename)
        this.$emit('submit')
      }
    }
  }
</script>


<style lang="scss" scoped>
  .upload-box {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      cursor: pointer;
      opacity: 0;
      z-index: 10;
      display: block;
      width: 100%
    }

    &.uploading {
      input[type="file"] {
        z-index: -100
      }
    }

    .txt {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    canvas {
      display: none;
    }

    .preview {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
