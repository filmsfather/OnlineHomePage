import styles from './Header.module.css';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navBar}>
                <div className="container">
                    {/* Navigation content would go here, for now just keeping it simple or moving logo here if requested later */}
                </div>
            </div>

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <ScrollAnimation animation="fadeInUp" delay={0.1}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/images/logo_new.png"
                                alt="Woodie Film Logo"
                                width={150}
                                height={150}
                                className={styles.logo}
                                priority
                            />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.3}>
                        <h1 className={styles.heroTitle}>
                            2026, 영화과 입시의<br />
                            새로운 기준
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.5}>
                        <p className={styles.heroSubtitle}>
                            우디캠퍼스 온라인은 입시를 넘어<br />
                            영화인으로서의 철학, 시선, 태도를 기르는 교육을 지향합니다.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.7}>
                        <div className={styles.ctaGroup}>
                            <a href="#achievements" className="btn btn-outline" style={{ borderColor: '#111', color: '#111' }}>
                                실적 확인하기
                            </a>
                            <a href="#register" className="btn btn-primary">
                                수강 등록하기
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className={styles.heroImage}>
                    {/* Potential Hero Image */}
                </div>
            </div>
        </header>
    );
}
