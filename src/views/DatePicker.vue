<template>
  <div>
    <!-- <VueDatePicker
      v-model="date"
      min-date="2014-3"
      max-date="2040-3"
      type="quarter"
      :range="true"
      range-header-text="起始 %d 結束 %d"
      range-input-text="起始 %d 結束 %d"
    ></VueDatePicker> -->

    <VueDatePicker
      v-model="date"
      :min-date="minDate"
      :max-date="maxDate"
      :range-presets="presets"
      placeholder="Début - Fin"
      range
      fullscreen-mobile
      validate
    />
  </div>
</template>

<script>
// export default {
//   components: {},
//   data() {
//     return {
//       dateRange: '',
//       date: 2019 - 2
//     };
//   },
//   methods: {}
// };

export default {
  data: () => ({
    date: new Date(),
    currentDate: new Date()
  }),
  computed: {
    minDate() {
      return new Date(
        this.currentDate.getFullYear() - 1,
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      );
    },
    maxDate() {
      return new Date(
        this.currentDate.getFullYear() + 1,
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      );
    },
    presets() {
      return [
        {
          name: 'This year',
          dates: {
            start: new Date(this.currentDate.getFullYear(), 0, 1),
            end: new Date(this.currentDate.getFullYear(), 11, 31)
          }
        },
        {
          name: 'Last year',
          dates: {
            start: new Date(this.currentDate.getFullYear() - 1, 0, 1),
            end: new Date(this.currentDate.getFullYear() - 1, 11, 31)
          }
        },
        {
          name: 'Next year',
          dates: {
            start: new Date(this.currentDate.getFullYear() + 1, 0, 1),
            end: new Date(this.currentDate.getFullYear() + 1, 11, 31)
          }
        },
        {
          name: 'Last month',
          dates: {
            start: new Date(
              this.currentDate.getFullYear(),
              this.currentDate.getMonth() - 1,
              1
            ),
            end: new Date(
              this.currentDate.getFullYear(),
              this.currentDate.getMonth(),
              0
            )
          }
        },
        {
          name: 'This month',
          dates: {
            start: new Date(
              this.currentDate.getFullYear(),
              this.currentDate.getMonth(),
              1
            ),
            end: new Date(
              this.currentDate.getFullYear(),
              this.currentDate.getMonth() + 1,
              0
            )
          }
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped></style>
