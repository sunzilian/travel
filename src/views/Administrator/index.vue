<template>
  <div class="admin">
    <!-- admin -->
    <h3>欢迎您回来</h3>
    <el-form
      :model="administratorForm"
      status-icon
      :rules="rules"
      ref="administratorForm"
      label-width="100px"
      class="administrator-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="administratorForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="administratorForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('administratorForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('administratorForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'administrator',
  data() {
    let usernameCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'));
      }
      callback();
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.administratorForm.checkPass !== "") {
          this.$refs.administratorForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      errorMessage: '',
      administratorForm: {
        username: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        username: [{validator: usernameCheck, trigger: 'blur'}],
        pass: [{ validator: validatePass, trigger: 'blur' }]
      }
    };
  },
  components: {
    // HelloWorld
  },
  mounted() {
    this.$api.exampleModule.getExample().then(res => {
      console.log(res);
    });
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid, this);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
          // this.errorMessage="错误提示"
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style lang="stylus">
.admin
  width 100%
  // margin-top 200px
  display inline-block

.administrator-form
  width 30%
  margin auto
  min-width 400px
</style>
