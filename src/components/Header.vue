<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <nav class="header__navigation">
          <ul class="header__navigation__list">
            <li v-for="item in navList" :key="item.id">
              <a :href="item.link">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
        <div class="header__menu">
          <burger-menu :navList = "navList"/>
        </div>
        <header-search
          :searchPicture="searchPicture"
          :value="value"
          :handleInputChange="handleInputChange"
        />
      </div>
    </div>
    <div class="border__line"></div>
  </header>
</template>

<script>
import { NAVIGATION_LIST } from "@/const/const";
import HeaderSearch from "./HeaderSearch.vue";
import BurgerMenu from "./BurgerMenu.vue";

export default {
  name: "Header",
  components: { HeaderSearch, BurgerMenu },
  props: ["handleInputChange", "value", "searchPicture"],
  data() {
    return {
      navList: NAVIGATION_LIST,
      isOpenMenu: false,
    };
  },
};
</script>

<style lang="scss">
.header {
  height: 97px;
  padding-top: 25px;
  &__container {
    max-width: 1040px;
    margin: 0 auto;
  }
  &__navigation {
    &__list {
      display: flex;
      align-items: center;
      gap: 50px;
      a {
        font-size: var(--text-size);
        color: var(--text-color);
        white-space: nowrap;
      }
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 160px;
  }
}
.border__line {
  width: 100%;
  margin-top: 30px;
  border: 1px solid var(--border-color);
}

@media (max-width: 1920px) {
  .header {
    &__menu {
      display: none;
    }
  }
}

@media (max-width: 1220px) {
  .header {
    &__container {
      max-width: 800px;
      margin: 0 auto;
    }
    &__menu {
      display: none;
    }
    &__navigation {
      &__list {
        gap: 20px;
      }
    }
    &__wrapper {
      gap: 30px;
    }
  }
}
@media (max-width: 850px) {
  .header {
    &__menu {
      display: flex;
    }
    &__navigation {
      display: none;
    }
  }
}
</style>
