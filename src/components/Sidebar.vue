<template>

  <nav :class="{ 'active': isSidebarOpen }" @click.self="$emit('closeSidebar')" id="sidebar">
    <div class="sidebar-header">
      <img src="@/assets/aol-logos.8ae57fa.svg" class="logo">
    </div>
    <div class="list-group rounded-0">
      <router-link to="/" exact  class="list-group-item list-group-item-action  border-0 d-flex align-items-center" exact-active-class="active-link">
        <span class="bi bi-info-circle"></span>
        <span class="ml-2 link-name">About</span>
      </router-link>
      <router-link to="/users"  class="list-group-item list-group-item-action border-0 d-flex align-items-center"  active-class="active-link">
        <span class="bi bi-people"></span>
        <span class="ml-2 link-name">Users</span>
      </router-link>

    </div>
  </nav>
</template>
<script>
export default {
  props: ['isSidebarOpen']
};
</script>



<style>
.active-link {
  background-color: #505050;
}
.list-group-item-action:focus, .list-group-item-action:hover {
  color: #A4A6B3;
  background-color: #505050
}
.list-group-item {
  background-color: #363740;
}

.list-group-item-action {
  color: #A4A6B3;
}
#sidebar {
  min-width: 250px;
  max-width: 250px;
  transition: all 0.3s;
}

sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}
.sidebar {
  /* Sidebar styles when closed */
}

.sidebar.active,
.sidebar:focus-within {
  background-color: #363740;
  /* Sidebar styles when open or focused within */
}

.link-name {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
}

</style>