// components/MainSection/MainSection.js
"use client"; // Next.js App Router에서 client component로 설정

import { useRef } from "react";
import ThreeBackground from "./ThreeBackground";
import styles from "./MainSection.module.css"; // css module 예시

export default function MainSection() {
  const skillRef = useRef(null);

  const handleActionClick = () => {
    // 스킬 섹션 또는 다음 섹션으로 스크롤 이동
    // skillRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("Scroll to next section!");
  };

  return (
    <section className={styles.container}>
      {/* Three.js 배경 */}
      <ThreeBackground />

      {/* 실제 내용(텍스트, 버튼 등) */}
      <div className={styles.content}>
        <div className={styles.title}>FRONT-END DEVELOPER</div>
        <div className={styles.iconLinks}>
          <a
            href="https://github.com/사용자ID"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github-icon.png" alt="Github" />
          </a>
          <a href="https://블로그주소" target="_blank" rel="noreferrer">
            <img src="/blog-icon.png" alt="Blog" />
          </a>
        </div>
        <button className={styles.actionBtn} onClick={handleActionClick}>
          SCROLL TO NEXT
        </button>
      </div>
    </section>
  );
}
