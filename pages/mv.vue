<template>
    <div class="qq_music" id="mv">
        <div class="section-inner">
            <h3 class="mod_types-title">
                <span class="tit-icon icon-shizhan-l tit-icon-l"></span><em>最</em>／<em>新</em>／<em>M</em>／<em>V</em><span class="tit-icon icon-shizhan-r tit-icon-r"></span>
            </h3>
            <Category />
            <Order />
        </div>
    </div>
</template>

<script>
import Category from '@/components/mv/Category'
import Order from '@/components/mv/Order'
export default {
    components: {
        Category,
        Order
    },
}
</script>

<style>

</style>