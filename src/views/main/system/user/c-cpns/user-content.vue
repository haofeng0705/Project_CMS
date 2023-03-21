<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection"  width="50px" />
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="60px"
        />

        <el-table-column
          align="center"
          label="用户名"
          prop="name"
          width="150px"
        />
        <el-table-column
          align="center"
          label="真实姓名"
          prop="realname"
          width="150px"
        />
        <el-table-column
          align="center"
          label="手机号码"
          prop="cellphone"
          width="150px"
        />
        <el-table-column
          align="center"
          label="状态"
          prop="enable"
          width="100px"
        />
        <el-table-column align="center" label="创建时间" prop="createAt" />
        <el-table-column align="center" label="更新时间" prop="updateAt" />

        <el-table-column align="center" label="操作" width="150px">
          <el-button size="small" icon="Edit" type="primary" text>
            编辑
          </el-button>
          <el-button size="small" icon="Delete" type="danger" text>
            删除
          </el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'

// 1.发起action，请求usersList的数据
const systemStore = useSystemStore()
systemStore.postUsersListAction()
// 不能用下面的代码直接获取 userlist 是因为,action 是异步的,
// 正确的做法是在 action 执行完成后，通过监听 usersList 的变化来获取最新的数据。
// 或者在 action 执行完成后，通过回调函数来获取最新的数据。
// const userList = systemStore.usersList
// console.log('userList->',userList)
// 正确的做法是在 action 执行完毕后再获取数据，可以使用 async/await 或者 Promise 来实现。修改后的代码如下：
// async function getUsersList() {
//   await systemStore.postUsersListAction()
//   const userList = systemStore.usersList
//   console.log('userList->', userList)
// }
// getUsersList()

// 2.获取usersList数据,进行展示
const { usersList } = storeToRefs(systemStore)
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .title {
    font-size: 22px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}
</style>
