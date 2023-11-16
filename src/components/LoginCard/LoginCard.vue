<template>
    <div class="login-card">
        <form action="" type="submit" class="login-form">
            <input v-model="firstName" type="text" placeholder="First Name" /><br />
            <input v-model="lastName" type="text" placeholder="Last name" /><br />
            <button type="button" @click="setForm">Login in</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'LoginCard',
    data() {
        return {
            firstName: '',
            lastName: '',
            token: 'dg213f1b56d1bd',
        }
    },
    methods: {
        setForm() {
            if (this.firstName.length >= 5 && this.lastName.length >= 5) {
                localStorage.setItem('token', this.token);
                this.$router.push({ name: 'productsMain' })
                this.firstName = '';
                this.lastName = '';
            }
        }
    },
}
</script>

<style src="./LoginCard.css"/>