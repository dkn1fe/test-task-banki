<script>
import HeaderComponent from "@/components/Header.vue";
import PictureComponent from "@/components/Picture.vue";
import FooterComponent from "@/components/Footer.vue";
import { PICTURE_CARD_LIST } from "@/const/const";

export default {
  name: "App",
  components: { HeaderComponent, PictureComponent, FooterComponent },
  data() {
    return {
      value: "",
      pictureCardList: PICTURE_CARD_LIST,
      buttonStatus: "idle",
      cardInfo: {},
      isOpenModal: false,
    };
  },
  mounted() {
    let savedPictureCard = localStorage.getItem("card");
    if (savedPictureCard) {
      this.pictureCardList = JSON.parse(savedPictureCard);
    }
  },
  methods: {
    handleInputChange(event) {
      this.value = event.target.value;
    },
    searchPicture() {
      this.pictureCardList = PICTURE_CARD_LIST.filter((picture) =>
        picture.name.toLowerCase().includes(this.value.toLowerCase())
      );
    },
    setButtonStatus(id) {
      const currentCard = this.pictureCardList.find((item) => item.id === id);

      if (currentCard.status === "purchase") {
        currentCard.status = "idle";
      } else if (currentCard.status === "idle") {
        currentCard.status = "preloader";

        setTimeout(() => {
          if (currentCard.status === "preloader") {
            currentCard.status = "purchase";
          }
          localStorage.setItem("card", JSON.stringify(this.pictureCardList));
        }, 2000);
      }

      localStorage.setItem("card", JSON.stringify(this.pictureCardList));
    },
    setIsOpenModal(id, state) {
      this.isOpenModal = state;

      const currentCard = this.pictureCardList.find((item) => item.id === id);

      this.cardInfo = {
        name: currentCard.name,
        author: currentCard.author,
        images: currentCard.images,
        price: currentCard.price,
        sale:currentCard.sale,
        description: currentCard.description,
      };
      
    },
  },
};
</script>

<template>
  <main class="main">
    <HeaderComponent
      :searchPicture="searchPicture"
      :value="value"
      :handleInputChange="handleInputChange"
    />
    <PictureComponent
      :buttonStatus="buttonStatus"
      :setButtonStatus="setButtonStatus"
      :pictureCardList="pictureCardList"
      :isOpenModal="isOpenModal"
      :setIsOpenModal="setIsOpenModal"
      :cardInfo="cardInfo"
    />
    <FooterComponent />
  </main>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main > :nth-child(2) {
  flex: 1;
}
</style>
