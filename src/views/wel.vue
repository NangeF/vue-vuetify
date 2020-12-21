
<template>
  <div class="home-container">
    <div class="wel">
      <grid-layout
        :layout.sync="layout"
        :col-num="4"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[5, 5]"
        :use-css-transforms="true"
      >

        <grid-item
          class="table"
          v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >
          {{item.i}}
        </grid-item>
      </grid-layout>
    </div>
    <div class="list">
      <h3>标题</h3>
      <ul
        v-for="item in lists"
        :key="item.id"
      >
        <li
          class="list"
          @click="selectTable"
        >{{item.text}}</li>

      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueGridLayout from 'vue-grid-layout'
Vue.use(VueGridLayout)

var testLayout = [
  { "x": 0, "y": 0, "w": 2, "h": 3, "i": "1" },
  { "x": 2, "y": 0, "w": 2, "h": 3, "i": "2" },
  { "x": 0, "y": 2, "w": 2, "h": 3, "i": "3" },
  { "x": 2, "y": 2, "w": 2, "h": 3, "i": "4" },
];

var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;
export default {
  name: 'wel',
  components: {
    GridLayout,
    GridItem,
  },
  data: function () {
    return {
      layout: testLayout,
      lists: [
        { text: "链接1", value: 'hrf1', id: 1 },
        { text: "链接2", value: 'hrf2', id: 2 },
        { text: "链接3", value: 'hrf3', id: 3 },
        { text: "链接4", value: 'hrf4', id: 4 },
        { text: "链接5", value: 'hrf5', id: 5 }
      ],
    };
  },
  mounted: {

  },
  methods: {
    selectTable () {

    }
  }
}
</script>

<style>
.home-container {
  display: flex;
}
.wel {
  flex: 6;
}
.list {
  flex: 2;
}

.table {
  background-color: pink;
}
</style>