<template lang="en">
    <div>
        <nav class="navbar navbar-expand-lg bg-secondary">
            <div class="container-fluid">
                <router-link class="navbar-brand text-white" to="/">Navbar</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link active text-white" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" to="/blog">Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" to="/service">Service</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" to="/contact">Contact</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Authenticate
                            </a>
                            <ul class="dropdown-menu bg-secondary">
                                <li>
                                    <router-link class="nav-link text-white" to="/login">Login</router-link>
                                </li>
                                <li>
                                    <router-link class="nav-link text-white" to="/register">Register</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavbarPage'
}
</script>
<style scoped></style>