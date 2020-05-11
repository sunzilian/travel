<template>
  <div class="recommend">
      recommend
      <quill-editor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      content: 'sssssssss',
      editorOption: {
        
      }
    }
  },
  components: {
    // HelloWorld
  },
  mounted() {
    this.$api.exampleModule.getExample().then(res => {
      console.log(res);
    })
  },
  methods: {
    onEditorBlur(event) {
      console.log(event, this.content);
    },
    onEditorFocus() {
      console.log('focus');
    },
    onEditorReady() {
      console.log('ready');
    }
  },
}
</script>
