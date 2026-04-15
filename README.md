# 202430113 안지혜

## 2026-04-15 
#### 리스트 렌더링
```js
    const heroes = [
        {
            id: 0,
            casting: "스파이더맨",
            name: "피터 파커",
        },
        {
            id: 1,
            casting: "아이언맨",
            name: "토니 스타크",
        },
    ]
```
- 배열을 객체 형태로 구조화하면 데이터 관리가 더 쉬어짐

```js
    const filterTests = heroes.filter(
        (hero) => hero.name === "클라크 켄트"
    );
```
- filter() 활용
    - 특정 조건에 맞는 데이터만 추출

```js
    const listHeroes = filterTests.map((hero) => (
        <li>
            <p>
            {hero.name}의 배역은 {hero.casting} 입니다.
            </p>
        </li>   
    ));
```
- map()으로 렌더링

#### 화살표 함수 주의점
- 한 줄 표현식 &rarr; return 생략 가능
```js
    const list = arr.map((item) => <li>{item}</li>);
```
- {} 사용시 &rarr; 반드시 return 필요
```js
    const list = arr.map((item) => {
        return <li>{item}</li>;
    });
```

#### key prop
- 리스트 렌더링 시 각 요소를 구분하기 위한 값
- React가 변경사항을 효율적으로 추적하기 위해 사용
```js
    <li key={hero.id}>
```
- 특징
    - 고유한 값 사용 (id 추천)
    - 배열 내부 데이터에 포함되어 있어야 함
    - index는 가급적 비추천 (순서 변경 시 문제 발생)


#### Fragment와 key
- 여러 요소를 반환할 때는 하나로 묶어야 함 
```js
    <>
        <h1></h1>
    </>
```
- Fragment는 key 전달 불가능
- key 필요하면 <div> 또는 <Fragment> 사용

#### 순수 함수
- 같은 입력 &rarr; 항상 같은 결과
- 외부 상태 변경 X (side effect 없음)

#### UI를 트리 구조로 이해하기
- React는 UI를 트리 구조로 관리
- 구조 흐름
    - 컴포넌트 &rarr; 하위 컴포넌트 &rarr; DOM
- 특징
    - 컴포넌트 간 관계 파악 쉬움
    - 상태 관리 및 성능 최적화에 유리
- cf
    - HTML &rarr; DOM 트리
    - CSS &rarr; CSSOM 트리
    - React &rarr; Render 트리

---

## 2026-04-08 (6주차)
### 조건부 렌더링

#### 삼항 연산자 (? :)
- 조건에 따라 두 가지 결과 중 하나를 선택
```js
    function Item({ name, isPacked }) {
    return (
        <li>
            {isPacked ? `${name} ✅` : name}
        </li>
    );
}
```
#### 논리 연산자 AND(&&)
- 조건이 true일 때만 JSX를 렌더링
```js
    function Item({ name, isPacked }) {
        return (
            <li>
                {name} {isPacked && "✅"}
            </li>
        );
}
```

- JSX 내부에서는 if문을 사용할 수 없음
- 대신 && 또는 ? :를 사용해야 함
- 단순 표시 → &&
- 조건에 따라 내용이 달라짐 → ? :

#### 리스트 렌더링
- 컴포넌트에서 동일하나 구조의 데이터를 여러 개 출력해야 하는 경우 사용
- 댓글 목록, 유저 리스트, 이미지 갤러리 같은 곳에서 자주 쓰임
- 핵심 개념
    - 데이터를 먼저 배열 형태로 관리
    - map()으로 JSX로 변환해서 렌더링
```js
    const hero = {
        "스파이더맨: 피터 파커",
        "아이언맨: 토니 스파크",
        "배트맨: 브루스 웨인",
        "슈퍼맨: 클라크 켄트",
        "헐크: 로버트 브루스 배너",
    };

    const listHeroes = heroes.map((hero) => <li>{hero}</li>);

    return <ul>{listHeroes}<ul/>;
```
- 데이터 개수만큼 자동으로 UI 생성
- 유지보수 편함
- filter() 활용
    - 특정 조건에 맞는 데이터만 걸러서 렌더링 가능

```js
    const filtered = heroes.filter((hero) => hero.includes("맨"));
```
- 정리
    - 반복 출력 &rarr; map()
    - 조건 필터링 &rarr; filter()
    - 둘이 같이 쓰는 경우 많음
---

## 2026-04-01 (5주차)
### JSX 개념 정리
#### JSX 마크업 작성

- 태그(Tag): HTML과 같은 마크업 요소를 표기하기 위한 개별 기호 ex) <div>, <li> etc...
- 엘리먼트(Element): DOM의 구성 단위로 "여는 태그 + 내용 + 닫는 태그" 전체를 의미
    - DOM 노드라고도 불림 ex) <p>...</p>
- 어트리뷰트(Attribute): 태그의 행동 제어, 엘리먼트에 추가적인 정보를 제공하기 위한 속성
```js
    // 컴포넌트에서 함수 호출 방법
    export default function UseJsx() {
    const name = "React"

    function formatDate(date) {
        return new Intl.DateTimeFormat (
            "en-US",
            { weekday: "long"}
        ).format(date);
    }
    return(
        <>
            <h1>Hello {name}</h1>
            <p>Today is {formatDate(new Date())}</p>
        </>
    );
}
```

