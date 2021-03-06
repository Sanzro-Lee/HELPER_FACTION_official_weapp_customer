import mock from "@mpxjs/mock";
import { localUrl, serverUrl, mockUrl } from "../utils/requestUrl.js";

// mock 请求 URL
let requrl = mockUrl;
// 本地服务器请求 URL
// let requrl = localUrl;
// 服务器请求 URL
// let requrl = serverUrl;

export default () =>
  mock([
    {
      url: requrl + "/toptab/all",
      rule: {
        all: [
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "1 km",
            price: 1000,
            thumb: 1
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "5 km",
            price: 500,
            thumb: 4
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "10 km",
            price: 2000,
            thumb: 2
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "4 km",
            price: 1000,
            thumb: 3
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "3 km",
            price: 1000,
            thumb: 1
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "2.5 km",
            price: 1000,
            thumb: 1
          }
        ]
      }
    },
    {
      url: requrl + "/toptab/homerepair",
      rule: {
        homerepair: [
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2
          }
        ]
      }
    },
    {
      url: requrl + "/toptab/appliancerepair",
      rule: {
        appliancerepair: [
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "4 km",
            price: 1000,
            thumb: 1
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "4 km",
            price: 1000,
            thumb: 1
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "4 km",
            price: 1000,
            thumb: 1
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "4 km",
            price: 1000,
            thumb: 1
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "4 km",
            price: 1000,
            thumb: 1
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "4 km",
            price: 1000,
            thumb: 1
          }
        ]
      }
    },
    {
      url: requrl + "/toptab/goodsmove",
      rule: {
        goodsmove: [
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "3 km",
            price: 1000,
            thumb: 3
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "3 km",
            price: 1000,
            thumb: 3
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "3 km",
            price: 1000,
            thumb: 3
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "3 km",
            price: 1000,
            thumb: 3
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "3 km",
            price: 1000,
            thumb: 3
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "3 km",
            price: 1000,
            thumb: 3
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "3 km",
            price: 1000,
            thumb: 3
          }
        ]
      }
    },
    {
      url: requrl + "/toptab/others",
      rule: {
        others: [
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4
          }
        ]
      }
    },
    {
      url: requrl + "/demand/list",
      rule: {
        list: [
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "1 km",
            price: 1000,
            thumb: 1,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #5FD8A6, #A9DFA6)"
            }
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "5 km",
            price: 500,
            thumb: 4,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #F8E255, #EBC354)"
            }
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "10 km",
            price: 2000,
            thumb: 2,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #5FD8A6, #A9DFA6)"
            }
          },
          {
            title: "货物搬迁",
            desc: "刚找到新房子，要搬家了。",
            name: "张先生",
            dist: "4 km",
            price: 1000,
            thumb: 3,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #D94650, #DD9BA2)"
            }
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "3 km",
            price: 1000,
            thumb: 4,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #5FD8A6, #A9DFA6)"
            }
          },
          {
            title: "其它",
            desc: "清洁房子。",
            name: "王先生",
            dist: "2 km",
            price: 500,
            thumb: 4,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #F8E255, #EBC354)"
            }
          },
          {
            title: "居家维修",
            desc: "想把发霉的墙推倒，重新砌起来。",
            name: "刘先生",
            dist: "0.5 km",
            price: 2000,
            thumb: 2,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #5FD8A6, #A9DFA6)"
            }
          },
          {
            title: "家电维修",
            desc: "家里变压器坏了，快来人啊！",
            name: "林小姐",
            dist: "2.5 km",
            price: 1000,
            thumb: 1,
            show: true,
            statustagstyle: {
              background: "linear-gradient(to right, #D94650, #DD9BA2)"
            }
          }
        ]
      }
    },
    {
      url: requrl + "/message/list",
      rule: {
        list: [
          {
            title: "俞师傅",
            desc: "如果油漆换成蓝色会不会好点？",
            time: "6 / 18 14:23",
            count: "10"
          },
          {
            title: "黄师傅",
            desc: "那个，我的变压器已经买好了，请问您什么时候过来呢？",
            time: "昨天 13 : 30",
            count: "5"
          },
          {
            title: "俞师傅",
            desc: "如果油漆换成蓝色会不会好点？",
            time: "昨天 6 : 24",
            count: "100"
          },
          {
            title: "张师傅",
            desc: "那边的师傅说我的家具晚上6点才到，请问您有空吗？还是说明天？",
            time: "9 : 30",
            count: "8"
          },
          {
            title: "刘师傅",
            desc: "师傅！ 太感谢你啦！ 简直就是再世鲁班！",
            time: "6 / 18 14:23",
            count: "23"
          },
          {
            title: "林师傅",
            desc: "师傅手艺真好！",
            time: "9 : 30",
            count: "1"
          },
          {
            title: "俞师傅",
            desc: "如果油漆换成蓝色会不会好点？",
            time: "6 / 18 14:23",
            count: "0"
          }
        ]
      }
    }
  ]);
