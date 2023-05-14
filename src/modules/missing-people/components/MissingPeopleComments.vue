<template>
  <template v-if="isLoading">
    <div class="loader"></div>
  </template>
  <template v-else>
    <h3>Comentarios y/o pistas</h3>
    <div class="comments-container">
      <div v-if="this.hasComments">
        <ul id="unordered">
          <li class="comments" v-for="entry in comments" :key="entry.id">
            <img class="usr-image" :src="anonyMavatar" alt="" />
            <div class="comment-container">
              <p class="author">{{ entry.userId }}</p>
              <p class="date">{{ entry.dateOfEntry }}</p>
              <p class="comment">{{ entry.comment }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div v-else class="no-comments">No hay comentarios</div>
    </div>
    <div class="comment-box">
      <img class="usr-image" :src="anonyMavatar" alt="" />
      <form id="comment-form" @submit="setComment">
        <textarea
          v-model="commentAttempt"
          id="comment-box"
          placeholder="Escribe un comentario"
          required
        />
        <button type="submit" id="comment-button">Comentar</button>
      </form>
    </div>
  </template>
</template>

<script>
import missingPeopleApi from "@/api/MissingPeople";
import { mapGetters } from "vuex";
export default {
  props: {
    id: Number,
  },
  data() {
    return {
      author: "Anonimo",
      comments: [],
      anonyMavatar: require("@/assets/comment-icon.svg"),
      isLoading: false,
      commentAttempt: "",
    };
  },
  methods: {
    async getComments() {
      this.isLoading = true;
      const { data } = await missingPeopleApi.get(`/comments/${this.id}`, {
        headers: {
          // remove headers
        },
      });
      this.comments.push(...data);
      this.isLoading = false;
    },
    async setComment(event) {
      event.preventDefault();
      const { data } = await missingPeopleApi.post(
        `/comment`,
        {
          missingPersonId: this.id,
          comment: this.commentAttempt,
          dateOfEntry: new Date(),
          userId: this.isLogged ? this.userName : "Anonimo",
          userEmail: "anonimo@sebuscan.com.co",
        },
        {
          headers: {
            // remove headers
          },
        }
      );
      location.reload();
    },
  },
  computed: {
    hasComments() {
      return this.comments.length !== 0;
    },
    ...mapGetters("auth", ["isLogged", "getUserId", "userName"]),
  },
  mounted() {
    this.getComments();
  },
};
</script>

<style scoped>
.usr-image {
  height: 100px;
}
p {
  margin: 0;
}
.comment-container {
  padding-left: 1%;
}
.author {
  color: #385898;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
}
.date {
  color: #1f2020cc;
  font-size: 10px;
}
.comment-box {
  background-color: #eeecec;
  margin: 1% 5%;
  padding: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 25px;
}

.comments {
  display: flex;
  padding: 10px;
  align-items: center;
}
.no-comments {
  text-align: center;
  font-family: "Poppins", sans-serif;
  height: 50px;
  padding: 50px;
}
#unordered {
  list-style-type: none;
  font-family: "Poppins", sans-serif;
}
#comment-button {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  border-color: #2196f3;
  color: dodgerblue;
  border-radius: 7px;
  font-family: "Poppins", sans-serif;
  margin: 1%;
}
#comment-button:hover {
  background: #2196f3;
  color: white;
}
.comments-container {
  background-color: #eeecec;
  margin: 1% 5%;
  border-radius: 25px;
}
#comment-form {
  width: 90%;
  padding: 10px;
}
#comment-box {
  height: 75%;
  width: 100%;
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin: 1%;
  border-radius: 10px;
  resize: vertical;
  padding: 1%;
}
h3 {
  font-family: "Poppins", sans-serif;
  color: #854f2c;
  text-align: center;
}
</style>
