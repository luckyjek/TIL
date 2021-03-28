<blockquote>
<h3>1.생성자란?</h3>
<h5>
인스턴스가 생성될 때 호출되는 '인스턴스 초기화 메서드'<br>
따라서 인스턴스 변수의 초기화 작업에 주로 사용.
<br>
<h6>|참고| 인스턴스초기화란, 인스번스변수들을 초기화하는것을 뜻한다. <br>
즉, 인스턴스변수에 적절한 값을 저장하는것</h6><br>
1.생성자의 이름은 클래스의 이름과 같아야한다.<br>
2.생성자는 리턴 값이 없다.
</h5>
</blockquote>

<h3>1.Card클래스의 인스턴스를 생성하는 코드를 예로 들어보자<br>
<br>
Card c = new Card();
<br>
</h3>
<b>
1. 연산자 new에 의해서 메모리(heap)에 Card클래스의 인스턴스가 생성된다.<br>
2. 생성자 Card()가 호출되어 수행된다.<br>
3. 연산자 new의 결과로, 생성된 Card인스턴스의 주소가 반환되어 참조변수 c에 저장된다.<br>
</b>

<h3><br> 
2.매개변수가 있는 생성자
</h3>
<details open>
  <summary> 
    <b>인스턴스를 생성한 다음에 인스턴스 변수의 값을 변경하는 것보다<br>
       매개변수를 갖는 생성자를 사용하는 것이 코드를 보다 간결하고 직관적으로 만든다.
    </b>
  </summary>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/constructor.jpg>
  </div>
</details>
<br>
<h3><br> 
3.초기화 블럭
</h3>
<details open>
  <summary> 
    <b>초기화 블럭에는 '클래스 초기화 블럭'과 '인스턴스 초기화 블럭' 2종류가 있다.</b><br>
      <h6>클래스 초기화 블럭 : 클래스가 메모리에 처음 로딩될 때 한 번만 수행<br>
          인스턴스 초기화 블럭 : 생성자와 같이 인스턴스를 생성할 때 마다 수행된다.<br>
          +)생성자 보다 인스턴스 초기화 블럭이 먼저 수행된다는 사실도 기억하자!
      </h6> 
  </summary>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/blokTest.jpg>
    <h6>클래스 초기화 블럭이 가장 먼저 수행되어 'static{}'이 화면에 출력된다.<br>
        그 다음에 main메서드가 수행되어 BlokTest인스턴스가 생성되면서 인스턴스 초기화블럭이<br>
        먼저 수행되고, 끝으로 생성자가 수행된다. <br>
        즉, 클래스 초기화 블럭은 처음 메모리에 로딩될 때 한번 만 수행되었지만, <br>
        인스턴스 초기화 블럭은 인스턴스가 생성될 때 마다 수행되었다.
    </h6>
  </div>
</details>
<br>
<h3>
4.306pg_초기화가 수행되는 시기와 순서에 대해 정리
</h3>
<details open>
  <summary><b>
      인스턴스변수의 초기화 시점 : 인스턴스가 생성될 때마다 각 인스턴스별로 초기화가 이루어진다.<br>
      클래스변수의 초기화 순서 : 기본값 -> 명시적초기화 -> 클래스 초기화 블럭<br>
      인스턴스변수의 초기화 순서 : 기본값 -> 명시적초기화 -> 인스턴스 초기화 블럭 -> 생성자</b><br>
   
  </summary>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/ProductTest.jpg>
    <h6>
    Product클래스의 인스턴스를 생성할 때마다 인스턴스 블럭이 수행되어, 클래스 변수<br>
    count의 값을 1증가시킨 다음, 그 값을 인스턴스 변수 serialNo에 저장한다.<br>
    이렇게 함으로써 새로생성되는 인스턴스는 이전에 생성된 인스턴스보다 1이 증가된<br>
    serialNo을 갖게된다. 
    </h6>
  </div>
</details>
