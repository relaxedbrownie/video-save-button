# video-save-button

모바일 브라우저에서 웹페이지의 동영상을 사진 앱이나 파일로 저장하게 해 주는 유저스크립트입니다.

- 동영상 화면을 탭하면 오른쪽 위에 저장 버튼이 2초 동안 나타납니다. 버튼이 떠 있을 때 다시 탭하면 바로 사라집니다.
- 버튼을 한 번 누르면 영상을 불러오고(테두리 링으로 진행률 표시), ✓로 바뀌면 다시 눌러 저장합니다.
  - 아이폰: 공유 시트가 열리면 **비디오 저장**을 누르면 사진 앱에 저장됩니다. 공유 시트가 안 뜨는 경우엔 파일 앱의 다운로드 폴더에 저장됩니다.
  - webm 영상은 사진 앱이 지원하지 않아서 **비디오 저장**이 안 보일 수 있습니다. 이때는 **파일에 저장**을 누르세요.
- 일반 영상 파일(mp4·mov·webm 등)과 HLS 스트리밍(`.m3u8`)을 지원합니다. 스트리밍 영상은 조각을 모두 받아 일반 MP4 파일 하나로 합쳐 저장합니다.
- 다른 탭이나 홈 화면에 다녀와도, 끊긴 조각부터 이어받습니다(그사이 탭이 새로고침되지 않은 경우).
- 버튼을 길게 누르면 진단 정보가 나옵니다. 안 될 때 이 내용을 복사해 알려 주시면 원인을 찾기 쉽습니다.

## 설치

[`video-save-button.user.js`](https://raw.githubusercontent.com/relaxedbrownie/video-save-button/main/video-save-button.user.js)를 여세요.

- **Tampermonkey**: 위 링크를 열면 설치 화면이 뜹니다.
- **wBlock·AdGuard**: 유저스크립트를 주소로 추가하는 메뉴에 아래 주소를 넣으세요.

```
https://raw.githubusercontent.com/relaxedbrownie/video-save-button/main/video-save-button.user.js
```

처음 받을 때 Tampermonkey가 다른 도메인 접근을 허용할지 물으면 **모든 도메인 항상 허용**을 누르세요. 사이트마다 영상 서버 주소가 달라서, 이걸 누르지 않으면 새 사이트에서 받을 때마다 다시 묻습니다. 스크립트는 버튼을 누른 영상 파일만 받아 옵니다.

## 버튼 모양

<table>
<thead><tr><th width="68">모양</th><th>뜻</th></tr></thead>
<tbody>
<tr><td align="center"><img src="images/btn-download.svg" width="32" height="32" align="absmiddle" alt="다운로드 아이콘"></td><td>누르면 불러오기 시작</td></tr>
<tr><td align="center"><img src="images/btn-loading.svg" width="32" height="32" align="absmiddle" alt="다운로드 아이콘과 테두리 링"></td><td>불러오는 중 (링이 진행률만큼 참, 진행률을 모를 땐 링이 돎)</td></tr>
<tr><td align="center"><img src="images/btn-ready.svg" width="32" height="32" align="absmiddle" alt="체크 아이콘"></td><td>준비 완료, 누르면 저장</td></tr>
<tr><td align="center"><img src="images/btn-error.svg" width="32" height="32" align="absmiddle" alt="빨간 금지 아이콘"></td><td>저장할 수 없는 영상이거나 실패 (길게 누르면 이유가 나옴)</td></tr>
</tbody>
</table>

## 저장할 수 없는 영상

- DRM으로 보호된 영상(OTT 등)
- 생방송
- DASH(`.mpd`) 스트리밍, 소리가 영상과 따로 나뉜 스트리밍
- 아이폰용 MP4로 바꿀 수 없는 형식(HEVC 스트리밍 등)
- 영상 주소를 페이지에 드러내지 않는 사이트(유튜브 등)

## 안 될 때

- 버튼을 **길게 눌러** 진단 창을 여세요. 실패한 단계, 서버 응답, 영상 형식이 나옵니다. 전체 주소 대신 도메인만 나오지만, 어느 사이트인지는 보이니 다른 사람에게 보낼 때 참고하세요.
- 큰 영상은 다 받을 때까지 그 탭을 화면에 띄워 두세요. 메모리가 부족하면 브라우저가 탭을 새로고침해서 받던 내용이 사라질 수 있습니다.

## 파일

| 파일 | 설명 |
|---|---|
| `video-save-button.user.js` | 유저스크립트 |
| `licenses/mux.js-LICENSE.txt` | 스크립트에 포함된 mux.js의 라이선스 |
| `images/` | 이 설명서의 버튼 그림 |

## 업데이트

새 버전은 스크립트의 버전 번호(`@version`)를 올리고, 같은 이름의 태그와 릴리스(예: `v3.3.0`)를 붙입니다. 버전별로 바뀐 점은 [Releases](https://github.com/relaxedbrownie/video-save-button/releases)에서 볼 수 있습니다. 새 `video-save-button.user.js`로 다시 설치하세요.

## 주의

저작권이 있는 영상은 권리자가 허락한 범위나 개인적으로 이용하는 범위에서만 저장하고, 각 사이트의 이용 약관을 지켜 주세요. 저장한 영상을 어떻게 쓰는지에 대한 책임은 사용하는 사람에게 있습니다.

## 라이선스

[MIT](LICENSE)

스크립트 안에 [mux.js](https://github.com/videojs/mux.js) 7.1.0(Apache-2.0)의 공식 배포 파일 `mux-mp4.min.js`를 수정 없이 넣었습니다. 라이선스 전문은 [`licenses/mux.js-LICENSE.txt`](licenses/mux.js-LICENSE.txt)에 있습니다.
