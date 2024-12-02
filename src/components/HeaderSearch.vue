<template>
  <div class="header__search">
    <input
      @change="handleInputChange"
      :value= "value"
      type="text"
      placeholder="Поиск по названию картины"
      class="search__input"
    />
    <button @click = "searchPicture" class="search__button">
      Найти
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  props:['handleInputChange','value','searchPicture']
};
</script>

<style lang="scss" scoped>
.header__search {
  display: flex;
  align-items: center;
}
.search__input {
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

.search__button {
  background: #403432;
  padding:11px 32px;
  border: none;
  color: var(--white-color);
}

@media (max-width:1220px){
   .search__input{
    height: 36px;
    width: 220px;
    &::placeholder{
      font-size:12px;
    }
   }
   .search__button{
    padding:6px 18px;
   }
}
</style>
