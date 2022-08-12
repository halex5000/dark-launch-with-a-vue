<template>
    <v-navigation-drawer v-if="store.showLogin" permanent location="right" width="400">
        <v-card
            height="250"
            width="400"
            color="#282828"
            class="align-center justify-center"
        >
        <v-card-title>Login</v-card-title>
        <v-spacer></v-spacer>
        <v-container>
            <v-row>
            <v-col>
                <v-card-text>
                <v-text-field
                    label="Username"
                    required
                    v-model="form.username"
                ></v-text-field>
                </v-card-text>
            </v-col>
            </v-row>
        </v-container>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn primary @click="login()">Login</v-btn>
            <v-btn @click="store.toggleLogin()">Cancel</v-btn>
        </v-card-actions>
        </v-card>
    </v-navigation-drawer>
</template>

<script setup>
    import { useLDClient } from "launchdarkly-vue-client-sdk";
    import { store } from './store';

    // capture the state in an object so we don't update the actual username until
    // the user clicks login
    const form = {};

    // this is how we'll interact with the LaunchDarkly client directly
    // also needs to be in the setup block
    // we'll use this to identify the user once they login
    const client = useLDClient();

    // set the username when the user clicks login
    const login = async () => {
        if (form.username) {
            // asks the LaunchDarkly client for the current user info
            const user = client.getUser();

            console.log("current user is", client.getUser());

            // here's where update the user's identity in the LaunchDarkly client
            await client.identify({
                // keep anything else we already attributed to the user
                ...user,
                anonymous: false,
                // update the key, the unique identifier for this user
                // to be their username
                // we use .value to access the value because as a reactive object
                // we interact with Vue's proxy for the object
                // learn more here: https://vuejs.org/guide/essentials/reactivity-fundamentals.html
                key: form.username,
            });

            console.log("current user is", client.getUser());
            store.setUsername(form.username);
            store.toggleLogin();
            form.username = "";
        }
    };
</script>