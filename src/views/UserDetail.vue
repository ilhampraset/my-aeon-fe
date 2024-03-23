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
        userData: {},
        errMessage : ""
      };
    },
    mounted() {
       this.fetchUserData(this.$route.params.id);
    },
    methods: {
     async fetchUserData(userID) {
       try {
         const response = await axios.get(`${API_URL}/users/${userID}`)
         if (response.data && response.data.data) {
           this.userData = response.data.data;
         } else {
           this.errMessage = response
         }
       }catch (error) {
         console.log('Error fetching user data:', error);
         this.errMessage = error
       }
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