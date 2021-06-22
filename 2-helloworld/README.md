# tip-calculator

[ 코딩 트레이닝을 통한 hello name! ]
<br />
<br />
#1 prompt를 통한 이름 입력

일반적으로 Hello world는 프로그래밍을 처음 시작하는 경우 한번씩은 다 경험해볼 수 있다.
그러나 여기에는 이름이 들어가지 않는다.
그래서 prompt를 통해서 이름을 쓰면 그 이름이 모든 name value에 적용 되도록 해보자!

<br />
<br />
#2 한번에 모든 값을 바꾸려면?<br />
<br />
html 파일을 보면 이름이 들어가야할 부분이 두 군데가 있다.<br />
어떻게 해야 이 두 가지 span tag를 한번에 바꿀 수 있을까?<br />
당연히도 querySelectorAll만 활용해서는 모든 것들이 바뀌지 않는다.<br />
<br />
그렇기 때문에 for loop를 활용했다.<br />
