console.log('content-script 타입스크립트 버전 작동');
const deemedBackground: Element | null = document.getElementsByClassName("dimmed3").item(0);
const notify = document.getElementsByClassName("notify_pop webtoon_merger").item(0);

deemedBackground ? deemedBackground.remove() : '';
notify ? notify.remove() : '';


