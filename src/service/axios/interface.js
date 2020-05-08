import {requestPost, requestGet} from './axiosConfig';

// 表格数据
export function getTableList(params){
    return  requestGet(`/mock/getTableList`,params)

    // return  requestGet('http://sixingjian.com/search',params);
} 

// 提交表单
export function submitForm(params){
    return  requestPost(`/api/product/create`,params)
}


/**
 * 查询所有级联类目列表
 *
 * @param params
 */
export function getCategoryList(params){
    return[{"value":1,"label":"Electric","children":[{"value":4,"label":"Game","children":[]},{"value":5,"label":"Phone","children":[]},{"value":6,"label":"TV","children":[]}]},{"value":2,"label":"Clothes","children":[{"value":7,"label":"Luggages","children":[]},{"value":8,"label":"Girls Fashion","children":[]},{"value":9,"label":"Baby SHoes","children":[]}]},{"value":3,"label":"Foods","children":[{"value":10,"label":"FishCans","children":[]},{"value":12,"label":"Cookies","children":[]},{"value":11,"label":"PorkCans","children":[]}]}];
   // return requestGet(`/category/listAvailableCagegories`, params)
  }


  /**
 * 根据一级目录查询二级类目列表
 *
 * @param params
 */
export function getChildCategoryList(params){
    console.log("getChildCategoryList"+params);
    return requestGet(`/api/category/listChildCategories`, params)
  }

 
    /**
 * 根据查一级类目
 *
 * @param params
 */
export function getRootCategoryList(params){
    return requestGet(`/category/listAvailableChildCagegories`, params)
  }



// 动态下拉框
export function getOptions(params){

    return {
    "code":0,
    "data":['窝窝','慢慢','蛋蛋'],
    "message":"成功"
  };
    
} 

// 删除行
export function deleteRow(params){
    
    return  requestPost(`/mock/deleteRow`,params)
} 



// 发布接口
export function deliver(params){
    
    return  requestPost(`/mock/deliver`,params)
}


//根据商品ID 查询商品信息  
export function getProductDetail(params){

    // return {"name":"IPHONE 11 PRO","keyword":"Electric","code":"CODE 001","originalPrice":{"currency":"CNY","number":11999.99},"discountPrice":{"currency":"CNY","number":9999.99},"mainImgList":["//a.jpg","//b.jpg"],"detailDesc":"desc detail","detailImgList":["//a.jpg","//b.jpg"],"status":"1","brandId":1,"id":1,"createTime":"2020-04-19 09:36:46","updateTime":"2020-04-19 09:36:46","createUserId":1};
    return  requestGet(`/api/product/mgt/detail`,params)
}



