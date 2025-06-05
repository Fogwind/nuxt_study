<template>
    <div>
       <NavBar></NavBar>
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