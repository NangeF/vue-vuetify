<template>
  <div class="repo">
    <div class="repo-container">
      <v-form>
        <div class="form_item"><label for="">模板</label>
          <div class="selmuban">+</div>
          <button class="opensjgj">打开设计工具</button>
        </div>
        <div class="form_item"><label for="">报表名称</label><input type="text"></div>
        <div class="form_item"><label for="">业态</label><input type="text"></div>
        <div class="form_item"><label for="">发布权限</label>
          <v-radio-group>
            <v-radio
              v-for="n in nlist"
              :key="n"
              :label="`${n}`"
              :value="n"
              @click='Periodicity'
            ></v-radio>
          </v-radio-group>
        </div>
        <div class="form_item"><label for="">主题</label><input type="text"></div>
        <div class="form_item"><label for="">标签</label><input type="text"></div>
        <div class="form_item"><label for="">报表类型</label><input type="text"></div>
        <div class="form_item"><label for="">周期性报表</label>
          <!-- <v-radio-group>
            <v-radio
              v-for="m in mlist"
              :key="m"
              :label="`${m}`"
              :value="m"
            ></v-radio>
          </v-radio-group> -->
          <span @click.stop="dialog = true">是</span><span>否</span>
        </div>
        <div class="form_item"><label for="">说明</label><textarea
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea></div>
        <div class="form_item"><label for="">发布部门</label><input type="text"></div>
        <div class="form_item"><label for="">发布人</label><input type="text"></div>
        <div class="form_item"><label for="">发布时间</label><input type="text"></div>

      </v-form>

      <v-dialog
        v-model="dialog"
        max-width="600px"
      >

        <v-card>
          <v-card-title>
            <span class="headline">xuanzezhouqi</span>
          </v-card-title>

          <v-card-text>
            <div class="seled">
              <span>xian</span>
              <span>shi</span>
              <span>de</span>
              <span>biao</span>
              <span>qian</span>
            </div>
            <div class="selin">
              <span>sui</span>
              <span>bian</span>
              <span>la</span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >取消</v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >确认</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'repo',
  data () {
    return {
      nlist: ['公开', '自定义'],
      mlist: ['是', '否'],
      dialog: false,
    }
  },
  methods: {
    Periodicity () {
    }
  }
}
</script>

<style>
.form_item {
  line-height: 45px;
  display: flex;
  /* height: 45px; */
  margin-bottom: 12px;
}
.form_item label {
  display: block;
  width: 20%;
  text-align: right;
  line-height: 30px;
}
.form_item .selmuban {
  width: 30%;
  height: 40px;
  border: 1px solid #ccc;
  font-size: 20px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 30px;
  line-height: 40px;
}
.form_item .opensjgj {
  width: 120px;
  height: 30px;
  line-height: 30px;
  background-color: cadetblue;
  color: #fff;
  border: 1px solid cadetblue;
  border-radius: 12px;
  font-size: 14px;
}
.form_item input {
  width: 40%;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
  display: inline-block;
  margin-left: 30px;
}
.form_item span {
  padding: 0px 30px;
  border: 1px solid #ccc;
  margin: 30px;
  line-height: 30px;
}
.form_item textarea {
  width: 40%;
  height: 120px;
  line-height: 30px;
  border: 1px solid #ccc;
  margin-left: 30px;
}
</style>