//获取商品列表
export function getProductList(params){
    // return  { "productList":[ {"name":"IPHONE 11 PRO","keyword":"Electric","code":"CODE 001","originalPrice":{"currency":"CNY","number":"$11999.99"},"discountPrice":{"currency":"CNY","number":"$9999.99"},"mainImgList":["http://img2.imgtn.bdimg.com/it/u=687127480,483923704&fm=11&gp=0.jpg","/upload/iphone-2.png"],"skuDesc":"尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版","detailDesc":"desc detail","detailImgList":["/upload/detail-iphone-1.png","/upload/detail-iphone-2.png"],"status":1,"brandId":1,"url":"//product/detail/7","id":7,"createTime":"2020-04-25 21:25:10","updateTime":"2020-04-25 21:25:10","createUserId":1},
    //           {"name":"IPHONE 11 PRO","keyword":"Electric","code":"CODE 001","originalPrice":{"currency":"CNY","number":"$11999.99"},"discountPrice":{"currency":"CNY","number":"$9999.99"},"mainImgList":["/upload/iphone-1.png","/upload/iphone-2.png"],"skuDesc":"尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版","detailDesc":"desc detail","detailImgList":["/upload/detail-iphone-1.png","/upload/detail-iphone-2.png"],"status":1,"brandId":1,"url":"//product/detail/7","id":7,"createTime":"2020-04-25 21:25:10","updateTime":"2020-04-25 21:25:10","createUserId":1},
    //           {"name":"IPHONE 11 PRO","keyword":"Electric","code":"CODE 001","originalPrice":{"currency":"CNY","number":"$11999.99"},"discountPrice":{"currency":"CNY","number":"$9999.99"},"mainImgList":["/upload/iphone-1.png","/upload/iphone-2.png"],"skuDesc":"尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版","detailDesc":"desc detail","detailImgList":["/upload/detail-iphone-1.png","/upload/detail-iphone-2.png"],"status":1,"brandId":1,"url":"//product/detail/7","id":7,"createTime":"2020-04-25 21:25:10","updateTime":"2020-04-25 21:25:10","createUserId":1}]};
 // return  requestGet('/api/product/list',params);
 return  {
    navgationList: null,
    summaryResultViewObject: {
    keyword: null,
    sum: 13
    },
    brandList: null,
    categoryList: null,
    productList: [
    {
    id: 1,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    ],
    status: 1,
    categoryId: 4,
    category: {
    id: 4,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 1,
    name: "Game",
    level: 1,
    seq: 4,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 2,
    createUserId: 1,
    name: "IPHONE X",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 002",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 4,
    category: {
    id: 4,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 1,
    name: "Game",
    level: 1,
    seq: 4,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 3,
    createUserId: 1,
    name: "MATE PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 003",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 4,
    category: {
    id: 4,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 1,
    name: "Game",
    level: 1,
    seq: 4,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 4,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 4,
    category: {
    id: 4,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 1,
    name: "Game",
    level: 1,
    seq: 4,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 5,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 4,
    category: {
    id: 4,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 1,
    name: "Game",
    level: 1, 
    seq: 4,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 6,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 4,
    category: {
    id: 4,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 1,
    name: "Game",
    level: 1,
    seq: 4,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 7,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 2,
    category: {
    id: 2,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Clothes",
    level: 1,
    seq: 2,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 8,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 2,
    category: {
    id: 2,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Clothes",
    level: 1,
    seq: 2,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 9,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 2,
    category: {
    id: 2,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Clothes",
    level: 1,
    seq: 2,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    },
    {
    id: 10,
    createUserId: 1,
    name: "IPHONE 11 PRO",
    keyword: "Electric",
    createTime: "2020-05-01 19:09:00",
    updateTime: "2020-05-01 19:09:00",
    code: "CODE 001",
    originalPrice: {
    number: "$ 11999.99",
    currency: "CNY"
    },
    discountPrice: {
    number: "$ 9999.99",
    currency: "CNY"
    },
    mainImgList: [
    "/api/upload/iphone-1.png",
    "/api/upload/iphone-2.png"
    ],
    skuDesc: "尺寸:165 170 175 ;颜色: 白色 黑色 蓝色 版型:修身版",
    detailDesc: "desc detail",
    detailImgList: [
    "/api/upload/detail-iphone-1.png",
    "/api/upload/detail-iphone-2.png"
    ],
    status: 1,
    categoryId: 2,
    category: {
    id: 2,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Clothes",
    level: 1,
    seq: 2,
    status: 1,
    usage: null,
    desc: "desc"
    },
    rootCategoryId: 1,
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    brandId: 1,
    brand: {
    id: 1,
    createTime: null,
    updateTime: null,
    createUserId: null,
    name: "Iphone",
    rootCategory: {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    },
    categoryList: [
    {
    id: 1,
    createTime: "2020-05-02 10:46:00",
    updateTime: "2020-05-02 10:46:00",
    createUserId: 1,
    parentId: 0,
    name: "Electric",
    level: 1,
    seq: 1,
    status: 1,
    usage: null,
    desc: "desc"
    }
    ],
    categoryIdList: [
    1
    ],
    seq: 1,
    desc: "desc",
    imgLink: "/api/upload/iphone.png"
    }
    }
    ]
    };
} 
 
//变更商品信息
export function updateProductInfo(params){
    return  requestGet('/api/product/updateProductInfo',params);
    // return  requestGet('http://sixingjian.com/search',params);
} 



//获取品牌列表
export function getBrandList(params){
    // return  [{"name":"Iphone","seq":"1","imgLink":"//bb/test","desc":"desc","id":1},
    //                        {"name":"Mate","seq":"2","imgLink":"//bb/test","desc":"desc"," ":2},
    //                        {"name":"Nike","seq":"3","imgLink":"//bb/test","desc":"desc","id":3},
    //                        {"name":"Xiaomi","seq":"4","imgLink":"//bb/test","desc":"desc","id":4},
    //                        {"name":"Mac","seq":"5","imgLink":"//bb/test","desc":"desc","id":5},
    //                        {"name":"Apple","seq":"6","imgLink":"//bb/test","desc":"desc","id":6},
    //                        {"name":"Apple","seq":"7","imgLink":"//bb/test","desc":"desc","id":7},
    //                        {"name":"Apple","seq":"8","imgLink":"//bb/test","desc":"desc","id":8},
    //                        {"name":"Apple","seq":"9","imgLink":"//bb/test","desc":"desc","id":9},
    //                        {"name":"Apple","seq":"10","imgLink":"//bb/test","desc":"desc","id":10},
    //                        {"name":"Apple","seq":"11","imgLink":"//bb/test","desc":"desc","id":11},
    //                        {"name":"Apple","seq":"12","imgLink":"//bb/test","desc":"desc","id":12}];
     return  requestGet('/api/brand/listAvailableBrands',params);
} 
// 提交品牌表单
export function submitBrandForm(params){
    console.log('我是慢慢 ，submitBrandForm创建品牌参数:',params)
     return  requestPost(`api//brand/create`,params)
}
// 删除
export function deleteBrand(params){
    
    return  requestPost(`/mock/deleteRow`,params)
} 

// 提交类目表单
export function submitCategoryForm(params){
    console.log('我是慢慢 submitCategoryForm提交类目参数:',params)
     return  requestPost(`/product/create`,params)   
}
// 删除
export function deleteCategory(params){
    
    return  requestPost(`/mock/deleteRow`,params)
} 

// 提交楼层表单
export function submitFloorForm(params){
    console.log('我是慢慢 ，submitFloorForm创建楼层参数:',params)
     return  requestPost(`/product/create`,params)
}
// 删除
export function deleteFloor(params){
    
    return  requestPost(`/mock/deleteRow`,params)
} 

// 提交首页轮播表单
export function submitFirstFocsForm(params){
    console.log('我是慢慢 ，submitFirstFocsForm创建首页焦参数:',params)
     return  requestPost(`/product/create`,params)
}
// 删除
export function deleteFirstFocs(params){
    
    return  requestPost(`/mock/deleteRow`,params)
} 
