<template lang="en">
    <div>
        <!-- <p class="h3">Show Hide if part</p> -->
        <table class="mt-3 mx-auto table table-striped table-bordered">
            <tr>
                <th width="33.33%" class="mx-auto border border-primary">ID</th>
                <th width="33.33%" class="mx-auto border border-primary">Name</th>
                <th width="33.33%" class="mx-auto border border-primary">Email</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'ForLoopTest',
    data() {
        return {
            users: [
                { id: 1, name: 'Peter', email: 'peter@test.com' },
                { id: 2, name: 'Bruce', email: 'bruce@test.com' },
                { id: 3, name: 'Tomy', email: 'tomy@test.com' },
                { id: 4, name: 'Sam', email: 'sam@test.com' },
                { id: 5, name: 'Raghu', email: 'raghu@test.com' },
            ]
        }
    },

    // data() {
    //     return {
    //         users: []
    //     }
    // },
    // created() {
    //     // Call loop() method to populate the users data after the component is created
    //     this.loop();
    // },
    // methods: {
    //     loop() {
    //         // Manipulate data, add API calls, etc.
    //         this.users = [
    //             { id: 1, name: 'Peter', email: 'peter@test.com' },
    //             { id: 2, name: 'Bruce', email: 'bruce@test.com' },
    //             { id: 3, name: 'Tomy', email: 'tomy@test.com' },
    //             { id: 4, name: 'Sam', email: 'sam@test.com' },
    //             { id: 5, name: 'Raghu', email: 'raghu@test.com' },
    //         ];
    //     },
    // },
}
</script>