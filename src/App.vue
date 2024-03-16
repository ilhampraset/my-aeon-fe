<template>
  <Sidebar :isSidebarOpen="isSidebarOpen"  @closeSidebar="closeSidebar" ></Sidebar>
  <div id="content">
  <Navbar :toggleSidebar="toggleSidebar"></Navbar>
  <MainContent></MainContent>
  <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from "@/components/Sidebar.vue";
import MainContent from "@/components/MainContent.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
    MainContent,
    Footer
  },
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  }
}
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 0px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  z-index: 99;
  background-color :#363740;
}

@media (max-width: 768px) {
  .sidebar {
    padding: 0;
  }
}

.navbar {
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .1);
}

@media (min-width: 768px) {
  .navbar {
    top: 0;
    position: sticky;
    z-index: 999;
  }
}

.sidebar .nav-link {
  color: #A4A6B3;
}

.sidebar .nav-link.active {
  background-color: #505050;
}
body {
  background-color: #F7F8FC;
}
</style>

