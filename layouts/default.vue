<template>
    <div>
        <nav>
            导航栏
            <img class="avatar" src="~/assets/avatar.jpg" alt="avatar" />
        </nav>
        <!--插槽-->
        <slot />
    </div>
</template>
<style scoped>
.avatar{
    width: 50px;
    border: 1px solid rgb(218,218,218);
    border-radius: 50%;
}
</style>