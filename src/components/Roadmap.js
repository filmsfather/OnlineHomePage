import styles from './Roadmap.module.css';

export default function Roadmap() {
    return (
        <section className={`section ${styles.roadmap}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>완전히 차별화된 1년 과정</h2>
                    <p className={styles.intro}>
                        우디캠퍼스의 1년 커리큘럼은 기초부터 심화, 대학별 대비, 직전 대비까지<br />
                        영화과 합격 실력으로 성장하도록 설계된 완성형 성장 시스템입니다.<br />
                        전공 선생님들의 전문 교육과 주간·월간 학습 관리로<br />
                        누구든 1년 안에 확실하게 성장하는 구조를 갖춘 유일한 영화입시 교육입니다.
                    </p>
                </div>

                <div className={styles.curriculumSection}>
                    <h3 className={styles.sectionTitle}>1년 완성 커리큘럼</h3>
                    <p className={styles.sectionDesc}>누구든 성장하는 1년 성장 구조</p>

                    <div className={styles.timeline}>
                        <div className={styles.step}>
                            <div className={styles.stepLabel}>얼리버드 과정</div>
                            <div className={styles.stepContent}>
                                방학 시간을 집중해 영화 다작 감상·직접 제작·논문 작성까지 경험하며<br />
                                영화적 감각을 빠르게 확장하는 과정
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepLabel}>기초 정규과정</div>
                            <div className={styles.stepContent}>
                                영화언어·연출·작법의 기본기를 탄탄히 쌓아<br />
                                영화적 사고의 기반을 만드는 단계
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepLabel}>심화 과정</div>
                            <div className={styles.stepContent}>
                                작품 분석력과 장면 설계 능력을 확장해<br />
                                실제 연출·작문 실력을 한 단계 끌어올리는 성장 단계
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepLabel}>대학별 대비</div>
                            <div className={styles.stepContent}>
                                각 대학의 스타일·출제 경향에 맞춘 맞춤형 문제풀이 및<br />
                                인터뷰 대비를 집중적으로 훈련하는 과정
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepLabel}>직전대비</div>
                            <div className={styles.stepContent}>
                                모의 실기·모의 면접을 통해 실제 시험 흐름을 완전하게 재현하고,<br />
                                시험장에서의 완성도를 극대화하는 마지막 단계
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.lectureSection}>
                    <h3 className={styles.sectionTitle}>우디쌤 인생특강</h3>
                    <p className={styles.sectionDesc}>영화보다 앞서, '나'를 만드는 교육</p>

                    <div className={styles.lectureList}>
                        <div className={styles.lectureItem}>
                            <div className={styles.lectureTitle}>공부하는 법</div>
                            <div className={styles.lectureContent}>
                                책 읽는 법, 공부하는 법, 사고 체계 만들기 등 정보를 이해하고<br />
                                지식을 자기 것으로 만드는 학습 기반을 만드는 게 먼저입니다
                            </div>
                        </div>
                        <div className={styles.lectureItem}>
                            <div className={styles.lectureTitle}>나의 세계</div>
                            <div className={styles.lectureContent}>
                                셀프브랜딩, 나의 유니버스, 역사 이해 등<br />
                                자기 세계관·관점·정체성을 정리해주는 성장 교육입니다.
                            </div>
                        </div>
                        <div className={styles.lectureItem}>
                            <div className={styles.lectureTitle}>행동과 성과</div>
                            <div className={styles.lectureContent}>
                                RSD 활용, 몰입하는 법, 장르 사고, 하브루타 등<br />
                                작은 행동을 지속하고 성과로 연결하는 방법을 알려줍니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
