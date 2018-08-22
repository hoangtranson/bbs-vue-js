<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1>Add article</h1>
          </div>

          <div class="modal-body">
            <md-field v-bind:class="{ 'md-invalid': errors.title }">
              <label>Article Title</label>
              <md-input v-model="source.title"></md-input>
              <span class="md-error">{{errors.title}}</span>
            </md-field>
            <md-field v-bind:class="{ 'md-invalid': errors.author }">
              <label>Author</label>
              <md-input v-model="source.author"></md-input>
              <span class="md-error">{{errors.author}}</span>
            </md-field>
            <md-field v-bind:class="{ 'md-invalid': errors.email }">
              <label>Email</label>
              <md-input v-model="source.email"></md-input>
              <span class="md-error">{{errors.email}}</span>
            </md-field>
            <md-field v-bind:class="{ 'md-invalid': errors.content }">
              <label>Content</label>
              <md-textarea v-model="source.content"></md-textarea>
              <span class="md-error">{{errors.content}}</span>
            </md-field>
          </div>

          <div class="modal-footer">
            <md-button @click="$emit('close-modal')">
              Close
            </md-button>
            <md-button @click="submitData">
              Add article
            </md-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { formatDate } from '../utils/date.js';

export default {
  name: 'BbsModal',
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showModal: false,
      errors: {}
    }
  },
  methods: {
    submitData: function(e) {
      if(this.isFormValid(this.source)){
        const data = {
          id: this.source.id,
          title: this.source.title,
          author: this.source.author,
          email: this.source.email,
          content: this.source.content,
          viewCount: this.source.viewCount ? this.source.viewCount ++ : 0,
          updatedDate: formatDate(new Date())
        };
        this.$emit('submit-article', data);
      }
    },
    isFormValid: function({title, author, email, content}) {
      this.errors = {};
      if(!title){
        this.errors['title'] = 'Title required';
      }

      if(!author){
        this.errors['author'] = 'Author required';
      }

      if(!email){
        this.errors['email'] = 'Email required';
      } else if (!this.validEmail(email)) {
        this.errors['email'] = 'Valid email required';
      }

      if(!content){
        this.errors['content'] = 'Content required';
      }

      if (this.errors.title || this.errors.author || this.errors.email || this.errors.content) {
        return false;
      }

      return true;
    },
    validEmail: function (email) {
      const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailPattern.test(email);
    }
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-footer{
  display: flex;
  justify-content: flex-end;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
