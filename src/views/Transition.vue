<template>
  <div class="main-content">
    <div class="transition-page">
      <transition-group name="slide" tag="div" class="group">
        <div class="always-show slide-item" key="1">
          <img src="~@/assets/img/1.jpg" alt="" />
        </div>

        <div class="middle slide-item" v-if="isShow" key="2">
          <img src="~@/assets/img/2.jpg" alt="" />
        </div>

        <div class="right slide-item" v-if="isShow" key="3">
          <img src="~@/assets/img/3.jpg" alt="" />
        </div>
      </transition-group>

      <div class="btn-area">
        <button @click="handleToggle">toggle-btn</button>
      </div>

      <div class="plus-one-area">
        <button class="heart-outer" @click="handleLike">
          <i class="fas fa-heart"></i>

          <transition-group name="slide-fade" @enter="enter">
            <div v-for="like in likeList" :key="like" class="plus-one">+1</div>
          </transition-group>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// 資料來源:https://cloud.tencent.com/developer/article/1408212

export default {
  components: {},
  data() {
    return {
      isShow: false,
      likeList: 0
    };
  },
  methods: {
    handleToggle() {
      this.isShow = !this.isShow;
    },

    handleLike() {
      this.likeList++;
      setTimeout(() => {
        this.likeList--;
      }, 300);
    },

    enter(el, done) {
      el.style.transition = 'all 1.8s ease';
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-move {
  transition: all 0.7s;
}
.slide-enter-active,
.slide-leave-active,
.slide-move {
  transition: all 0.7s;
}

.slide-enter {
  opacity: 0;
  transform: translateX(280px);
}

.slide-leave-to {
  transition: all 0.5s;
  opacity: 0;
  transform: translateX(280px);
}

.slide-leave-active {
  position: absolute;
  // right: 0;
}

// plus one
.slide-fade-enter-to {
  transform: translateY(-50%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-200%);
}

// 資料來源
// https://cn.vuejs.org/v2/guide/transitions.html
// https://book.vue.tw/CH2/2-5-transitions.html
// v-enter-from v-leave-from 已經被棄用
</style>
