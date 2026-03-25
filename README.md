# React1

## 2026-03-11
### Git
---

#### 기본 명령어

- `git init` : 새로운 저장소 생성
- `git add .` : 변경된 파일 전체 추가
- `git commit -m "메시지"` : 변경 내용 저장
- `git remote add origin URL` : 원격 저장소 연결
-> Git 흐름
---

#### 심화 학습

- Pull Request(PR) 사용법
- 충돌(Conflict) 해결
- Git 기록(히스토리) 관리

---

#### cf.

- `git reset --soft HEAD~1` : 최근 커밋 취소 (내용 유지)
- `git revert` : 이전 상태로 되돌리기
- `git reflog` : 작업 기록 확인
-> 복구 명령언

---

#### .gitignore

-> Git에서 관리하지 않을 파일이나 폴더를 지정하는 파일

예시:
- `node_modules/`
- `.env`
- `dist/`
-> 불필요한 파일이 업로드되는 것을 방지