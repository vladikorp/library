<template >
    <!-- The button to open modal -->

    <label v-if="props.bg_color == 'primary'" for="my-modal" class="btn btn-active btn-primary ml-5">{{props.title}}</label>
    <label v-if="props.bg_color == 'accent'" for="my-modal" class="btn btn-active btn-accent ml-5">{{props.title}}</label>
    <label v-if="props.bg_color == 'neutral'" for="my-modal" class="btn btn-active btn-neutral ml-5">{{props.title}}</label>
    <label v-if="props.bg_color == 'secondary'" for="my-modal" class="btn btn-active btn-secondary ml-5">{{props.title}}</label>
    <label v-if="props.bg_color == 'success'" for="my-modal" class="btn btn-active btn-success ml-5">{{props.title}}</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Увага!</h3>
        <p class="py-4">{{ props.modal }}</p>
        <div class="modal-action">
        <label for="my-modal" class="btn">Підтвердити</label>
        <label for="my-modal" class="btn btn-active btn-primary ml-5">Скасувати</label>
        </div>
    </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String, 
        default: ''
    },
    modal: {
        type: String, 
        default: ''
    },
    bg_color: {
        type: String, 
        default: ''
    }
    

})

</script>

<style scoped>

</style>