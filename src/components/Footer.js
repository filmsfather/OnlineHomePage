import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="register" className={styles.footer}>
            <div className="container">
                <div className={styles.finalCta}>
                    <h2 className={styles.ctaTitle}>
                        지금 바로,<br />
                        우디캠퍼스와 시작하세요
                    </h2>
                    <a
                        href="https://forms.gle/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
                    >
                        입학 등록 원서 바로가기
                    </a>
                </div>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>TEL.</span>
                        <span>010-8332-3041</span>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>BLOG.</span>
                        <a href="https://blog.naver.com/begninofilm" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            blog.naver.com/begninofilm
                        </a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>HOMEPAGE.</span>
                        <a href="https://woodiefilm.creatorlink.net" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            woodiefilm.creatorlink.net
                        </a>
                    </div>
                    <div style={{ marginTop: '2rem', opacity: 0.5 }}>
                        &copy; 2025 WOODIE FILM ONLINE. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
