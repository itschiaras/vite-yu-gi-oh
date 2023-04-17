<template>
    <div class="col card-container mt-5 p-0">
        <div class="text-center">
            <img class="img-fluid" :src="card.card_images[0].image_url" alt="">
            <h5 class="text-uppercase">{{ card.name }}</h5>
            <p class="text-dark">{{ card.archetype }}</p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['card']
}
</script>

<style lang="scss" scoped>
.card-container {
    background-color: #d48f38;
    color: #fefefe;
}
</style>