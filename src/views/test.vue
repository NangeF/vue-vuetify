<template>
  <div class="test">
    <v-data-table
      :headers="userHeader"
      :items="usersList"
      :items-per-page="5"
      class="elevation"
      sort-by="calorsies"
    ></v-data-table>
    <div>
      <template></template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      userHeader: [
        { text: '序号', value: 'id' },
        { text: '用户id', value: 'userId' },
        { text: '用户名', value: 'userName' },
        { text: '年龄', value: 'age' },
        { text: '性别', value: 'sex' },
        { text: '操作', value: 'actions', sortable: false },
      ],
      usersList: [],
    }
  },
  created () {
    this.getUsersList();

  },
  mounted: {
    //相当于window.onload
  },

  methods: {
    getUsersList () {
      this.$axios.get('http://127.0.0.1:8888/api/private/v1/users').then((res) => {
        console.log(res)
        this.userList = res.data.userList
      })
    },



  }


}
</script>

<style>
</style>