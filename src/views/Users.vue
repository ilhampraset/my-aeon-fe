<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header ">
          <h5 class="card-title">All Users</h5>
        </div>
        <div class="card-body" >
          <table class="table">
            <thead>
            <tr>
              <th>FullName</th>
              <th>Email</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users.data" :key="user.id">
              <td>{{ user.first_name }} {{ user.last_name }}</td>
              <td>{{ user.email }}</td>
              <td><button type="button" class="btn btn-primary" @click="showUserDetail(user.id)">View Detail</button></td>
            </tr>
            </tbody>
          </table>
          <div class="pagination-container">
            <div class="pagination">
              <span>{{ paginationStart }} - {{ paginationEnd }} of {{ totalUsers }}</span>
              <button class="btn bi bi-chevron-left" @click="prevPage" :disabled="currentPage === 1"></button>
              <button   class="btn bi bi-chevron-right" @click="nextPage" :disabled="currentPage * itemsPerPage >= totalUsers"></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL } from '@/config/api.js'
export default {
  data() {
    return {
      users: [],
      currentPage: 1,
      itemsPerPage: 5
    };
  },
  computed: {
    totalUsers() {
      return this.users.total || 0;
    },
    paginationStart() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    paginationEnd() {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.totalUsers ? this.totalUsers : end;
    },
  },
  mounted() {
    this.fetchUserData(this.currentPage);

  },
  methods: {
    fetchUserData(page) {
      axios.get(`${API_URL}/users?page=${page}`)
          .then(response => {
            this.users = response.data.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    showUserDetail(userID) {
      this.$router.push({name: 'UserDetail', params: {id: userID}});
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchUserData(this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.totalUsers) {
        this.currentPage++;
        this.fetchUserData(this.currentPage);
      }
    }
  }
};
</script>

<style>
.btn-primary {
  font-family: 'Mulish', serif;
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 15px;
  border: 2px solid rgba(58, 133, 191, 0.75);
  border-radius: 40px;
  background: #65A7DB;
  transition: all 0.3s ease 0s;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
}

.pagination {
  display: flex;
  align-items: center; /* Center the content vertically */
}
.pagination > span {
  color: #9FA2B4;
}
.bi-chevron-left{
  color: #9FA2B4;
}

.bi-chevron-right{
  color: #9FA2B4;
}
</style>
