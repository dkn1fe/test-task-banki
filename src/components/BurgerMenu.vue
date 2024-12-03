<template>
  <div>
    <button @click="toggleMenu" class="burger-button">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div :class="['menu', { open: isOpenMenu }]">
      <ul>
        <li v-for="(item, index) in navList" :key="index">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
      <div class="menu__close">
        <img @click="toggleMenu" :src="close" />
      </div>
    </div>
  </div>
</template>

<script>
import close from "@/assets/close.png";

export default {
  name: "BurgerMenu",
  props: ["navList"],
  data() {
    return {
      close,
      isOpenMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style lang="scss" scoped>

.burger-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1;
  background: none;
  border: none;
  cursor: pointer;
}
.burger-button span {
  width: 30px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
}

.menu {
  position: absolute;
  top: 0;
  left: -100%;
  width: 250px;
  height: 100vh;
  background: #4b6bfb;
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  z-index: 10;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;

  &.open {
    left: 0;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li a {
    padding-top: 20px;
    text-decoration: none;
    color: white;
    font-size: 18px;
  }

  li a:hover {
    text-decoration: underline;
  }
}
</style>
