const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btnTitle: '新建商品'
  },
  propsList: [
    // 1.selection 2.index
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px' },

    { type: 'normal', label: '商品名称', prop: 'name', width: '150px' },
    { type: 'normal', label: '原价', prop: 'oldPrice', width: '150px' },
    { type: 'normal', label: '现价', prop: 'newPrice', width: '150px' },
    { type: 'normal', label: '地址', prop: 'address', width: '150px' },
    { type: 'normal', label: '缩略图', prop: 'imgUrl', width: '150px' },


    // {
    //   type: 'custom',
    //   label: '部门领导',
    //   prop: 'leader',
    //   width: '150px',
    //   slotName: 'leader'
    // },
    // {
    //   type: 'custom',
    //   label: '上级部门',
    //   prop: 'parentId',
    //   width: '150px',
    //   slotName: 'parent'
    // },

    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },

    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
