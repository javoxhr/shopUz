<script setup>
import {useStore} from '../store/store'

const store = useStore()
</script>

<template>
    <div>
        <loader v-if="store.loader"/>
        <div class="container">
            <Top />
            <Cards />
        </div>
    </div>
</template>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>