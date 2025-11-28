import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={`section ${styles.header}`}>
            <div className={styles.bgGradient} />

            <div className="container">
                <div className={styles.hero}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/logo_new.png"
                            alt="Woodie Film Logo"
                            width={200}
                            height={200}
                            className={styles.logo}
                            priority
                        />
                    </div>
                    <h1 className={styles.heroTitle}>
                        2026, 영화과 입시 교육의<br />
                        새로운 기준을 세우는 학교
                    </h1>
                    <p className={styles.heroSubtitle}>
                        우디캠퍼스 온라인은 입시를 넘어 영화인으로서의 철학, 시선, 태도를 기르는 교육을 지향합니다.
                    </p>

                    <div className={styles.ctaGroup}>
                        <a href="#achievements" className="btn btn-outline">
                            실적 확인하기
                        </a>
                        <a href="#register" className="btn btn-primary">
                            수강 등록하기
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
