<template>
  <div class="sel">
    <div class="taglist">
      <ul class="tagact">
        <li></li>
      </ul>
      <ul
        class="tagul"
        v-for="item in tagul"
        :key='item'
        (
        ref="tagul"
      >
        <li @click="add">{{item}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      tagul: ['suibian', 'whatever', 'morning', 'layle', 'fansile'],
      tagact: [],
    }
  },
  methods: {
    add: function (e) {
      console.log(e.target.text);
      var arr = [];
      // arr.push(e)
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}
.tagact {
  border-bottom: 1px solid #ccc;
}
.tagul li {
  float: left;
  padding: 5px 14px;
  border-radius: 12px;
  background-color: pink;
  color: #000;
  border: 1px solid pink;
  margin: 10px 20px;
}
</style>