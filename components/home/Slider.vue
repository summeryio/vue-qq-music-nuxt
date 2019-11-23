<template>
    <div>
        <div class="section-inner">
            <ul class="index-tab" v-if="tags && tags.length > 0">
                <li 
                    v-for="(tag, i) in tags" 
                    :class="{active: i === curTag}" 
                    @click="changeTag(tag.id, i, mySwiper)"
                    :key="i"
                >{{tag.name}}</li>
            </ul>

            <div class="mod_swiper_container">
                <div v-swiper="swiperOption" ref="mySwiper">
                    <slot></slot>
                </div>
                <div class="swiper-pagination mod_swiper_pagination" :class="mark + '_pagination'"  slot="pagination"></div>
            </div>
        </div>
        <div class="mod_swiper_action">
            <div class="item left">
                <a href="javascript: void(0);" class="swiper_action-prev" :class="mark + '_active_prev'"><i class="mod_sprite"></i></a>
            </div>
            <div class="item right">
                <a href="javascript: void(0);" class="swiper_action-next" :class="mark + '_active_next'"><i class="mod_sprite"></i></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    props: {
        tags: {
            type: [Object, Array],
            default: () => {}
        },
        mark: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            swiperOption:{
                slidesPerView: 'auto',
                centeredSlides:true,
                spaceBetween: 0,
                loop:false,
                speed:600,
                navigation: {
                    prevEl: `.${this.mark}_active_prev`,
                    nextEl: `.${this.mark}_active_next`
                },
                pagination: {
                    el: `.${this.mark}_pagination`,
                    clickable: true,
                    bulletClass: 'bullet',
                    bulletActiveClass: 'bullet-active',
                    renderBullet: function (index, className) {
                        return '<span class="'+className+'"><i></i></span>';
                    },
                },
                //修改swiper自己或子元素时，自动初始化swiper
                observer:true,
                observeParents:true,
            },
            curTag: 0
        }
    },
    methods: {
        changeTag(tag, index, mySwiper) {
            this.curTag = index
            this.$emit('select', tag, mySwiper)
        }
    },
    computed: {
        mySwiper() {
            return this.$refs.mySwiper.swiper
        }
    }
}
</script>