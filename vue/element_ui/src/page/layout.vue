<template>
    <el-container>
    <el-header>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">login</el-menu-item>
            <el-submenu index="2" class="fr">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-aside>
        <el-main>Main</el-main>
    </el-container>
    </el-container>
</template>
<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss" scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333333;
    text-align: center;
    line-height: 60px;
}   
.el-aside{
    background-color: #D3DCE6;
    color: #333333;
    text-align: center;
    line-height: 200px;
}
.el-main{
    background-color: #E9EEf3;
    color: #333333;
    text-align: center;
    line-height: 160px;
}
.el-container{
  position: absolute; 
  width: 100%; 
  top: 0px ; 
  left: 0 ; 
  bottom: 0;
}
.el-header{
  padding: 0;
  z-index: 1000;
}

// header菜单需要靠右的添加.fr即可(如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>)
.el-header .fr{
  float: right;
}
.el-header .el-menu{
  border-bottom: none;
}
.el-aside, .el-main{
  padding-top: 60px;
}
.el-aside{
  background: #545c64;
}
.el-aside .el-menu{
  border-right: none;
  width: 200px;
}
</style>