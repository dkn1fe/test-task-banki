<template>
  <div>
    <div
      :class="[
        'header__search',
        isOpenSearch && 'open block',
        !isOpenSearch && 'hide',
      ]"
    >
      <input
        @change="handleInputChange"
        :value="value"
        type="text"
        placeholder="Поиск по названию картины"
        class="search__input"
      />
      <div @click="toggleSearch(false)" class="search__close">
        <img :src="icons.close" />
      </div>
      <button
        @click="searchPicture(), toggleSearch(false)"
        class="search__button"
      >
        Найти
      </button>
    </div>
    <div class="menu__search">
      <img @click="toggleSearch(true)" :src="icons.search" />
    </div>
  </div>
</template>

<script>
import search from "@/assets/search.png";
import closeBlack from "@/assets/closeBlack.png";

export default {
  name: "HeaderSearch",
  props: ["handleInputChange", "value", "searchPicture"],
  data() {
    return {
      icons: {
        search,
        close: closeBlack,
      },
      isOpenSearch: false,
    };
  },
  methods: {
    toggleSearch(state) {
      this.isOpenSearch = state;
    },
  },
};
</script>

<style lang="scss" scoped>
.header__search {
  display: flex;
  align-items: center;
}

.block {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white-color);
  z-index: 10;
  justify-content: center;
  align-items: center;

  &.open {
    display: flex;
  }

  &.hide {
    display: none;
  }
}

.search {
  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 11;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
    }
  }

  &__input {
    height: 48px;
    width: 296px;
    background: var(--body-background);
    border: 1px solid var(--border-color);
    color: var(--border-color);
    outline: none;
    padding: 16px;

    &:focus {
      border: 2px solid var(--input-selected);
      color: var(--text-color);
    }

    &::placeholder {
      color: var(--placeholder-color);
      font-size: var(--text-size);
    }
  }

  &__button {
    background: #403432;
    padding: 11px 32px;
    border: none;
    color: var(--white-color);
    cursor: pointer;
  }
}

.menu__search {
  position: absolute;
  top: 18px;
  right: 20px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}

@media (max-width: 1920px) {
  .menu__search {
    display: none;
  }
  .search__close {
    display: none;
  }
}

@media (max-width: 1220px) {
  .search__input {
    height: 36px;
    width: 220px;
    &::placeholder {
      font-size: 12px;
    }
  }
  .search__button {
    padding: 6px 18px;
  }
  .menu__search {
    display: none;
  }
}

@media (max-width: 850px) {
  .header {
    &__search {
      display: none;
    }
  }
  .menu__search {
    display: flex;
  }
}
</style>
