<template>
    <div sm6 md4 lg3>
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<<script>
export default {
    
}
</script>
<style>
.panel-body
{
    font-size:24px;
    color:#6e6e6e;
}
.quote 
{
    border: 1px solid black;
    margin-top: 3px;
    cursor :pointer
}
.quote:hover{
    background-color: #ffe2e2
}
</style>
