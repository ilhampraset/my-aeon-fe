<template>
  <div class="row">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title h5 h4-sm">{{ userData.first_name }} {{ userData.last_name }}</h4>
          </div>
            <div class="card flex-row">
              <img class="card-img-left example-card-img-responsive profile-image" :src="userData.profile_picture" alt="Profile Picture"/>
              <div class="card-body">
                <h4 class="card-title h5 h4-sm">First Name</h4>
                <p class="card-text">{{ userData.first_name }}</p>
                <h4 class="card-title h5 h4-sm">Last Name </h4>
                <p class="card-text">{{ userData.last_name }}</p>
                <h4 class="card-title h5 h4-sm">Email</h4>
                <p class="card-text">{{ userData.email }}</p>
              </div>
            </div>
          </div>

      </div>

    </div >

  </div>
  <button type="button" class="btn btn-primary btn-back" @click="goBack">Back</button>
</template>
<script>
import axios from 'axios';
import { API_URL } from '@/config/api.js'
  export default {
    data() {
      return {
        userData: {}
      };
    },
    mounted() {
      this.fetchUserData();
    },
    methods: {
      fetchUserData() {
        const userId = this.$route.params.id; // Access route params in Vue 2
        axios.get(`${API_URL}/users/${userId}`)
            .then(response => {
              this.userData = response.data.data;
              console.log(this.userData)
            })
            .catch(error => {
              console.error('Error fetching user data:', error);
            });
      },
      goBack() {

        this.$router.push('/users');
      }
    }
  };
</script>

<style scoped>
.card {
   border: none;

}
.profile-image {
  width: 287px;
  height: 302px;
  top: 213px;
  left: 290px;
  border-radius: 8px;
}

.btn-back {
  width: 116px;
  height: 40px;
  top: 570px;
  left: 286px;
  border-radius: 100px;
}
</style>