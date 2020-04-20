<template>
  <div>
    <h2>{{ currentMsg_record }}</h2>
    <JustVmodel v-model="currentMsg" />
  </div>
</template>

<script>
import JustVmodel from '@/components/VmodelComputed/JustVmodel';
export default {
  components: {
    JustVmodel
  },
  data() {
    return {
      currentMsg_record: ''
    };
  },

  created() {},
  computed: {
    currentMsg: {
      get() {
        return this.currentMsg_record ? this.currentMsg_record : '';
      },
      set(value) {
        this.currentMsg_record = value;
      }
    }
  }
};
</script>
