// 店铺信息数据区域
export let shopList = []
// {shop_id: 101, shop_name: '一品鲜螺蛳粉', shop_phone: 13517544674, shop_address: '北海职业学院东门对面'},

// 生成数据
createdShopData()

// 生成虚拟店铺数据
function createdShopData() {
  for(let i = 1; i <= 20; i++) {
    const shop_id = '10' + i
    const shop_name = '一品鲜螺蛳粉'
    const shop_phone = createdPhone()
    const shop_address = '北海职业学院东门对面'
    const shop = {
      shop_id,
      shop_name,
      shop_phone,
      shop_address
    }
    shopList.push(shop)
  }

}
// 生成随机号码
function createdPhone() {
  let phone = '1'
  for(let i = 1; i <= 10; i++) {
    phone += (Math.floor(Math.random() * 9) + 1)
  }
  return phone
}

