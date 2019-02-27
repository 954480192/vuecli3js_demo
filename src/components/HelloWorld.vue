<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <group>
            <cell title="BBB" value="222"></cell>
        </group>
    </div>
</template>

<script>
    import {Group, Cell} from 'vux'

    export default {
        name: 'HelloWorld',
        components: {
            Group,
            Cell
        },
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
