<template>
    <div>
        <h2>news-content {{$route.params.id}}</h2>
    </div>
</template>

<script>
export default {
    validate({params}){
        // Must be a number
        return /^\d+$/.test(params.id)
    }
}
</script>