import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品'
  },
  formItems: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      label: '商品原价',
      prop: 'oldPrice',
      placeholder: '请输入商品原价'
    },
    {
      type: 'input',
      label: '商品现价',
      prop: 'newPrice',
      placeholder: '请输入商品现价'
    },
    {
      type: 'input',
      label: '商品图',
      prop: 'imgUrl',
      placeholder: '商品图片'
    },


  ]
}

export default modalConfig
