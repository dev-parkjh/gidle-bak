export default class CommonUtil {
}

export function customErr(message: string): boolean {
  if (typeof message != 'undefined') console.error(message);
  return false;
}

export function querySelector(query: string): Element | null {
  if (typeof query == 'undefined') {
    console.error('선택자를 입력하지 않았습니다.');
    return null;
  }

  const element = document.querySelector(query);
  if (!element) {
    console.error('잘못된 선택자입니다.');
    return null;
  }

  return element;
}