# 전자서명 시스템

## 파일 구성
- `upload.html` : 관리자용 문서 업로드 및 서명 위치 지정
- `sign.html`   : 서명자용 서명 입력 및 메일 전송
- `vercel.json` : Vercel 배포 시 팝업 정책 헤더 설정
- `README.md`   : 이 문서

## API 키 설정
1. Google Cloud Console → **API 및 서비스** → **자격 증명** → **API 키**
2. 해당 API 키 값을 복사하여 `sign.html` 내부 gapi.client.init()의 `apiKey: 'YOUR_API_KEY'` 위치에 붙여넣기

## 배포
1. GitHub 저장소에 전체 파일 커밋
2. Vercel 연동 후 배포 URL 확인
3. `https://<your-domain>/upload.html` 에서 파일 업로드 및 링크 생성
4. 생성된 `sign.html?id=...` 링크로 서명 테스트
