<template>
    <div class="div1">你是人间的四月天</div>
    <slot name='footer' :data="webLanguages">

        <ul>
            <li v-for="(item, index) in webLanguages" :key="index">
                {{ item }}
            </li>
        </ul>

    </slot>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        const state = reactive({
            webLanguages: [
                '我说 你是人间的四月天；',
                '笑响点亮了四面风；',
                '轻灵在春的光艳中交舞着变。',
                '你是四月早天里的云烟，',
                '黄昏吹着风的软，', '星子在无意中闪，', '细雨点洒在花前。'

            ]
        })
        return {...toRefs(state)}
    }
}
</script>

<style scoped>
.div1{font-size: 24px;color: red;}
</style>