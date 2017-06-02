<template lang="pug">
  div.loader-box
    div.inner
      div.csshub-line-spin-fade-loader
        div(v-for="n in 8")
</template>


<style lang="scss">
  .loader-box {
    position: relative;
    height: 100px;
  }
  .inner {
    text-align: center;
    height: 70px;
    width: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -35px;
    margin-left: -35px;
  }
  .csshub-line-spin-fade-loader {
    display: inline-block;
    position: absolute;
    top: 25px;
    
  }
  @-webkit-keyframes csshub-line-spin-fade-loader {
    50% {
      opacity: 0.3; }
    100% {
      opacity: 1; 
    } 
  }

  @keyframes csshub-line-spin-fade-loader {
    50% {
      opacity: 0.3; 
    }
    100% {
      opacity: 1; 
    } 
  }


  .csshub-line-spin-fade-loader > div:nth-child(1) {
      top: 20px;
      left: 0;
      -webkit-animation: csshub-line-spin-fade-loader 1.2s -0.84s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s -0.84s infinite ease-in-out; }
  
  .csshub-line-spin-fade-loader > div:nth-child(2) {
      top: 13.63636px;
      left: 13.63636px;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
      -webkit-animation: csshub-line-spin-fade-loader 1.2s -0.72s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s -0.72s infinite ease-in-out; }
  

  .csshub-line-spin-fade-loader > div:nth-child(3) {
      top: 0;
      left: 20px;
      -webkit-transform: rotate(90deg);
              transform: rotate(90deg);
      -webkit-animation: csshub-line-spin-fade-loader 1.2s -0.6s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s -0.6s infinite ease-in-out; }
  

  .csshub-line-spin-fade-loader > div:nth-child(4) {
      top: -13.63636px;
      left: 13.63636px;
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
      -webkit-animation: csshub-line-spin-fade-loader 1.2s -0.48s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s -0.48s infinite ease-in-out; }
  

  .csshub-line-spin-fade-loader > div:nth-child(5) {
      top: -20px;
      left: 0;
      -webkit-animation: csshub-line-spin-fade-loader 1.2s -0.36s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s -0.36s infinite ease-in-out; }
  

  .csshub-line-spin-fade-loader > div:nth-child(6) {
      top: -13.63636px;
      left: -13.63636px;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
      -webkit-animation: csshub-line-spin-fade-loader 1.2s -0.24s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s -0.24s infinite ease-in-out; }
  

  .csshub-line-spin-fade-loader > div:nth-child(7) {
      top: 0;
      left: -20px;
      -webkit-transform: rotate(90deg);
              transform: rotate(90deg);
      -webkit-animation: csshub-line-spin-fade-loader 1.2s -0.12s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s -0.12s infinite ease-in-out; }
  
  .csshub-line-spin-fade-loader > div:nth-child(8) {
      top: 13.63636px;
      left: -13.63636px;
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
      -webkit-animation: csshub-line-spin-fade-loader 1.2s 0s infinite ease-in-out;
              animation: csshub-line-spin-fade-loader 1.2s 0s infinite ease-in-out; }
  
  .csshub-line-spin-fade-loader > div {
      background-color: #38b7ea;
      width: 4px;
      height: 35px;
      border-radius: 2px;
      margin: 2px;
      -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
      position: absolute;
      width: 5px;
      height: 15px; }
</style>
