<template>
  <div class="slotch-container">
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="userHeader"
      :items="userList"
      :items-per-page="5"
      :search="search"
      class="elevation"
    ></v-data-table>

    <v-data-table
      :headers="userHeader"
      :items="goodList"
      :items-per-page="5"
      :search="search"
      class="elevation"
    ></v-data-table>

    <!-- <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template> -->

    div.list{标题}>ul>li.list${链接$}*5
    <div ref="box">
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import '../mock/mock.js'

export default {
  name: 'slotch',
  data: () => {
    return {
      search: '',
      userHeader: [
        { text: '序号', value: 'id' },
        { text: '用户id', value: 'userId' },
        { text: '用户名', value: 'userName' },
        { text: '年龄', value: 'age' },
        { text: '性别', value: 'sex' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      userList: [],
      goodList: []
    }


  },
  created () {
    this.getUserList(),
      this.getGoodList()
    // this.getBoxLength()

  },

  methods: {
    getUserList () {
      this.$axios.get('https://www.test.com').then((res) => {
        console.log(res)
        this.userList = res.data.userList
      })
    },
    getGoodList () {
      this.$axios.get('https://www.goodtest.com').then((res) => {
        console.log(res)
        this.goodList = res.data.goodList
      })
    },

    isEnabled (slot) {
      return this.enabled === slot
    },
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },
}
</script>

<style>
</style>