---

### Props
#### Props의 데이터 전달

- 부모 컴포넌트와 자식 컴포넌트의 차이
    - 부모 컴포넌트:
        - 자식 컴포넌트를 자신의 구조 안에 포함(Import 및 호출)하고, 데이터 전달(props)
    - 자식 컴포넌트:
        - 부모 컴포넌트로부터 전달받은 props를 통해 구체적인 UI를 만들어서 부모 컴포넌트에 다시 반환
        - 독립적으로 재사용 가능

- Props 특징
    - 단방향 통신: 부모 &rarr; 자식
    - 읽기 전용: 자식 컴포넌트는 props 수정 불가
    - 컴포넌트 재사용성 증가
    - 객체 형태로 전달

---

## 2026-03-25 (4주차)
### Vite에서 SWC가 사라진 이유

- SWC (Speedy Web Compiler)
    - Rust 기반으로 만들어진 고속 컴파일러
    - Babel을 대체하기 위함
    - TypeScript &rarr; JavaScript 변환(트랜스파일링)에 강점
    - Next.js 등 최신 프레임워크에서 사용

- Oxc (Oxidation Compiler)
    - ESLint, Prettier, TypeScript 기능까지 통합하려는 차세대 도구
    - 파싱 속도가 SWC보다 훨씬 빠름 (최대 3배 이상)
    - 린팅/정적 분석 성능이 매우 뛰어남

---

### React 컴포넌트
#### 컴포넌트란?
- React에서 UI를 구성하는 기본 단위이며, 함수

```js
export default function Profile() {
    return(
        <>
        </>
    )
}
```

#### 컴포넌트 분리와 사용
```js
// 분리
// Profile.jsx
export default function Profile() {
    return <img src="..."/>
}
```

```js
// 사용
import Profile from "./Profile"

export default function App() {
    return <Profile/>
}
```

- 컴포넌트 작성 규칙
    - 생성 과정 
            - 파일명과 컴포넌트 이름을 동일하게 맞추기
            - export default 또는 export 사용
            - 함수 내부에서 JSX 반환
    - 사용 방법
        - import로 불러오기
        - <컴포넌트명/> 형태로 사용

---

#### 컴포넌트 중첨 (Nesting)
- 컴포넌트 안에서 다른 컴포넌트 사용하는 구조
```js
function Gallery() {
    return (
        <>
            <Profile/>
            <Profile/>
        </>
    )
}
```
- 컴포넌트 안에 선언이 아니라 **컴포넌트를 호출해서 사용하는 것**

---

#### React 렌더링 구조
- 컴포넌트 &rarr; App.jsx &rarr; main.jsx &rarr; index.html
- 대문자 = 컴포넌트, 소문자 = HTML

---

#### Export 방식 차이

##### Default Export 
``` js
export default function A() {}
import A from "./A"
```
- 이름 변경 가능
- 파일당 1개만 가능

##### Named Export 
```js
export function A() {}
import { A } from "./A"
```
- 이름 반드시 동일
- 여러 개 export 가능

##### 다양한 import 방식
```js
import { A } from "./file"
import { A, B } from "./file"
import { A as C } from "./file"
import * as All from "./file"
```
- Named Export 추천 이유
    - 이름이 강제되어 협업 시 혼동 감서
    - 리팩토링 시 안전
    - 트리 쉐이킹(Tree Shaking)에 유리

--- 

### JSX 개념 정리
#### JSX란?
- JavaScript 안에서 HTML처럼 UI를 작성할 수 있게 해 주는 문법

#### JSX 규칙 3가지
1. 반드시 하나의 부모 요소로 감싸기
2. 모든 태그는 닫기
3. 속성은 camelCase 사용
ex) `<img className="icon" />`

- JSX를 사용하는 이유
    - 기존 방식
        - HTML / CSS / JS 분리
    - React 방식
        - **UI와 로직이 강하게 연결됨**

- Key Takeaways
    - React는 컴포넌트 기반 구조
    - JSX를 사용해 UI를 직관적으로 작성
    - Named Export가 협업에 유리
    - Vite는 점점 더 빠른 Rust 기반 도구(Oxc 등)로 발전 중

---

## 2026-03-11 (2주차)
### Git

#### 기본 명령어

- `git init` : 새로운 저장소 생성
- `git add .` : 변경된 파일 전체 추가
- `git commit -m "메시지"` : 변경 내용 저장
- `git remote add origin URL` : 원격 저장소 연결
-> Git 흐름

#### 심화 학습

- Pull Request(PR) 사용법
- 충돌(Conflict) 해결
- Git 기록(히스토리) 관리

#### cf.

- `git reset --soft HEAD~1` : 최근 커밋 취소 (내용 유지)
- `git revert` : 이전 상태로 되돌리기
- `git reflog` : 작업 기록 확인
&rarr; 복구 명령언

#### .gitignore

&rarr; Git에서 관리하지 않을 파일이나 폴더를 지정하는 파일

예시:
- `node_modules/`
- `.env`
- `dist/`
&rarr; 불필요한 파일이 업로드되는 것을 방지