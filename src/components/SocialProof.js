import styles from './SocialProof.module.css';
import ScrollAnimation from './ScrollAnimation';

export default function SocialProof() {
    return (
        <section className={`section ${styles.socialProof}`} id="achievements">
            <div className="container">
                <ScrollAnimation animation="fadeInUp">
                    <div className={styles.header}>
                        <span className={styles.crownBadge}>👑 2025학년도 입시 결과</span>
                        <h2 className={styles.title}>
                            "결과로 증명하는 우디캠퍼스"
                        </h2>
                        <p className={styles.subtitle}>
                            오직 학생들의 노력과 체계적인 시스템이 만든 압도적인 합격률
                        </p>
                    </div>
                </ScrollAnimation>

                <div className={styles.grid}>
                    <ScrollAnimation animation="fadeInUp" delay={0.2}>
                        <div className={styles.card}>
                            <span className={styles.number}>92%</span>
                            <span className={styles.label}>수시 1단계 합격률</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.4}>
                        <div className={styles.card}>
                            <span className={styles.number}>15:1</span>
                            <span className={styles.label}>평균 경쟁률 돌파</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.6}>
                        <div className={styles.card}>
                            <span className={styles.number}>Top 5</span>
                            <span className={styles.label}>주요 대학 전원 배출</span>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className={styles.schoolListSection} style={{ marginTop: '6rem' }}>
                    <ScrollAnimation animation="fadeInUp">
                        <h3 className={styles.title} style={{ fontSize: '2rem', marginBottom: '3rem' }}>2025년 다관왕 합격자</h3>
                    </ScrollAnimation>

                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
                        <ScrollAnimation animation="fadeInUp" delay={0.2}>
                            <div className={styles.card} style={{ padding: '2rem' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>6관왕</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>류태영</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>세종대, 서울예대, 서경대, 수원대,<br />동아방송예대, 서일대 합격</div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={0.3}>
                            <div className={styles.card} style={{ padding: '2rem' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>4관왕</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>하정성</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>한예종, 국민대, 동국대,<br />상명대 합격</div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation animation="fadeInUp">
                        <h3 className={styles.title} style={{ fontSize: '2rem', marginBottom: '3rem' }}>대학별 합격자 명단</h3>
                    </ScrollAnimation>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', textAlign: 'left' }}>
                        <ScrollAnimation animation="fadeInUp" delay={0.1}>
                            <div style={{ background: '#fff', padding: '1.5rem', border: '1px solid var(--border)' }}>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>한국예술종합학교</h4>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영상원 영화과 합격 하정성</div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={0.2}>
                            <div style={{ background: '#fff', padding: '1.5rem', border: '1px solid var(--border)' }}>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>중앙대학교</h4>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화과 합격 강O준</div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={0.3}>
                            <div style={{ background: '#fff', padding: '1.5rem', border: '1px solid var(--border)' }}>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>동국대학교</h4>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화영상학과 합격 하정성</div>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화영상학과 합격 윤O서</div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={0.4}>
                            <div style={{ background: '#fff', padding: '1.5rem', border: '1px solid var(--border)' }}>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>서울예술대학교</h4>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화전공 합격 류태영</div>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화전공 합격 조지혜</div>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화전공 합격 이정원</div>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화전공 합격 진소민</div>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>영화전공 합격 이준서</div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <ScrollAnimation animation="fadeInUp" delay={0.5}>
                        <a href="#system" className="btn btn-primary">
                            합격 시스템 자세히 보기
                        </a>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
