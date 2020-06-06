<template>
  <div class="register">
    <h3 v-if="isRegitster">
      欢迎注册网站会员
    </h3>
    <el-form
      :model="registerForm"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="register-form"
    >
      <el-form-item label="账号" prop="account">
        <el-input
          type="text"
          v-model="registerForm.account"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="nickName">
        <el-input
          type="text"
          v-model="registerForm.nickName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item v-if="isRegitster" label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="registerForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="registerForm.sex" :label="true">男</el-radio>
        <el-radio v-model="registerForm.sex" :label="false">女</el-radio>
      </el-form-item>
      <el-form-item label="喜好">
        <!-- <el-radio v-model="registerForm.love" label="1">购物</el-radio>
        <el-radio v-model="registerForm.love" label="2">旅游</el-radio> -->
        <el-radio v-for="item in registerForm.loveList" :key="item.id" v-model="registerForm.love" :label="item.id">{{item.name}}</el-radio>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model="registerForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="邮箱" prop="email">
        <el-input
          type="email"
          v-model="registerForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')"
          >提交</el-button
        >
        <el-button v-if="isRegitster" @click="resetForm('registerForm')">重置</el-button>
        <el-button v-else @click="handleCancel('registerForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  data() {
    let nickName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      callback();
    };

    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let phone = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/;
        if (!value) {
          return callback(new Error('电话号码不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(+value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (phoneReg.test(value)) {
              callback()
            } else {
              callback(new Error('电话号码格式不正确'))
            }
          }
        }, 100)
    };
    return {
      registerForm: {
        account: '',
        nickName: '',
        password: '',
        checkPass: '',
        sex: '1',
        loveList: [
          {
            id: 0,
            name: '风景'
          },
          {
            id: 1,
            name: '山水'
          },
          {
            id: 2,
            name: '古迹'
          },
          {
            id: 3,
            name: '室内'
          }
        ],
        love: '',
        phone: '',
        email: ''
      },
      rules: {
        nickName: [{ validator: nickName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        phone: [{ validator: phone, trigger: 'blur'}],
        email: [
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
          ]
      },
      isRegitster: this.$route.query.isRegister,
      allInfo: {}
    };
  },
  components: {
    // HelloWorld
  },
  created() {
    if (!this.isRegitster) {
      // this.$set(this.registerForm, 'sex', true)
      // this.$set(this.registerForm, 'account','admin')
      // this.$set(this.registerForm, 'love', 2)
      // this.$set(this.registerForm, 'password', '123456')
      // this.$set(this.registerForm, 'nickName', '昵称')
      // this.$set(this.registerForm, 'phone', '18356455241')
      // TODO:
      this.$api.get({
        url: '/user/getUser',
        data: {
          id: window.localStorage.getItem('userId')
        }
      })
      .then(({success, data}) => {
        console.log(data);
        if (success) {
          console.log(data);
          // this.registerForm = data;
          this.$set(this.registerForm, 'sex', data.sex)
          this.$set(this.registerForm, 'account', data.account)
          this.$set(this.registerForm, 'love', data.love)
          this.$set(this.registerForm, 'password', data.password)
          this.$set(this.registerForm, 'nickName', data.nickName)
          this.$set(this.registerForm, 'phone', data.phone)
          this.allInfo = data
        }
      })
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid, this.registerForm, 76446);
          if (this.isRegitster) {
            this.registerUser()
          }
          else {
            this.updateUser()
          }
          
        } else {
          this.$message.error('请检查下各项信息')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    registerUser() {
      this.$api.post({
        url: '/user/register',
        data: this.registerForm
      }).then(({success, msg}) => {
        if (success) {
          this.$message.success('注册成功');
          setTimeout(() => {
            this.$router.push('administrator');
          }, 10);
        }
        else {
          this.$message.error(msg)
        }
      }, ({msg}) => {
        this.$message.error(msg)
      })
    },
    updateUser() {
      this.$api.post({
        url: '/user/update',
        data: {
          ...this.allInfo,
          ...this.registerForm
          }
      }).then(({success, msg}) => {
        if (success) {
          this.$message.success('更新成功');
        }
        else {
          this.$message.error(msg)
        }
      }, ({msg}) => {
        this.$message.error(msg)
      })
    },
    handleCancel() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="stylus" scoped>
.register
  width 100%
.register-form
  width 40%
  margin 30px auto
  overflow hidden
</style>