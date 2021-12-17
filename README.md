
 ## expo 실행

<img src="https://user-images.githubusercontent.com/38012855/141279723-b0ef895c-cfa6-41e3-9354-5c6ab979dcf3.JPG" width="100" height="100"/>

>expo 앱 설치하고 QR코드 스캔

## 1. Variety 화면
  
 <img src="https://user-images.githubusercontent.com/38012855/146497895-69cc8c3f-5e9c-4bbd-9e42-3bb1fd6e2d77.png" width="200" height="400"/>


공공 Api를 이용한 환율 정도 리스트 
> API : https://www.data.go.kr/data/3068846/openapi.do

## 2. Exchange 화면 
 <img src="https://user-images.githubusercontent.com/38012855/146497895-69cc8c3f-5e9c-4bbd-9e42-3bb1fd6e2d77.png" width="200" height="400"/>
 <img src="https://user-images.githubusercontent.com/38012855/146504439-a627bce3-6048-41db-bad5-42e22004efca.png" width="200" height="400"/>

<br>

__아쉬운점__
 ```js
 const { data } = await axios.get(`http://api.exchangeratesapi.io/v1/${endpoint}
 ? access_key=${ACCESS_KEY}`
 & base = EUR
 ```
 _base_ 의 EUR를 KRW로 바꿔 요청을 하면 정보를 받을 수 있지만 
 무료 api요청에서는 변경을 할 수 없었다.
 EUR 기준 다른 나라 (KRK,USD,JPY)환율 정보를 가져와 계산하는 기능을 구현 해봤다.
 
## 2. My 화면 

<img src="https://user-images.githubusercontent.com/38012855/146504472-45789eb6-6307-49c6-9d2d-3f73a5cccf07.jpg" width="200" height="400"/>

hooks를 연습해보기 위한 custom페이지 이다 
