# im-not-agree-naver-series

네이버 약관이 뭔지고 읽을 힘이 없고, 자꾸 동의하라고 하면서 내 행동을 막아버리니 ,짜증나서 안 보이게 하는 크롬 확장을 만들었다.

npm run build 후 생성된 dist 폴더를 크롬 확장 메뉴에서 직접 불러오면 됨.

아래 주소가 원본이고, 여기는 타입스크립트가 적용됐다.

원본 주소 ; https://github.com/adambullmer/vue-cli-plugin-browser-extension

0. 기존 템플릿 찾아서 설치하고 타입스크립트 짬뽕 시도에 많은 시간 소요.
1. 포기하고 원본 주소 템플릿이 대체 뭔지 파악하고 실제 작동이 되는 지 테스트 하는데 많은 시간 소요.
2. 타입스크립트로 변환하는데 시간 소요.
3. content script 는 확장을 새로고침해야 반영 된다는 것을 몰라서 개삽질 개삽질!! 으어!!!

아래 내용은 vue-cli 가 그냥 생성한 거.

- [ ] 시간 있으면, 타입스크립트용 템플릿만들어서 올리자.
- [ ] 시간 있으면 zip 압축해서 배포걸자.
- [ ] 시간 있으면 content script 빼고 나머지는 다 빼버리자. 오바리이딩 해 놨더니 새 탭 열면 내가 작성한 페이지 나옴.

근데 내일도 야근이라서 힘들 거 같아. 아 귀찮아. 다들 그냥 귀찮아서 동의했겠지?


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
