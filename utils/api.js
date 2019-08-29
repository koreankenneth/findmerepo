export async function loadFindMe() {
  try {
    let response = await fetch(
      'http://13.125.197.91/findme?page=0', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
    let responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error(error)
  }
}

export async function getPostDetail(id) {
  try {
    let response = await fetch(
      `http://13.125.197.91/findme/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
    let responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error(error)
  }
}

export async function initFindMeDraft() {
  return findMeDraft
}

export async function initTrendDraft() {
  return trendDraft
}

export async function initTrendRecommendDraft() {
  return trendRecommendDraft
}

export async function loadBrands() {
  return brands
}
export async function postFindMe(data) {
  const body = JSON.stringify({
    'exposureType': data.Intro.displayType,
    'title': 'testTitle',
    'content': data.Body4.text,
    'product': {
      'productColor': data.Body3.color,
      'productType': data.Body1.category,
      'productBrand': data.Body2.brand,
      'productSize': data.Body3.size,
      'productGender': data.Body1.gender,
    },
    'images': [
      {
        'link': 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
        'isMain': true
      },
    ]
  })
  // return body
  try {
    let response = await fetch(
      'http://13.125.197.91/findme', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: body,
      })
    let responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error(error)
  }
}



const brands = [
  {
    id: 'A0001',
    koreanName: '알렉산더',
    englishName: 'Alexander',
    keyWords: '알렉산더, Alexander',
  },
  {
    id: 'A0002',
    koreanName: '나이키',
    englishName: 'Nike',
    keyWords: '나이키, Nike, 니케',
  },
  {
    id: 'A0003',
    koreanName: '아디다스',
    englishName: 'Adidas',
    keyWords: '아디다스, Adidas, 삼디다스',
  },
  {
    id: 'A0004',
    koreanName: '알프레도 마틴',
    englishName: 'Alfredo Martin',
    keyWords: '알프레도 마틴, Alfredo Martin, 알프레드',
  },
  {
    id: 'A0005',
    koreanName: '닥터마틴',
    englishName: 'Dr.Martin',
    keyWords: '닥터마틴, Dr.Martin, 닥마, doctor',
  },
  {
    id: 'A0006',
    koreanName: '푸마',
    englishName: 'Puma',
    keyWords: '푸마, Puma, 퓨마',
  },
  {
    id: 'A0007',
    koreanName: '골든 구스',
    englishName: 'Golden Goose',
    keyWords: '골든 구스, Golden Goose, 골드구스, goldgoose',
  },
  {
    id: 'A0008',
    koreanName: '아르마니',
    englishName: 'Armani',
    keyWords: '아르마니, Armani, 알마니',
  },
  {
    id: 'A0009',
    koreanName: '파타고니아',
    englishName: 'Patagonia',
    keyWords: '파타고니아, Patagonia, 피타고니아',
  },
  {
    id: 'A0010',
    koreanName: '타미 힐피거',
    englishName: 'Tommy Hilfiger',
    keyWords: '타미 힐피거, Tommy Hilfiger, 토미',
  },
]

const findMeDraft = {
  Body1: {
    category: 'undefined',
    gender: 'undefined',
  },
  Body2: {
    brand: 'undefined',
    product: 'undefined',
  },
  Body3: {
    color: 'undefined',
    size: 'undefined',
  },
  Body4: {
    text: 'undefined',
  },
}

const trendDraft = {
  TrendWriteBody1: {
    title: 'undefined',
    contents: 'undefined',
  },
  TrendWriteBody2: {
    image: 'undefined',
  },
  TrendWriteBody3: {
    selectedCategories: new Array(),
  },
  TrendWriteBody4: {
  },
}

const trendRecommendDraft = {
  TrendRecommendWriteBody1: {
    title: 'undefined',
    contents: 'undefined',
  },
  TrendRecommendWriteBody2: {
    images: ['undefined', 'undefined', 'undefined', 'undefined', 'undefined'],
  },
}

const dummyData = {
  FM2019030100001: {
    id: 'FM2019030100001',
    title: 'plese check this out!',
    author: 'Jaehyun Kim',
    timestamp: 1476508607000,
    text: 'Please, find this item asap. I need to prepare it before the anniversay.',
    isSecret: true,
    item: {
      name: '나이키 마스야드 2.0',
      brand: 'NIKE',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/008/654/602/original/162369_00.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100002: {
    id: 'FM2019030100002',
    title: 'Can you find this as cheap as possible?',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: 'Content No.2',
    isSecret: false,
    item: {
      name: '나이키 제이크루 킬샷 2',
      brand: 'NIKE',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100003: {
    id: 'FM2019030100003',
    title: 'I need to buy this one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '세번째 컨텐츠. 한글 테스트.',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/240/attachments/product_template_pictures/images/014/957/822/original/G33MS590_L26.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100004: {
    id: 'FM2019030100004',
    title: 'I need to buy that one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '세번째 컨텐츠. 한글 테스트.',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100005: {
    id: 'FM2019030100005',
    title: 'I need to buy that one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100006: {
    id: 'FM2019030100006',
    title: 'I need to buy that one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '세번째 컨텐츠. 한글 테스트.',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100007: {
    id: 'FM2019030100007',
    title: 'I need to buy that one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '세번째 컨텐츠. 한글 테스트.',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100008: {
    id: 'FM2019030100008',
    title: 'I need to buy that one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '세번째 컨텐츠. 한글 테스트.',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100009: {
    id: 'FM2019030100009',
    title: 'I need to buy that one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '세번째 컨텐츠. 한글 테스트.',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
  FM2019030100010: {
    id: 'FM2019030100010',
    title: 'I need to buy that one.',
    author: 'nelo13',
    timestamp: 1476508607000,
    text: '세번째 컨텐츠. 한글 테스트.',
    isSecret: false,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png',
    },
    comments: ['C19286398619283', 'C19286398619284', 'C19286398619285', 'C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  },
}


const testData = [
  {
    'id': '97c68d6a-835e-4af3-bfc4-a6f87aff9b12',
    'creationDateTime': '2019-07-09T00:13:16.343',
    'modificationDateTime': '2019-07-09T00:13:16.343',
    'exposureType': 'PUBLIC',
    'title': 'testTitle',
    'content': 'testContent',
    'findmeStatus': 'Find',
    'images': [
      {
        'id': '41d25d29-07db-4c95-9d25-d2673aab0d29',
        'creationDateTime': '2019-07-09T00:13:16.343',
        'modificationDateTime': '2019-07-09T00:13:16.343',
        'contentType': 'BOARD',
        'contentId': '97c68d6a-835e-4af3-bfc4-a6f87aff9b12',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPCYbuguFLlYz-GtXeLjcCdUvvgbN2dWFj6DMjPpq-OY5UexE',
        'isMain': true
      },
      {
        'id': '73b5d953-8268-4b70-b7a0-9b23910e7c86',
        'creationDateTime': '2019-07-09T00:13:16.343',
        'modificationDateTime': '2019-07-09T00:13:16.343',
        'contentType': 'BOARD',
        'contentId': '97c68d6a-835e-4af3-bfc4-a6f87aff9b12',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdc1p2dXiGk01GWqTbHOAX8Em9w-8slRo6txU8nsooWv6qn0_Q',
        'isMain': false
      },
      {
        'id': '57dc256d-cabb-4ba6-9ce5-da710ff3751e',
        'creationDateTime': '2019-07-09T00:13:16.343',
        'modificationDateTime': '2019-07-09T00:13:16.343',
        'contentType': 'BOARD',
        'contentId': '97c68d6a-835e-4af3-bfc4-a6f87aff9b12',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYlJsLbxcQRUtWW7HvIDuuMQsB_4V0096NVkouFCujmCykrqfpw',
        'isMain': false
      },
      {
        'id': '6387f78c-4e32-4006-9d0a-69d7e8a14a7f',
        'creationDateTime': '2019-07-09T00:13:16.343',
        'modificationDateTime': '2019-07-09T00:13:16.343',
        'contentType': 'BOARD',
        'contentId': '97c68d6a-835e-4af3-bfc4-a6f87aff9b12',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKivGtdzclOiIyLlJEOd4T3prrfbpSEQMaMP5dqznL5jnqzIjM',
        'isMain': false
      },
      {
        'id': 'd71a8eaa-f729-4a10-bfe3-c2f91f7fb890',
        'creationDateTime': '2019-07-09T00:13:16.343',
        'modificationDateTime': '2019-07-09T00:13:16.343',
        'contentType': 'BOARD',
        'contentId': '97c68d6a-835e-4af3-bfc4-a6f87aff9b12',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOCRUX5w4_VwHxotdyfov3slFikp2HrvAvjJ6Pkv4X-tk5hHv9A',
        'isMain': false
      }
    ],
    'replyCount': 9,
    'findmeTooCount': 0,
    'findMeToo': false,
    'writer': {
      'id': '48b12215-f819-4868-aa8b-2a75468d21ac',
      'platformName': 'naver',
      'platformUserId': 'TEST',
      'name': '홍길동',
      'email': 'blue-5327@hanmail.net',
      'role': 'client1',
      'signupDate': '2019-06-16T11:13:35.652'
    }
  },
  {
    'id': '4b9b8609-4540-46df-aea4-8784571717fe',
    'creationDateTime': '2019-07-09T00:13:16.14',
    'modificationDateTime': '2019-07-09T00:13:16.14',
    'exposureType': 'PUBLIC',
    'title': 'testTitle',
    'content': 'testContent',
    'findmeStatus': 'Find',
    'images': [
      {
        'id': '6733638b-fbe7-435e-a7ad-cc1459712c90',
        'creationDateTime': '2019-07-09T00:13:16.14',
        'modificationDateTime': '2019-07-09T00:13:16.14',
        'contentType': 'BOARD',
        'contentId': '4b9b8609-4540-46df-aea4-8784571717fe',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPCYbuguFLlYz-GtXeLjcCdUvvgbN2dWFj6DMjPpq-OY5UexE',
        'isMain': true
      },
      {
        'id': '456e9185-74df-4fe2-af06-4d97734a458f',
        'creationDateTime': '2019-07-09T00:13:16.14',
        'modificationDateTime': '2019-07-09T00:13:16.14',
        'contentType': 'BOARD',
        'contentId': '4b9b8609-4540-46df-aea4-8784571717fe',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdc1p2dXiGk01GWqTbHOAX8Em9w-8slRo6txU8nsooWv6qn0_Q',
        'isMain': false
      },
      {
        'id': '76d730b8-8820-4872-921f-02527ffc7641',
        'creationDateTime': '2019-07-09T00:13:16.14',
        'modificationDateTime': '2019-07-09T00:13:16.14',
        'contentType': 'BOARD',
        'contentId': '4b9b8609-4540-46df-aea4-8784571717fe',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYlJsLbxcQRUtWW7HvIDuuMQsB_4V0096NVkouFCujmCykrqfpw',
        'isMain': false
      },
      {
        'id': '8b7709b9-ce57-4c53-b231-1db20c3520b5',
        'creationDateTime': '2019-07-09T00:13:16.14',
        'modificationDateTime': '2019-07-09T00:13:16.14',
        'contentType': 'BOARD',
        'contentId': '4b9b8609-4540-46df-aea4-8784571717fe',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKivGtdzclOiIyLlJEOd4T3prrfbpSEQMaMP5dqznL5jnqzIjM',
        'isMain': false
      },
      {
        'id': '0d897dea-b0e2-4840-b5d2-9cbd645bcfc6',
        'creationDateTime': '2019-07-09T00:13:16.14',
        'modificationDateTime': '2019-07-09T00:13:16.14',
        'contentType': 'BOARD',
        'contentId': '4b9b8609-4540-46df-aea4-8784571717fe',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOCRUX5w4_VwHxotdyfov3slFikp2HrvAvjJ6Pkv4X-tk5hHv9A',
        'isMain': false
      }
    ],
    'replyCount': 0,
    'findmeTooCount': 0,
    'findMeToo': false,
    'writer': {
      'id': '48b12215-f819-4868-aa8b-2a75468d21ac',
      'platformName': 'naver',
      'platformUserId': 'TEST',
      'name': '홍길동',
      'email': 'blue-5327@hanmail.net',
      'role': 'client1',
      'signupDate': '2019-06-16T11:13:35.652'
    }
  },
  {
    'id': 'db8d2afd-6571-4059-9334-b88ec1b5815e',
    'creationDateTime': '2019-07-09T00:13:15.796',
    'modificationDateTime': '2019-07-09T00:13:15.796',
    'exposureType': 'PUBLIC',
    'title': 'testTitle',
    'content': 'testContent',
    'findmeStatus': 'Find',
    'images': [
      {
        'id': 'acf04d5f-fc65-418d-a959-97de7ad086d9',
        'creationDateTime': '2019-07-09T00:13:15.796',
        'modificationDateTime': '2019-07-09T00:13:15.796',
        'contentType': 'BOARD',
        'contentId': 'db8d2afd-6571-4059-9334-b88ec1b5815e',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPCYbuguFLlYz-GtXeLjcCdUvvgbN2dWFj6DMjPpq-OY5UexE',
        'isMain': true
      },
      {
        'id': 'c689ecf4-791a-445f-be2d-618def511ba1',
        'creationDateTime': '2019-07-09T00:13:15.796',
        'modificationDateTime': '2019-07-09T00:13:15.796',
        'contentType': 'BOARD',
        'contentId': 'db8d2afd-6571-4059-9334-b88ec1b5815e',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdc1p2dXiGk01GWqTbHOAX8Em9w-8slRo6txU8nsooWv6qn0_Q',
        'isMain': false
      },
      {
        'id': 'a71c7ad6-b790-45b5-b8f4-c69032743eb7',
        'creationDateTime': '2019-07-09T00:13:15.796',
        'modificationDateTime': '2019-07-09T00:13:15.796',
        'contentType': 'BOARD',
        'contentId': 'db8d2afd-6571-4059-9334-b88ec1b5815e',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYlJsLbxcQRUtWW7HvIDuuMQsB_4V0096NVkouFCujmCykrqfpw',
        'isMain': false
      },
      {
        'id': '161edb52-8e8a-4925-9442-280713330ffb',
        'creationDateTime': '2019-07-09T00:13:15.796',
        'modificationDateTime': '2019-07-09T00:13:15.796',
        'contentType': 'BOARD',
        'contentId': 'db8d2afd-6571-4059-9334-b88ec1b5815e',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKivGtdzclOiIyLlJEOd4T3prrfbpSEQMaMP5dqznL5jnqzIjM',
        'isMain': false
      },
      {
        'id': '0875dacd-3653-42d9-a522-c4ed71861817',
        'creationDateTime': '2019-07-09T00:13:15.796',
        'modificationDateTime': '2019-07-09T00:13:15.796',
        'contentType': 'BOARD',
        'contentId': 'db8d2afd-6571-4059-9334-b88ec1b5815e',
        'link': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOCRUX5w4_VwHxotdyfov3slFikp2HrvAvjJ6Pkv4X-tk5hHv9A',
        'isMain': false
      }
    ],
    'replyCount': 0,
    'findmeTooCount': 0,
    'findMeToo': false,
    'writer': {
      'id': '48b12215-f819-4868-aa8b-2a75468d21ac',
      'platformName': 'naver',
      'platformUserId': 'TEST',
      'name': '홍길동',
      'email': 'blue-5327@hanmail.net',
      'role': 'client1',
      'signupDate': '2019-06-16T11:13:35.652'
    }
  },
]