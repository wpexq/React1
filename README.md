# React1

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