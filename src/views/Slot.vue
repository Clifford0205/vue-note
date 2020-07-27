<template>
  <div>
    <ChildrenComponent>
      <h2 slot="title">{{ title }}</h2>
      <p slot="text">I am the paragraph text</p>

      <div slot="form-header">
        <h3>這是表單的標題</h3>
        <p>表單資訊</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="name" />
        <input type="password" placeholder="password" required />
      </div>

      <div slot="form-controls">
        <button :click="handleSubmitgit pull">Submit</button>
      </div>
    </ChildrenComponent>
  </div>
</template>

<script>
import ChildrenComponent from '@/components/Slot/ChildrenComponent';
export default {
  components: {
    ChildrenComponent
  },
  data() {
    return {
      title: 'I am a dynamic title slot title'
    };
  },
  methods: {}
};
</script>
