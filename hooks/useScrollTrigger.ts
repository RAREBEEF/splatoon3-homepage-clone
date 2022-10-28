import React from "react";
import _ from "lodash";

/**
 *
 * @returns scrollTrigger
 */
const useScrollTrigger = () => {
  /**
   *
   * @param ref 트리거 타겟, 해당 타겟이 뷰포트 하단에 닿으면 콜백 함수를 실행.
   * @param callback 타겟이 뷰포트 하단에 닿았을 때 실행할 함수.
   */
  const scrollTrigger = (
    ref: React.RefObject<HTMLElement>,
    callback: Function
  ) => {
    if (!ref.current) {
      return;
    }

    const target = ref.current;

    // 스크롤 위치와 타겟의 위치를 비교
    const windowScrollListener = () => {
      const { scrollY, innerHeight } = window;

      const targetY = window.pageYOffset + target.getBoundingClientRect().top;

      // 위치에 도달하면 콜백 실행 후 클린업
      if (targetY <= scrollY + innerHeight) {
        callback();
        window.removeEventListener(
          "scroll",
          _.throttle(windowScrollListener, 200)
        );
      }
    };
    window.addEventListener("scroll", _.throttle(windowScrollListener, 200));

    // 리사이즈 발생 시 이벤트리스너 재설정
    const windowResizeListener = () => {
      window.removeEventListener(
        "scroll",
        _.throttle(windowScrollListener, 200)
      );
      window.addEventListener("scroll", _.throttle(windowScrollListener, 200));
    };
    window.addEventListener("resize", _.debounce(windowResizeListener, 500));
  };

  return scrollTrigger;
};

export default useScrollTrigger;
