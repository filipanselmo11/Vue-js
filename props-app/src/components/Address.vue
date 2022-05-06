<template>
  
</template>

<script>
export default {
    props: {
        addressType: {
            required: true,
            type: String,
            defult: 'Office',
        },
    },
    data:() => ({
        block: '',
        street: '',
        city: ''
    }),
    name: "Address",
}
</script>

<style>

</style>